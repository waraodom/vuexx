// main.js

import Vue from "vue";
import VueRouter from 'vue-router';

import App from "./App.vue";
import FoodList from "./components/FoodList.vue";
import CreateFood from "./components/CreateFood.vue";

Vue.use(VueRouter);

const routes = [{
        name: "FoodList",
        path: "/food_list",
        component: FoodList
    },
    {
        name: "CreateFood",
        path: "/create_food",
        component: CreateFood
    }
];

const router = new VueRouter({ mode: "history", routes: routes });

Vue.config.productionTip = false;

new Vue({
    render: h => h(App),
    router
}).$mount("#app");