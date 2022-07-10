import axios from "axios";
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cities: [],
  },
  getters: {},
  mutations: {
    setCities(state, payload) {
      state.cities = payload;
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
  },
  modules: {},
});
