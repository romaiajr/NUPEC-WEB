<template>
  <div id="materiais-manager">
    <Navbar>
      <b-nav-item class="mobile-nav" to="/producoes/iniciacao-cientifica"
        >Iniciação Científica</b-nav-item
      >
      <b-nav-item class="mobile-nav" to="/producoes/projetos-de-extensao" exact
        >Projetos de Extensão</b-nav-item
      >
      <b-nav-item class="mobile-nav" to="/producoes/artigos" exact
        >Artigos</b-nav-item
      >
      <b-nav-item class="mobile-nav" to="/producoes/livros" exact
        >Livros</b-nav-item
      >
      <b-nav-item class="mobile-nav" to="/producoes/capitulos-de-livros" exact
        >Capítulos de Livros</b-nav-item
      >

      <b-nav-item
        class="mobile-nav"
        to="/producoes/atividades-desenvolvidas"
        exact
        >Atividades Desenvolvidas</b-nav-item
      >
    </Navbar>
    <div class="container-fluid p-0">
      <div class="row m-0" id="content">
        <div class="col-md-2 col-0 border-right" id="sidebar">
          <Sidebar active="0" />
        </div>
        <div class="col-md-10 col-12" id="table-section">
          <div id="title">
            <div class="container">
              <h4>
                Produções
                <!-- <b-badge>{{ conteudo.length }}</b-badge> -->
              </h4>
            </div>
          </div>
          <div class="row m-0" id="card-container">
            <div class="col-md-3 col-sm-4">
              <CardMaterial
                link="/producoes/iniciacao-cientifica"
                icone="bx bx-atom"
                cor="color:RGB(59, 89, 153)"
                nome="Iniciação Científica"
              >
              </CardMaterial>
            </div>
            <div class="col-md-3 col-sm-4">
              <CardMaterial
                link="/producoes/projetos-de-extensao"
                icone="fa fa-laptop"
                cor="color:#dc3546"
                nome="Projetos de Extensão"
              >
              </CardMaterial>
            </div>
            <div class="col-md-3 col-sm-4">
              <CardMaterial
                link="/producoes/artigos"
                icone="fa fa-file-text-o"
                cor="color:RGB(59, 89, 153)"
                nome="Artigos"
              >
              </CardMaterial>
            </div>
            <div class="col-md-3 col-sm-4">
              <CardMaterial
                link="/producoes/livros"
                icone="bx bx-book"
                cor="color:#1fa67b"
                nome="Livros"
              >
              </CardMaterial>
            </div>
            <div class="col-md-3 col-sm-4">
              <CardMaterial
                link="/producoes/capitulos-de-livros"
                icone="bx bx-bookmark"
                cor="color:#993399"
                nome="Capítulos de Livros"
              >
              </CardMaterial>
            </div>

            <div class="col-md-3 col-sm-4">
              <CardMaterial
                link="/producoes/atividades-desenvolvidas"
                icone="fa fa-flag-o"
                cor="color:#ff9a00"
                nome="Atividades Desenvolvidas"
              >
              </CardMaterial>
            </div>
            <div class="col-md-3 col-sm-4">
              <CardMaterial
                link="/producoes/leituras-recomendadas"
                icone="bx bx-library"
                cor="color:#7ed957"
                nome="Leituras Recomendadas"
              >
              </CardMaterial>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../../components/reutilizavel/Navbar";
import Footer from "../../components/reutilizavel/Footer";
import Sidebar from "../../components/manager/Sidebar";
import CardMaterial from "../../components/reutilizavel/CardMaterial";
export default {
  components: {
    Navbar,
    Footer,
    Sidebar,
    CardMaterial,
  },
  data: () => ({
    style: "display: block !important",
    // style2: "display: block !important",
    // style3: "display: block !important",
    // style4: "display: block !important",
  }),
};
</script>
<style>
.mobile-nav {
  display: none;
}
/* #sidebar {
  padding: 8px 8px 0 8px;
} */

@media screen and (max-width: 760px) {
  .mobile-nav {
    display: block !important;
  }

  #sidebar {
    display: none !important;
  }
}
</style>
