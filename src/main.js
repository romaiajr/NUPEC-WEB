import Vue from "vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);
import Router from "vue-router";
Vue.use(Router);
import Home from "./pages/Home.vue";
import Navbar from "./components/Navbar.vue";
const router = new Router({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    {
      path: "/materiais",
      component: Navbar,
      children: [
        { path: "/artigos", component: Navbar },
        { path: "/livros", component: Navbar },
        { path: "/capitulos", component: Navbar },
        { path: "/atividades_complementares", component: Navbar },
      ],
    },
  ],
});

import { BootstrapVue } from "bootstrap-vue";
// Install BootstrapVue
Vue.use(BootstrapVue);
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import App from "./App.vue";
import "@/assets/styles.css";

Vue.config.productionTip = false;

import Vuesax from "vuesax";

import "vuesax/dist/vuesax.css"; //Vuesax styles
Vue.use(Vuesax, {
  // options here
});

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
