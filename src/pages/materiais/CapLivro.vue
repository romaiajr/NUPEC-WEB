<template>
  <div>
    <Navbar>
      <b-nav-item class="mobile-nav" to="/materiais/artigos" exact
        >Artigos</b-nav-item
      >
      <b-nav-item class="mobile-nav" to="/materiais/livros" exact
        >Livros</b-nav-item
      >
      <b-nav-item class="mobile-nav">Capítulos de Livros</b-nav-item>
      <b-nav-item class="mobile-nav" to="/materiais/projetos-de-extensao" exact
        >Projetos de Extensão</b-nav-item
      >
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
          <Sidebar active="3" />
        </div>
        <div class="col-md-10 col-12" id="table-section">
          <Management
            :fields="fields"
            :conteudo="items"
            nome="Capítulos de Livros"
            sortBy="nome"
          />
        </div>
      </div>
    </div>
    <b-modal
      id="modal-1"
      ref="modal-caplivro"
      title="Adicionar Novo Capítulo"
      ok-title="Salvar"
      cancel-title="Cancelar"
      cancel-variant="danger"
      @hide="onReset"
      hide-footer
      ><b-form @submit="onSubmit" @reset="onReset">
        <b-form-text> Título do Capítulo </b-form-text>
        <b-form-input required v-model="form.titulo"></b-form-input>
        <b-form-text> Nome do Livro </b-form-text>
        <b-form-input required v-model="form.livro"></b-form-input>
        <b-form-text> Nome do(s) Autor(es) </b-form-text>
        <b-form-input required v-model="form.autor"></b-form-input>
        <b-form-text> Link para Acesso </b-form-text>
        <b-form-input required v-model="form.link"></b-form-input>
        <b-form-text id="password-help-block">
          O link para acesso deve seguir o exemplo: "http://www.uefs.br/"
        </b-form-text>
        <div id="button-modal">
          <b-button type="reset" variant="danger">Cancelar</b-button>
          <b-button type="submit" variant="primary">Salvar</b-button>
        </div>
      </b-form>
    </b-modal>
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
    fields: [
      {
        key: "titulo",
        label: "Título do Capítulo",
        sortable: true,
        sortDirection: "asc",
      },
      { key: "livro", label: "Nome do Livro" },
      {
        key: "autor",
        label: "Autor(es)",
        sortable: true,
        sortDirection: "asc",
      },
      { key: "Link", label: "Link" },
    ],
    form: {
      titulo: "",
      autor: "",
      livro: "",
      link: "",
    },
    items: [
      {
        titulo: "Capítulo 1",
        autor: "Roberto Maia",
        livro: "Interface NUPEC",
        link: "https://nupec-uefs.vercel.app/",
      },
    ],
  }),
  methods: {
    onSubmit() {
      const user = JSON.parse(sessionStorage.getItem("login"));
      if (user.user == "NupecUefs" && user.senha == "n1u$pec") {
        console.log(this.form);
      }
    },
    onReset() {
      this.form.titulo = "";
      this.form.autor = "";
      this.form.livro = "";
      this.form.link = "";
      this.$refs["modal-caplivro"].hide();
    },
  },
};
</script>
<style>
#button-modal {
  padding-top: 24px;
  display: flex;
  justify-content: flex-end;
}

.btn {
  margin-left: 12px !important;
}

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
