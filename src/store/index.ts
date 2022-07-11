import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cities: [],
    search: "",
    outlets: {},
  },
  getters: {},
  mutations: {
    setCities(state, payload) {
      state.cities = payload;
    },
    setSearchResults(state, payload) {
      state.search = payload;
    },
    setSearchResult(state, payload) {
      state.outlets = payload;
    },
  },
  actions: {
    async getSuggestion() {
      return await axios
        .get(
          `${process.env.VUE_APP_CORS_RESOLVER}/${process.env.VUE_APP_API_END_POINT}/job01/autosuggest`
        )
        .then((response) => {
          this.commit("setCities", response.data);
          return response;
        })
        .catch((error) => {
          return error;
        });
    },
    async search({ commit }, { cityCode }) {
      return await axios
        .get(
          `${process.env.VUE_APP_CORS_RESOLVER}/${process.env.VUE_APP_API_END_POINT}/job01/search/${cityCode}`
        )
        .then((response) => {
          commit("setSearchResult", response.data.outlets);
          return response;
        })
        .catch((error) => {
          return error;
        });
    },
  },
  modules: {},
});
