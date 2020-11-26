<template>
  <div id="materiais-manager">
    <Navbar>
      <b-nav-item class="mobile-nav" to="/materiais/iniciacao-cientifica"
        >Iniciação Científica</b-nav-item
      >
      <b-nav-item class="mobile-nav" to="/materiais/projetos-de-extensao" exact
        >Projetos de Extensão</b-nav-item
      >
      <b-nav-item class="mobile-nav" to="/materiais/artigos" exact
        >Artigos</b-nav-item
      >
      <b-nav-item class="mobile-nav" to="/materiais/livros" exact
        >Livros</b-nav-item
      >
      <b-nav-item class="mobile-nav" to="/materiais/capitulos-de-livros" exact
        >Capítulos de Livros</b-nav-item
      >

      <b-nav-item
        class="mobile-nav"
        to="/materiais/atividades-complementares"
        exact
        >Atividades Complementares</b-nav-item
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
                link="/materiais/artigos"
                icone="bx bx-atom"
                cor="color:RGB(59, 89, 153)"
                nome="Iniciação Científica"
              >
              </CardMaterial>
            </div>
            <div class="col-md-3 col-sm-4">
              <CardMaterial
                link="/materiais/projetos-de-extensao"
                icone="fa fa-laptop"
                cor="color:#dc3546"
                nome="Projetos de Extensão"
              >
              </CardMaterial>
            </div>
            <div class="col-md-3 col-sm-4">
              <CardMaterial
                link="/materiais/artigos"
                icone="fa fa-file-text-o"
                cor="color:RGB(59, 89, 153)"
                nome="Artigos"
              >
              </CardMaterial>
            </div>
            <div class="col-md-3 col-sm-4">
              <CardMaterial
                link="/materiais/livros"
                icone="bx bx-book"
                cor="color:#1fa67b"
                nome="Livros"
              >
              </CardMaterial>
            </div>
            <div class="col-md-3 col-sm-4">
              <CardMaterial
                link="/materiais/capitulos-de-livros"
                icone="bx bx-bookmark"
                cor="color:#993399"
                nome="Capítulos de Livros"
              >
              </CardMaterial>
            </div>

            <div class="col-md-3 col-sm-4">
              <CardMaterial
                link="/materiais/atividades-complementares"
                icone="fa fa-plus-square-o"
                cor="color:#ff9a00"
                nome="Atividades Complementares"
              >
              </CardMaterial>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../../components/reutilizavel/Navbar";
import Sidebar from "../../components/manager/Sidebar";
import CardMaterial from "../../components/reutilizavel/CardMaterial";
export default {
  components: {
    Navbar,
    Sidebar,
    CardMaterial,
  },
  data: () => ({
    sortBy: "Nome",
    items: [
      {
        Nome: "Artigo 7",
        Autor: "Dickerson",
        Data: "17/10/2019",
        Link: "http://www.",
      },
      {
        Nome: "Artigo 7",
        Autor: "Dickerson",
        Data: "17/10/2019",
        Link: "http://www.",
      },
      {
        Nome: "Artigo 7",
        Autor: "Dickerson",
        Data: "17/10/2019",
        Link: "http://www.",
      },
      {
        Nome: "Artigo 7",
        Autor: "Dickerson",
        Data: "17/10/2019",
        Link: "http://www.",
      },
      {
        Nome: "Artigo 7",
        Autor: "Dickerson",
        Data: "17/10/2019",
        Link:
          "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operador_Condicional",
      },
      {
        Nome: "Artigo 2",
        Autor: "Larsen",
        Data: "30/05/2001",
        Link: "http://www.",
      },
      {
        Nome: "Artigo 3",
        Autor: "Geneva",
        Data: "07/11/2000",
        Link: "http://www.",
      },
      {
        Nome: "Artigo 4",
        Autor: "Jami",
        Data: "17/10/2020",
        Link: "http://www.",
      },
    ],
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
