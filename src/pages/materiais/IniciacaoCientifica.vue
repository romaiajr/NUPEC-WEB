<template>
  <div>
    <Navbar>
      <b-nav-item class="mobile-nav" to="/materiais/artigos" exact
        >Artigos</b-nav-item
      >
      <b-nav-item class="mobile-nav" to="/materiais/livros" exact
        >Livros</b-nav-item
      >
      <b-nav-item class="mobile-nav" to="/materiais/capitulos-de-livros" exact
        >Capítulos de Livros</b-nav-item
      >
      <b-nav-item class="mobile-nav" to="/materiais/projetos-de-extensao" exact
        >Projetos de Extensão</b-nav-item
      >
      <b-nav-item class="mobile-nav" to="/materiais/atividades-complementares"
        >Atividades Complementares</b-nav-item
      >
      <b-nav-item class="mobile-nav">Iniciação Científica</b-nav-item>
    </Navbar>
    <div class="container-fluid p-0">
      <div class="row m-0" id="content">
        <div class="col-md-2 col-0 border-right" id="sidebar">
          <Sidebar active="6" />
        </div>
        <div class="col-md-10 col-12" id="table-section">
          <Management
            :conteudo="items"
            nome="Iniciação Científica"
            sortBy="nome"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../../components/reutilizavel/Navbar";
import Management from "../../components/manager/Management";
import Sidebar from "../../components/manager/Sidebar";
export default {
  components: {
    Navbar,
    Management,
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
  }),
};
</script>
<style>
#sidebar {
  padding: 8px 8px 0 8px;
}
#sidebar .active {
  border: 1px solid var(--primary-dark-color) !important;

  color: white !important;

  background-color: var(--primary-dark-color);
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
