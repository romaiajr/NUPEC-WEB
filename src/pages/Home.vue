<template>
  <div>
    <div class="content-home">
      <Hero />
      <div ref="quem-somos">
        <QuemSomos />
      </div>
      <div ref="materiais">
        <Materiais />
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
import Hero from "../components/Hero";
import QuemSomos from "../components/QuemSomos";
import Materiais from "../components/Materiais";
import Equipe from "../components/Equipe";
import SocialMedia from "../components/SocialMedia";
import Footer from "../components/Footer";
export default {
  components: {
    Hero,
    QuemSomos,
    Materiais,
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
