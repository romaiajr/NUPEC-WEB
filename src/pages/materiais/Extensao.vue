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
      <b-nav-item class="mobile-nav">Projetos de Extensão</b-nav-item>
      <b-nav-item
        class="mobile-nav"
        to="/materiais/atividades-complementares"
        exact
        >Atividades Complementares</b-nav-item
      >
      <b-nav-item class="mobile-nav" to="/materiais/iniciacao-cientifica"
        >Iniciação Científica</b-nav-item
      >
    </Navbar>
    <div class="container-fluid p-0">
      <div class="row m-0" id="content">
        <div class="col-md-2 col-0 border-right" id="sidebar">
          <Sidebar active="4" />
        </div>
        <div class="col-md-10 col-12" id="table-section">
          <div id="title">
            <div class="container">
              <h4>
                Projetos de Extensão
                <!-- <b-badge>{{ conteudo.length }}</b-badge> -->
              </h4>
            </div>
          </div>
          <div class="row m-0" id="card-container">
            <div
              class="col-md-3 col-sm-4"
              v-for="projeto in items"
              :key="projeto.Nome"
            >
              <CardMaterial link="/materiais/artigos" :nome="projeto.Nome">
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
import CardMaterial from "../../components/reutilizavel/CardMaterial";
import Sidebar from "../../components/manager/Sidebar";
export default {
  components: {
    Navbar,
    CardMaterial,
    Sidebar,
  },
  data: () => ({
    items: [
      {
        Nome: "Extensão 1",
        Aluno: "Roberto Maia",
        Orientador: "Claudia Pinto",
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
