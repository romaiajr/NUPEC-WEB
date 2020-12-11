import Vue from "vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);
import Router from "vue-router";
Vue.use(Router);

import Home from "./pages/Home.vue";
import Materiais from "./pages/materiais/Materiais.vue";
import Artigos from "./pages/materiais/Artigos.vue";
import Livros from "./pages/materiais/Livros.vue";
import CapLivro from "./pages/materiais/CapLivro.vue";
import Extensao from "./pages/materiais/Extensao.vue";
import AtividadesComplementares from "./pages/materiais/AtividadesComplementares.vue";
import IniciacaoCientifica from "./pages/materiais/IniciacaoCientifica.vue";
import Leituras from "./pages/materiais/Leituras.vue";

const router = new Router({
  mode: "history",
  routes: [
    { path: "/", component: Home },
    {
      path: "/producoes",
      component: Materiais,
    },
    { path: "/producoes/artigos", component: Artigos },
    { path: "/producoes/livros", component: Livros },
    { path: "/producoes/capitulos-de-livros", component: CapLivro },
    {
      path: "/producoes/atividades-desenvolvidas",
      component: AtividadesComplementares,
    },
    { path: "/producoes/projetos-de-extensao", component: Extensao },
    { path: "/producoes/projetos-de-pesquisa", component: IniciacaoCientifica },
    { path: "/producoes/leituras-recomendadas", component: Leituras },
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
