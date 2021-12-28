import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Outside/Home.vue";
import Login from "../views/Outside/Login.vue";
import SignUp from "../views/Outside/SignUp.vue";
import Registration from "../views/Outside/Registration.vue";
import ForgotPassword from "../views/Outside/ForgotPassword.vue";
import Payout from "../views/Inside/Payout.vue"
import Dashboard from "../views/Inside/Dashboard.vue";
import Profile from "../views/Inside/Profile.vue";
import auth from "../utils/auth";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Outside/About.vue"),
      meta: {
        requiresAuth: false,
      },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/forgot-password",
    name: "ForgotPassword",
    component: ForgotPassword,
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/register",
    name: "SignUp",
    component: SignUp,
    meta: {
      requiresAuth: false,
    },
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
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/payout",
    name: "Payout",
    component: Payout,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (auth.userIsLogged()) {
      next();
    } else {
      next("/");
    }
  } else {
    next();
  }
});

export default router;
