<template>
  <div>
    <Navbar>
      <b-nav-item class="mobile-nav">Artigos</b-nav-item>
      <b-nav-item class="mobile-nav" to="/materiais/livros" exact
        >Livros</b-nav-item
      >
      <b-nav-item class="mobile-nav" to="/materiais/capitulos-de-livros" exact
        >Capítulos de Livros</b-nav-item
      >
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
          <Sidebar active="1" />
        </div>
        <div class="col-md-10 col-12" id="table-section">
          <Management
            :conteudo="items"
            nome="Artigos"
            sortBy="Nome"
            :fields="fields"
          />
        </div>
      </div>
    </div>
    <b-modal
      id="modal-1"
      ref="modal-artigos"
      title="Adicionar Novo Artigo"
      hide-footer
      @hide="onReset"
      ><b-form @submit="onSubmit" @reset="onReset">
        <b-form-text> Título do Artigo </b-form-text>
        <b-form-input required v-model="form.titulo"></b-form-input>
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
    isLogged: false,
    text: "",
    fields: [
      {
        key: "titulo",
        label: "Título do Artigo",
        sortable: true,
        sortDirection: "asc",
      },
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
      link: "",
    },

    items: [
      {
        titulo: "Interface Visual PBL Office",
        autor: "Roberto Maia",
        link: "https://ambientewebv3.vercel.app/#/",
      },
      {
        titulo: "O Cuidado nas Feiras",
        autor: "Jorgina Mendes",
        link: "https://nupec-uefs.vercel.app/",
      },
      {
        titulo: "Colegiado de Engenharia da Computação",
        autor: "Ecompjr",
        link: "http://www.ecomp.uefs.br/",
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
      console.log("cancelou");
      this.form.titulo = "";
      this.form.autor = "";
      this.form.link = "";
      this.$refs["modal-artigos"].hide();
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
