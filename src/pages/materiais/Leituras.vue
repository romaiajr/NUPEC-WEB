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
      <b-nav-item class="mobile-nav" to="/producoes/capitulos-de-livros" exact
        >Capítulos de Livros</b-nav-item
      >

      <b-nav-item
        class="mobile-nav"
        to="/producoes/atividades-desenvolvidas"
        exact
        >Atividades Desenvolvidas</b-nav-item
      >
      <b-nav-item class="mobile-nav">Leituras Recomendadas</b-nav-item>
    </Navbar>
    <div class="container-fluid p-0">
      <div class="row m-0" id="content">
        <div class="col-md-2 col-0 border-right" id="sidebar">
          <Sidebar active="7" />
        </div>
        <div class="col-md-10 col-12" id="table-section">
          <Management
            :conteudo="items"
            nome="Leituras Recomendadas"
            sortBy="Nome"
            :fields="fields"
            @itemRemove="itemRemove"
          />
          <Footer />
        </div>
      </div>
    </div>
    <b-modal
      id="modal-1"
      ref="modal-leituras"
      title="Adicionar Nova Leitura"
      hide-footer
      @hide="onReset"
      ><b-form @submit.prevent="onSubmit" @reset="onReset">
        <b-form-text> Título da Leitura </b-form-text>
        <b-form-input required v-model="form.titulo"></b-form-input>
        <b-form-text> Link para Acesso </b-form-text>
        <b-form-input required v-model="form.link"></b-form-input>
        <div id="button-modal">
          <b-button type="reset" variant="danger">Cancelar</b-button>
          <b-button type="submit" variant="primary">Salvar</b-button>
        </div>
      </b-form>
    </b-modal>
    <!-- MODAL REMOVER -->
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
import leituraService from "../../services/leituraService";

export default {
  components: {
    Navbar,
    Footer,
    Management,
    Sidebar,
  },
  data: () => ({
    isLogged: false,
    text: "",
    deleteId: "",
    fields: [
      {
        key: "titulo",
        label: "Título",
        sortable: true,
        sortDirection: "asc",
      },
      { key: "link", label: "Link" },
      { key: "remove", label: "" },
    ],
    form: {
      titulo: "",
      link: "",
    },

    items: [],
  }),
  created() {
    this.getLeituras();
  },
  methods: {
    async onSubmit() {
      this.form.titulo.trim();
      this.form.link.trim();
      try {
        await leituraService.addLeitura(this.form);
        this.$vs.notification({
          color: "success",
          title: "Adicionar Leitura",
          text: "Leitura adicionada com sucesso!",
        });
        this.getLeituras();
        this.$refs["modal-leituras"].hide();
      } catch (e) {
        this.$vs.notification({
          color: "danger",
          title: "Adicionar Leitura",
          text: "Houve um erro ao tentar adicionar a novo leitura",
        });
      }
    },
    onReset() {
      this.form = {};
      this.$refs["modal-leituras"].hide();
    },
    getLeituras() {
      const loading = this.$vs.loading();
      leituraService.getLeituras().then((response) => {
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
        await leituraService.removeLeitura(this.deleteId);
        this.$vs.notification({
          color: "success",
          title: "Remover Leitura",
          text: "Leitura removida com sucesso!",
        });
        this.getLeituras();
      } catch (e) {
        this.$vs.notification({
          color: "danger",
          title: "Remover Leitura",
          text: "Houve um erro ao tentar remover o leitura",
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
