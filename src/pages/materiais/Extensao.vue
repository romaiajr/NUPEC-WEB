<template>
  <div>
    <Navbar>
      <b-nav-item class="mobile-nav" to="/materiais/iniciacao-cientifica"
        >Iniciação Científica</b-nav-item
      >
      <b-nav-item class="mobile-nav">Projetos de Extensão</b-nav-item>
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
          <Sidebar active="2" />
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
            <CardExtensao
              v-for="projeto in items"
              :key="projeto.nome"
              link="/materiais/artigos"
              :nome="projeto.nome"
              background=" background-color: #f1f1f1"
            >
              <img class="img-projeto" :src="projeto.logo" />
            </CardExtensao>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../../components/reutilizavel/Navbar";
import CardExtensao from "../../components/reutilizavel/CardExtensao";
import Sidebar from "../../components/manager/Sidebar";
export default {
  components: {
    Navbar,
    CardExtensao,
    Sidebar,
  },
  data: () => ({
    items: [
      {
        nome: "Boas Práticas na Manipulação de Alimentos",
        aluno: "Roberto Maia",
        orientador: "Claudia Pinto",
        logo: "https://imgur.com/igfYFqG.png",
      },
    ],
  }),
};
</script>
<style>
/* #sidebar {
  padding: 8px 8px 0 8px;
} */
#sidebar .active {
  border: 1px solid var(--primary-dark-color) !important;

  color: white !important;

  background-color: var(--primary-dark-color);
}

.img-projeto {
  width: 200px;
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
