import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Outside/Home.vue";
import Login from "../views/Outside/Login.vue";
import SignUp from "../views/Outside/SignUp.vue";
import Registration from "../views/Outside/Registration.vue";
import ForgotPassword from "../views/Outside/ForgotPassword.vue";

import Dashboard from "../views/Inside/Dashboard.vue";
import Profile from "../views/Inside/Profile.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Outside/About.vue"),
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
  },
  {
    path: "/register",
    name: "SignUp",
    component: SignUp,
  },
  {
    path: "/registration",
    name: "Registration",
    component: Registration,
  },

  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
