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
      <b-nav-item class="mobile-nav">Atividades Complementares</b-nav-item>
      <b-nav-item class="mobile-nav" to="/materiais/iniciacao-cientifica"
        >Iniciação Científica</b-nav-item
      >
    </Navbar>
    <div class="container-fluid p-0">
      <div class="row m-0" id="content">
        <div class="col-md-2 col-0 border-right" id="sidebar">
          <Sidebar active="5" />
        </div>
        <div class="col-md-10 col-12" id="table-section">
          <div id="title">
            <div class="container">
              <h4>
                Atividades Complementares
                <b-badge>{{ items.length }}</b-badge>
              </h4>
            </div>
          </div>
          <div class="row m-0" id="card-container">
            <div
              class="col-md-3 col-sm-4"
              v-for="atividade in items"
              :key="atividade.nome"
            >
              <CardExtensao v-b-modal.modal-1 :nome="atividade.nome">
              </CardExtensao>
            </div>
          </div>
        </div>
      </div>
    </div>
    <b-modal id="modal-1" hide-footer title="Atividade Complementar">
      <p class="my-4">Hello from modal!</p>
    </b-modal>
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
    atv_selected: "",
    items: [
      {
        nome: "Feira do Sobradinho",
        imagens: [
          { link: "", descricao: "", data: "" },
          { link: "", descricao: "", data: "" },
          { link: "", descricao: "", data: "" },
        ],
      },
      {
        nome: "Feira da Cidade Nova",
        imagens: [
          { link: "", descricao: "", data: "" },
          { link: "", descricao: "", data: "" },
          { link: "", descricao: "", data: "" },
        ],
      },
      {
        nome: "Centro de Abastecimento",
        imagens: [
          { link: "", descricao: "", data: "" },
          { link: "", descricao: "", data: "" },
          { link: "", descricao: "", data: "" },
        ],
      },
      {
        nome: "Feira do Caseb",
        imagens: [
          { link: "", descricao: "", data: "" },
          { link: "", descricao: "", data: "" },
          { link: "", descricao: "", data: "" },
        ],
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

@media screen and (max-width: 760px) {
  .mobile-nav {
    display: block !important;
  }

  #sidebar {
    display: none !important;
  }
}
</style>
