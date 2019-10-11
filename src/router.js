import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./components/Home.vue";
import Lieferant from "./components/lieferant/Lieferant.vue";

Vue.use(VueRouter);

export const routes = [
  { path: "", component: Home },
  { path: "/lieferant", component: Lieferant }
];

export default new VueRouter({ mode: "history", routes });
