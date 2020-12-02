<template>
  <div>
    <Navbar>
      <b-nav-item class="mobile-nav">Iniciação Científica</b-nav-item>
      <b-nav-item class="mobile-nav" to="/materiais/projetos-de-extensao" exact
        >Projetos de Extensão</b-nav-item
      >
      <b-nav-item class="mobile-nav" to="/materiais/artigos"
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
          <Sidebar active="1" />
        </div>
        <div class="col-md-10 col-12" id="table-section">
          <Management
            :fields="fields"
            :conteudo="items"
            nome="Iniciação Científica"
            sortBy="nome"
          />
        </div>
      </div>
    </div>
    <b-modal
      id="modal-1"
      ref="modal-ic"
      title="Adicionar Novo Livro"
      @hide="onReset"
      hide-footer
      ><b-form @submit.prevent="onSubmit" @reset="onReset">
        <b-form-text> Título da IC </b-form-text>
        <b-form-input required v-model="form.titulo"></b-form-input>
        <b-form-text> Nome do(s) Bolsista(as) </b-form-text>
        <b-form-input required v-model="form.aluno"></b-form-input>
        <b-form-text> Nome do(s) Orientador(es) </b-form-text>
        <b-form-input required v-model="form.orientador"></b-form-input>
        <b-form-text> Data de Conclusão </b-form-text>
        <b-form-input required v-model="form.data"></b-form-input>
        <b-form-text id="password-help-block">
          A data de conclusão deve estar no formato DD/MM/AAAA: "07/11/2000"
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
import icService from "../../services/icService";
export default {
  components: {
    Navbar,
    Management,
    Sidebar,
  },
  data: () => ({
    form: {
      titulo: "",
      aluno: "",
      orientador: "",
      data: "",
      deleteId: "",
    },
    fields: [
      {
        key: "titulo",
        label: "Título da IC",
        sortable: true,
        sortDirection: "asc",
      },
      {
        key: "aluno",
        label: "Aluno",
        sortDirection: "asc",
      },
      {
        key: "orientador",
        label: "Orientador",
        sortDirection: "asc",
      },
      {
        key: "data",
        label: "Data de Conclusão",
        sortable: true,
        sortDirection: "asc",
      },
      { key: "remove", label: "" },
    ],
    items: [],
  }),
  created() {
    this.getIcs();
  },
  methods: {
    async onSubmit() {
      try {
        await icService.addIc(this.form);
        this.$vs.notification({
          color: "success",
          title: "Adicionar Iniciação Científica",
          text: "Iniciação Científica adicionada com sucesso!",
        });

        this.$refs["modal-ic"].hide();
        this.getIcs();
      } catch (e) {
        this.$vs.notification({
          color: "danger",
          title: "Adicionar Iniciação Científica",
          text: "Houve um erro ao tentar adicionar a nova Iniciação Científica",
        });
      }
    },
    onReset() {
      this.form.titulo = "";
      this.form.autor = "";
      this.form.orientador = "";
      this.form.data = "";
      this.$refs["modal-ic"].hide();
    },
    getIcs() {
      const loading = this.$vs.loading();
      icService.getIcs().then((response) => {
        loading.close();
        this.items = response.data;
      });
    },
    itemRemove(id) {
      this.deleteId = id;
    },
    async onDelete() {
      try {
        await icService.removeIc(this.deleteId);
        this.$vs.notification({
          color: "success",
          title: "Remover Iniciação Científica",
          text: "Iniciação Científica removida com sucesso!",
        });
        this.getIcs();
      } catch (e) {
        this.$vs.notification({
          color: "danger",
          title: "Remover Iniciação Científica",
          text: "Houve um erro ao tentar remover a Iniciação Científica",
        });
      }
    },
  },
};
</script>
<style>
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
