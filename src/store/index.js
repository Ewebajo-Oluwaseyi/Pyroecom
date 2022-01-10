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
    msg: "",
    notification: [],
    social: "",
    dashboardData: []
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
    social: (state, payload) => {
      state.social = payload;
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
    notification: (state, payload) => {
      state.notification = payload
    },
    dashboardData: (state, payload) => {
      state.dashboardData = payload
    }
  },
  actions: {
    async postlogin({commit}, payload) {
      await icyecomServices.login(payload).then(response => {
        commit("token", response.data.access_token);
        if(response.data.access_token) {
          localStorage.setItem("jwt", response.data.access_token);
          router.push("/");
        }
      })
    },
    async postRegister({dispatch, getters, commit}) {
      const {firstname, lastname, email, password, password_confirmation} = getters.loginInfo;
      const {bio} = getters.bio
      const {address_1, phone, city, country} = getters.address;
      const {twitter_link, instagram_link, facebook_link} = getters.social;
      const {gender, languages} = getters.moreInfo;
      await icyecomServices.register({firstname, lastname, email, password, password_confirmation, bio, address_1, phone, city, country, gender, twitter_link, instagram_link,facebook_link, languages,}).then(response => {

        if (response.status === 201) {
          dispatch("postlogin", {email, password})
        } else { 
         commit("error", response.data.data.email[0]);
        }
      })
    },
    async getProfile({commit}) {
      const token = localStorage.getItem("jwt");
      await icyecomServices.profile({headers: {"Authorization": `Bearer ${token}`}}).then(response => {
        if(response.data) {
          localStorage.setItem("profile", JSON.stringify(response.data));
        }
        commit("profile", response.data);
      })
    },
    async updateProfile({commit}, payload) {
      const token = localStorage.getItem("jwt");
      await icyecomServices.edit(payload, {headers: {"Authorization": `Bearer ${token}`}}).then(response => {
        if (response.status === 200) {
          localStorage.setItem("jwt", response.data.access_token);
          commit("token", response.data.access_token);
        }
       /* commit("msg", response.data.message);
        setTimeout(() => {
          commit("msg", "");
        }, 2000);*/
      })
    },
    async getNotification({commit}) {
      const token = localStorage.getItem("jwt");
      await icyecomServices.noti({headers: {"Authorization": `Bearer ${token}`}}).then(response => {
        commit("notification", response.data.data)
      })
    },
    async getDashboardData({commit}) {
      const token = localStorage.getItem("jwt");
      await icyecomServices.dashboard({headers: {"Authorization": `Bearer ${token}`}}).then(response => {
        commit("dashboardData", response.data.data)
      })
    },
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
    },
    notification(state) {
      return state.notification
    },
    social(state) {
      return state.social
    },
    dashboardData(state) {
      return state.dashboardData
    }
  },
  modules: {},
});
