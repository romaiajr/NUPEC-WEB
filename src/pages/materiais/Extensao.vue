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
      <b-nav-item class="mobile-nav" to="/materiais/leituras-recomendadas" exact
        >Leituras Recomendadas</b-nav-item
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
          <div id="inputs">
            <div class="container">
              <div class="row m-0">
                <div class="col-md-8 col-2 p-0" />
                <div class="col-md-2 col-4 " v-show="isLogged">
                  <b-button block v-b-modal.modal-addExt
                    ><p>Adicionar</p></b-button
                  >
                </div>
                <div class="col-md-2 col-4 " v-show="isLogged">
                  <b-button block v-b-modal.modal-removeProjeto
                    ><p>Remover</p></b-button
                  >
                </div>
              </div>
            </div>
            <div class="row m-0" id="card-container">
              <CardExtensao
                v-for="projeto in items"
                :key="projeto._id"
                :nome="projeto.titulo"
                :id="projeto._id"
                background=" background-color: #f1f1f1"
                v-on:click="loadInfo(projeto._id)"
              >
                <img class="img-projeto" :src="projeto.logo" />
              </CardExtensao>
            </div>
          </div>
        </div>
      </div>

      <!-- MODAL INFO -->
      <b-modal ref="modal-info" id="modal-info" size="lg" hide-footer>
        <template #modal-title>
          <div class="row m-0">
            <div class="col-md-12 col-12">
              {{ selected_projeto.titulo }}
            </div>
          </div>
        </template>
      </b-modal>

      <!-- MODAL ADICIONAR ATIVIDADE -->
      <b-modal
        id="modal-addExt"
        ref="modal-addExt"
        title="Adicionar Novo Projeto de Extensão"
        hide-footer
        @hide="onReset"
      >
        <b-form @submit.prevent="addProjeto" @reset="onReset">
          <b-form-text> Título do Projeto de Extensão</b-form-text>
          <b-form-input required v-model="form.titulo"></b-form-input>
          <b-form-text>Descrição do Projeto de Extensão</b-form-text>
          <b-form-input required v-model="form.descricao"></b-form-input>
          <b-form-text> Nome do Orientador</b-form-text>
          <b-form-input required v-model="form.orientador"></b-form-input>
          <b-form-text> Nome do Aluno</b-form-text>
          <b-form-input required v-model="form.bolsista"></b-form-input>
          <b-form-text> Link para Logo do Projeto de Extensão</b-form-text>
          <b-form-input required v-model="form.logo"></b-form-input>
          <b-form-text> Componentes do Projeto de Extensão</b-form-text>
          <b-form-checkbox
            id="checkbox-1"
            v-model="form.tabela"
            name="checkbox-1"
            :value="true"
            :unchecked-value="false"
          >
            Tabela com Dados
          </b-form-checkbox>
          <b-form-checkbox
            id="checkbox-2"
            v-model="form.fotos"
            name="checkbox-2"
            :value="true"
            :unchecked-value="false"
          >
            Fotos
          </b-form-checkbox>

          <b-form-text>Valores das Colunas da Tabela</b-form-text>
          <b-form-input
            :disabled="form.tabela == false"
            required
            v-model="keys"
          ></b-form-input>
          <b-form-text id="password-help-block">
            Os valores devem seguir o seguinte formato: "Titulo;Autor;Link"
          </b-form-text>

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

      <!--MODAL REMOVER ATVD-->
      <b-modal
        id="modal-removeProjeto"
        ref="modal-remove-projeto"
        title="Remover Projeto de Extensão"
        hide-footer
        ><b-form @reset="onReset">
          <b-form-text>
            Selecione o Projeto de Extensão a ser removido</b-form-text
          >
          <b-form-select v-model="deleteid">
            <b-form-select-option
              v-for="projeto in items"
              :key="projeto._id"
              :value="projeto._id"
              :v-model="(tipo = 0)"
              >{{ projeto.titulo }}</b-form-select-option
            ></b-form-select
          >
          <div id="button-modal">
            <b-button type="reset" variant="danger">Cancelar</b-button>
            <b-button v-b-modal.modal-remover variant="primary"
              >Remover</b-button
            >
          </div>
        </b-form>
      </b-modal>
    </div>
  </div>
</template>
<script>
import Navbar from "../../components/reutilizavel/Navbar";
import CardExtensao from "../../components/reutilizavel/CardExtensao";
import Sidebar from "../../components/manager/Sidebar";
import extensaoService from "../../services/extensaoService";
export default {
  components: {
    Navbar,
    CardExtensao,
    Sidebar,
  },
  created() {
    this.getProjetos();
    const user = JSON.parse(sessionStorage.getItem("login"));
    if (user.user == "NupecUefs" && user.senha == "n1u$pec") {
      this.isLogged = true;
    }
  },
  data: () => ({
    isLogged: false,
    deleteid: "",
    items: [],
    fields: [],
    keys: "",
    selected_projeto: "",
    form: {
      titulo: "",
      descricao: "",
      orientador: "",
      bolsista: "",
      logo: "",
      tabela: false,
      fotos: false,
      fields: [],
      labels: [],
    },
  }),
  methods: {
    getProjetos() {
      const loading = this.$vs.loading();
      extensaoService.getProjetos().then((response) => {
        this.items = response.data;
        loading.close();
      });
    },
    async loadInfo(id) {
      const loading = this.$vs.loading();
      const res = await extensaoService.findProjeto(id);
      this.selected_projeto = res.data[0];
      this.selected_projeto.fields.forEach((field, index) => {
        this.fields.push({
          key: field,
          label: this.selected_projeto.labels[index],
        });
      });
      loading.close();
    },
    async addProjeto() {
      try {
        this.form.fields = this.keys
          .toLowerCase()
          .replace(/\s/g, "_")
          .split(";");
        this.form.labels = this.keys.split(";");
        await extensaoService.addProjeto(this.form);
        this.$vs.notification({
          color: "success",
          title: "Adicionar Projeto de Extensão",
          text: "Projeto de Extensão adicionado com sucesso!",
        });
        this.getProjetos();
        this.$refs["modal-addExt"].hide();
        this.form = {};
      } catch (e) {
        this.$vs.notification({
          color: "danger",
          title: "Adicionar Projeto de Extensão",
          text: "Houve um erro ao tentar adicionar o novo Projeto de Extensão",
        });
      }
    },
    onReset() {
      this.form = {};
    },
    async onDelete() {
      try {
        await extensaoService.removeProjeto(this.deleteid);
        this.$vs.notification({
          color: "success",
          title: "Remover Projeto de Extensão",
          text: "Projeto de Extensão removido com sucesso!",
        });
        this.getProjetos();
      } catch (e) {
        this.$vs.notification({
          color: "danger",
          title: "Remover Projeto de Extensão",
          text: "Houve um erro ao tentar remover o Projeto de Extensão",
        });
      }
    },
  },
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
