import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { routes as childComponentRoutes } from "@tholst/child-component-lib";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  // {
  //   path: "/",
  //   name: "About",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/About.vue")
  // }
  ...childComponentRoutes
];

const router = new VueRouter({
  routes
});

export default router;
