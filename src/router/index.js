import Vue from "vue";
import VueRouter from "vue-router";
import login from "../views/login.vue";
import signUp from "../views/signUp.vue";
import myProfile from "../views/myProfile.vue";
import discover from "../views/discover.vue";
import myFeed from "../views/myFeed.vue";
import landingPage from "../views/landingPage.vue";
import createTweetPage from "../views/createTweetPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "welcome",
    component: landingPage
  },
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: "/signUp",
    name: "signUp",
    component: signUp
  },
  {
    path: "/myProfile",
    name: "myProfile",
    component: myProfile
  },
  {
    path: "/discover",
    name: "discover",
    component: discover
  },
  {
    path: "/myFeed",
    name: "myFeed",
    component: myFeed
  },
  {
    path: "/createTweet",
    name: "createTweet",
    component: createTweetPage
  }
];

const router = new VueRouter({
  routes
});

export default router;
