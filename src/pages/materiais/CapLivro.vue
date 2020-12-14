<template>
  <div>
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
      <b-nav-item class="mobile-nav">Capítulos de Livros</b-nav-item>

      <b-nav-item
        class="mobile-nav"
        to="/producoes/atividades-desenvolvidas"
        exact
        >Atividades Desenvolvidas</b-nav-item
      >
      <b-nav-item class="mobile-nav" to="/producoes/leituras-recomendadas" exact
        >Leituras Recomendadas</b-nav-item
      >
    </Navbar>
    <div class="container-fluid p-0">
      <div class="row m-0" id="content">
        <div class="col-md-2 col-0 border-right" id="sidebar">
          <Sidebar active="5" />
        </div>
        <div class="col-md-10 col-12" id="table-section">
          <Management
            :fields="fields"
            :conteudo="items"
            nome="Capítulos de Livros"
            sortBy="nome"
            @itemRemove="itemRemove"
          />
          <Footer />
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
      ><b-form @submit.prevent="onSubmit" @reset="onReset">
        <b-form-text> Título do Capítulo </b-form-text>
        <b-form-textarea required v-model="form.titulo"></b-form-textarea>
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
import Footer from "../../components/reutilizavel/Footer";
import Management from "../../components/manager/Management";
import Sidebar from "../../components/manager/Sidebar";
import capituloService from "../../services/capituloService";

export default {
  components: {
    Navbar,
    Footer,
    Management,
    Sidebar,
  },
  data: () => ({
    fields: [
      {
        key: "titulo".replace(/\n/g, "<br>"),
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
      { key: "link", label: "Link" },
      { key: "remove", label: "" },
    ],
    form: {
      titulo: "",
      autor: "",
      livro: "",
      link: "",
    },
    items: [],
    deleteId: "",
  }),
  created() {
    this.getCapitulos();
  },
  methods: {
    async onSubmit() {
      this.form.titulo.trim();
      this.form.autor.trim();
      this.form.livro.trim();
      this.form.link.trim();
      try {
        await capituloService.addCapitulo(this.form);
        this.$vs.notification({
          color: "success",
          title: "Adicionar Capítulo",
          text: "Capítulo adicionado com sucesso!",
        });
        this.getCapitulos();
        this.$refs["modal-caplivro"].hide();
      } catch (e) {
        console.log(e);
        this.$vs.notification({
          color: "danger",
          title: "Adicionar Capítulo",
          text: "Houve um erro ao tentar adicionar o novo capítulo",
        });
      }
    },
    onReset() {
      this.form.titulo = "";
      this.form.autor = "";
      this.form.livro = "";
      this.form.link = "";
      this.$refs["modal-caplivro"].hide();
    },
    getCapitulos() {
      const loading = this.$vs.loading();
      capituloService.getCapitulos().then((response) => {
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
        await capituloService.removeCapitulo(this.deleteId);
        this.$vs.notification({
          color: "success",
          title: "Remover Capítulo",
          text: "Capítulo removido com sucesso!",
        });
        this.getCapitulos();
      } catch (e) {
        this.$vs.notification({
          color: "danger",
          title: "Remover Capítulo",
          text: "Houve um erro ao tentar remover o capítulo",
        });
      }
      this.getCapitulos();
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
