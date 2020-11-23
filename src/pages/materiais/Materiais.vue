<template>
  <div>
    <Navbar>
      <b-nav-item class="mobile-nav" to="artigos" exact>Artigos</b-nav-item>
      <b-nav-item class="mobile-nav" to="livros" exact>Livros</b-nav-item>
      <b-nav-item class="mobile-nav" to="capitulos-de-livros" exact
        >Capítulos de Livros</b-nav-item
      >
      <b-nav-item class="mobile-nav" to="projetos-de-extensao" exact
        >Projetos de Extensão</b-nav-item
      >
      <b-nav-item class="mobile-nav" to="atividades-complementares" exact
        >Atividades Complementares</b-nav-item
      >
    </Navbar>
    <div class="container-fluid p-0">
      <div class="row m-0" id="content">
        <div class="col-md-2 col-0 border-right" id="sidebar">
          <Sidebar active="0" />
        </div>
        <div class="col-md-10 col-12" id="table-section"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../../components/reutilizavel/Navbar";
import Sidebar from "../../components/manager/Sidebar";
export default {
  components: {
    Navbar,
    Sidebar,
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
  methods: {
    select_material(active) {
      console.log(active);
      this.active = active;
    },
  },
};
</script>
<style>
.mobile-nav {
  display: none;
}
#sidebar {
  padding: 8px 8px 0 8px;
}

@media screen and (max-width: 760px) {
  .mobile-nav {
    display: block !important;
  }

  #sidebar {
    display: none !important;
  }
}
</style>
