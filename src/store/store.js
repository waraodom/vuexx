import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        foods: []
    },

    mutations: {
        addFood(state, { payload }) {
            state.foods.push(payload);
        },
        deleteFood(state, { index }) {
            state.foods.splice(index, 1);
          }
    },

    actions: {
        addFood({ commit }, payload) {
            commit("addFood", { payload });
        },
        deleteFood({ commit }, index) {
            commit("deleteFood", { index });
          }
    },

    getters: {
        foods: state => state.foods
    }
});