<template>
  <div>
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
      <b-nav-item class="mobile-nav">Livros</b-nav-item>
      <b-nav-item class="mobile-nav" to="/materiais/capitulos-de-livros" exact
        >Capítulos de Livros</b-nav-item
      >

      <b-nav-item
        class="mobile-nav"
        to="/materiais/atividades-complementares"
        exact
        >Atividades Complementares</b-nav-item
      >
      <b-nav-item class="mobile-nav" to="/materiais/leituras-recomendadas" exact
        >Leituras Recomendadas</b-nav-item
      >
    </Navbar>
    <div class="container-fluid p-0">
      <div class="row m-0" id="content">
        <div class="col-md-2 col-0 border-right" id="sidebar">
          <Sidebar active="4" />
        </div>
        <div class="col-md-10 col-12" id="table-section">
          <Management
            :conteudo="items"
            :fields="fields"
            nome="Livros"
            sortBy="nome"
            @itemRemove="itemRemove"
          />
        </div>
      </div>
    </div>
    <b-modal
      id="modal-1"
      ref="modal-livros"
      title="Adicionar Novo Livro"
      @hide="onReset"
      hide-footer
      ><b-form @submit.prevent="onSubmit" @reset="onReset">
        <b-form-text> Título do Livro </b-form-text>
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
    <b-modal
      id="modal-remover"
      title="Confirmar Remoção"
      ok-variant="success"
      cancel-variant="danger"
      ok-title="Confirmar"
      cancel-title="Cancelar"
      @ok="onDelete"
    >
      <p>Deseja realmente remover este item?</p>
    </b-modal>
  </div>
</template>
<script>
import Navbar from "../../components/reutilizavel/Navbar";
import Management from "../../components/manager/Management";
import Sidebar from "../../components/manager/Sidebar";
import livroService from "../../services/livroService";
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
        label: "Título do Livro",
        sortable: true,
        sortDirection: "asc",
      },
      {
        key: "autor",
        label: "Autor(es)",
        sortable: true,
        sortDirection: "asc",
      },
      { key: "link", label: "Link" },
      { key: "remove", label: "" },
    ],
    form: {
      titulo: "",
      autor: "",
      link: "",
    },
    items: [],
  }),
  created() {
    this.getLivros();
  },
  methods: {
    async onSubmit() {
      try {
        await livroService.addLivro(this.form);
        this.$vs.notification({
          color: "success",
          title: "Adicionar Livro",
          text: "Livro adicionado com sucesso!",
        });

        this.$refs["modal-livros"].hide();
        this.getLivros();
      } catch (e) {
        this.$vs.notification({
          color: "danger",
          title: "Adicionar Livro",
          text: "Houve um erro ao tentar adicionar o novo Livro",
        });
      }
    },
    onReset() {
      this.form = {};
      this.$refs["modal-livros"].hide();
    },
    getLivros() {
      const loading = this.$vs.loading();
      livroService.getLivros().then((response) => {
        this.items = response.data.sort((a, b) => {
          return a.titulo.localeCompare(b.titulo);
        });
        loading.close();
      });
    },
    itemRemove(obj) {
      this.deleteId = obj;
    },
    async onDelete() {
      try {
        await livroService.removeLivro(this.deleteId);
        this.$vs.notification({
          color: "success",
          title: "Remover Livro",
          text: "Livro removido com sucesso!",
        });
        this.getLivros();
      } catch (e) {
        this.$vs.notification({
          color: "danger",
          title: "Remover Livro",
          text: "Houve um erro ao tentar remover o livro",
        });
      }
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
