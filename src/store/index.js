import Vue from "vue";
import Vuex from "vuex";
import icyecomServices from "@/services/http-client";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    sidebar: false,
    token: ""
  },
  mutations: {
    toggleSidebar: (state) => {
      state.sidebar = !state.sidebar;
    },
    token: (state, payload) => {
      state.token = payload
    }
  },
  actions: {
    async postlogin({commit}, payload) {
      console.log(payload)
      await icyecomServices.login(payload).then(response => {
        commit("token", response.data.access_token);
      })
    }
  },
  getters: {
    getToken(state) {
      return state.token
    }
  },
  modules: {},
});
