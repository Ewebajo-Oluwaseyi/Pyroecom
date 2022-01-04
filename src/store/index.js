import Vue from "vue";
import Vuex from "vuex";
import icyecomServices from "@/services/http-client";
import router from '../router/index';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebar: false,
    token: "",
    loginInfo: "",
    bio: "",
    address: "",
    moreInfo: "",
    profile: [],
    next: false,
    error: "",
    msg: ""
  },
  mutations: {
    toggleSidebar: (state) => {
      state.sidebar = !state.sidebar;
    },
    token: (state, payload) => {
      state.token = payload
    },
    loginInfo: (state, payload) => {
      state.loginInfo = payload;
    },
    bio: (state, payload) => {
      state.bio = payload
    },
    address: (state, payload) => {
      state.address = payload
    },
    moreInfo: (state, payload) => {
      state.moreInfo = payload;
    },
    profile: (state, payload) => {
      state.profile = payload
    },
    enableNext: (state, payload) => {
      state.next = payload;
    },
    error: (state, payload) =>{
      state.error = payload;
    }, 
    msg: (state, payload) =>{
      state.msg = payload;
    },
  },
  actions: {
    async postlogin({commit}, payload) {
      await icyecomServices.login(payload).then(response => {
        commit("token", response.data.access_token);
        if(response.data.access_token) {
          localStorage.setItem("jwt", response.data.access_token);
          router.push("/")
        }
      })
    },
    async postRegister({dispatch, getters, commit}) {
      const {firstname, lastname, email, password, password_confirmation} = getters.loginInfo;
      const {bio} = getters.bio
      const {address_1, phone, city, country} = getters.address;
      const {gender, twitter_link, instagram_link, languages} = getters.moreInfo;
      await icyecomServices.register({firstname, lastname, email, password, password_confirmation, bio, address_1, phone, city, country, gender, twitter_link, instagram_link, languages}).then(response => {
       
        if (response.data.success === true) {
          dispatch("postlogin", {email, password})
        } else {  
         commit("error", response.data.data.email[0])
        }
      })
    },
    async getProfile({commit}) {
      const token = localStorage.getItem("jwt");
      await icyecomServices.profile({headers: {"Authorization": `Bearer ${token}`}}).then(response => {
        commit("profile", response.data);
      })
    },
    async updateProfile({commit}, payload) {
      console.log(payload)
      const token = localStorage.getItem("jwt");
      await icyecomServices.edit(payload, {headers: {"Authorization": `Bearer ${token}`}}).then(response => {
        console.log(response.status)
        if (response.status === 200) {
          localStorage.removeItem("jwt");
          router.push("/login");
        }
        commit("msg", response.data.message);
        setTimeout(() => {
          commit("msg", "");
        }, 2000);
      })
    }
  },
  getters: {
    getToken(state) {
      return state.token
    },
    next(state) {
      return state.next
    },
    loginInfo(state) {
      return state.loginInfo
    },
    bio(state) {
      return state.bio
    },
    address(state) {
      return state.address
    },
    moreInfo(state) {
      return state.moreInfo
    }, 
    profile(state) {
      return state.profile
    },
    error(state) {
      return state.error
    },
    msg(state) {
      return state.msg
    }    
  },
  modules: {},
});
