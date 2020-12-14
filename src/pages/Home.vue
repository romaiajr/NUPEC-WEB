<template>
  <div>
    <Navbar>
      <b-nav-item @click="scrollMeTo('quem-somos')">Quem Somos</b-nav-item>
      <b-nav-item-dropdown text="Produções" right id="item-dropdown">
        <b-dropdown-item to="producoes/iniciacao-cientifica" exact
          >Iniciação Científica</b-dropdown-item
        >
        <b-dropdown-item to="producoes/projetos-de-extensao" exact
          >Projetos de Extensão</b-dropdown-item
        >
        <b-dropdown-item to="producoes/artigos" exact>
          Artigos
        </b-dropdown-item>
        <b-dropdown-item to="producoes/livros" exact>Livros</b-dropdown-item>
        <b-dropdown-item to="producoes/capitulos-de-livros" exact
          >Capítulos de Livros</b-dropdown-item
        >

        <b-dropdown-item to="producoes/atividades-desenvolvidas" exact
          >Atividades Desenvolvidas</b-dropdown-item
        >
        <b-dropdown-item to="/producoes/leituras-recomendadas" exact
          >Leituras Recomendadas</b-dropdown-item
        >
      </b-nav-item-dropdown>
      <b-nav-item @click="scrollMeTo('nossa-equipe')"
        >Nossa Equipe</b-nav-item
      ></Navbar
    >
    <div class="content-home">
      <Hero />
      <div ref="quem-somos">
        <QuemSomos />
      </div>
      <div ref="materiais">
        <OqueFazemos />
      </div>
      <div ref="nossa-equipe">
        <Equipe />
      </div>
      <div ref="social-media">
        <SocialMedia />
      </div>
      <div ref="rodapé">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/reutilizavel/Navbar";
import Hero from "../components/homepage/Hero";
import QuemSomos from "../components/homepage/QuemSomos";
import OqueFazemos from "../components/homepage/OqueFazemos";
import Equipe from "../components/homepage/Equipe";
import SocialMedia from "../components/homepage/SocialMedia";
import Footer from "../components/reutilizavel/Footer";
export default {
  components: {
    Navbar,
    Hero,
    QuemSomos,
    OqueFazemos,
    Equipe,
    SocialMedia,
    Footer,
  },
  methods: {
    scrollMeTo(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top - 80);
    },
  },
};
</script>
<style>
#box {
  position: absolute;
  left: 0;
  width: 50px;
}
.title-section {
  color: var(--secondary-dark-color) !important;
}
h5 {
  line-height: 150% !important;
}
@media screen and (max-width: 760px) {
  #box {
    width: 15px;
  }
  h2 {
    font-size: 32px !important;
  }
  h5 {
    font-size: 16px !important;
    line-height: 150% !important;
  }
  h6 {
    font-size: 12px !important;
    line-height: 150% !important;
  }
  p {
    font-size: 12px !important;
    line-height: 150% !important;
  }
  small {
    font-size: 10px !important;
  }
}
@media screen and (max-width: 1140px) and (min-width: 761px) {
  #box {
    width: 25px;
  }
  h2 {
    font-size: 45px !important;
  }
  h5 {
    font-size: 20px !important;
    line-height: 150% !important;
  }
  h6 {
    font-size: 16px !important;
    line-height: 150% !important;
  }
  p {
    font-size: 16px !important;
    line-height: 150% !important;
  }
  small {
    font-size: 12px !important;
  }
}
</style>
