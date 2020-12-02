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
      <b-nav-item class="mobile-nav" to="/materiais/livros" exact
        >Livros</b-nav-item
      >
      <b-nav-item class="mobile-nav" to="/materiais/capitulos-de-livros" exact
        >Capítulos de Livros</b-nav-item
      >

      <b-nav-item class="mobile-nav">Atividades Complementares</b-nav-item>
    </Navbar>
    <div class="container-fluid p-0">
      <div class="row m-0" id="content">
        <div class="col-md-2 col-0 border-right" id="sidebar">
          <Sidebar active="6" />
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
          <div id="inputs">
            <div class="container">
              <div class="row m-0">
                <div class="col-md-10 col-2 p-0" />
                <div class="col-md-2 col-4 p-0">
                  <div v-show="isLogged">
                    <b-button block v-b-modal.modal-addAtv
                      ><p>Adicionar</p></b-button
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row m-0" id="card-container">
            <CardExtensao
              v-for="atividade in items"
              :key="atividade.id"
              :nome="atividade.titulo"
              :id="atividade.id"
              v-on:click="loadInfo(atividade.id)"
            >
            </CardExtensao>
          </div>
        </div>
      </div>
    </div>

    <!-- MODAL INFORMAÇÕES -->
    <b-modal ref="modal-info" id="modal-info" size="lg" hide-footer>
      <template #modal-title>
        <div class="row m-0">
          <div class="col-md-8 col-12">
            {{ selected_atividade.atividade.titulo }}
          </div>
          <div class="col-md-0 col-0"></div>
          <div v-show="isLogged" class="col-md-2 col-6">
            <b-button size="sm" block class="btn-form" v-b-modal.modal-addEvt
              ><p>Nova Sessão</p></b-button
            >
          </div>
          <div v-show="isLogged" class="col-md-2 col-6">
            <b-button size="sm" block class="btn-form" v-b-modal.modal-addFt
              ><p>Nova Foto</p></b-button
            >
          </div>
        </div>
      </template>
      <div v-for="evento in selected_atividade.eventos" :key="evento.id">
        <div class="event-title">
          <h5>{{ evento.titulo }}</h5>

          <b-button
            v-show="isLogged"
            v-b-modal.modal-remover
            @click="removeId(1, evento.id)"
            size="sm"
            variant="danger"
            squared
          >
            <i class="bx bx-trash"></i>
            Excluir</b-button
          >
        </div>
        <div class="container-fluid">
          <div class="row m-0" id="fotos-section">
            <div
              class="col-md-4
          "
              v-for="foto in evento.fotos"
              :key="foto.id"
            >
              <b-card
                :img-src="foto.link"
                img-alt="Foto Equipe"
                img-top
                style="max-width: 20rem;"
                class="mb-2"
              >
                <b-card-text>
                  {{ foto.legenda }}
                </b-card-text>
                <div id="action-card">
                  <b-button
                    v-show="isLogged"
                    v-b-modal.modal-remover
                    @click="removeId(2, foto.id)"
                    size="sm"
                    variant="danger"
                    squared
                  >
                    <i class="bx bx-trash"></i>
                    Excluir</b-button
                  >
                </div>
              </b-card>
            </div>
          </div>
        </div>
      </div>
    </b-modal>
    <!-- MODAL ADICIONAR ATIVIDADE -->
    <b-modal
      id="modal-addAtv"
      ref="modal-add-atividade"
      title="Adicionar Nova Atividade Complementar"
      hide-footer
      ><b-form @submit.prevent="addAtividade" @reset="resetForm">
        <b-form-text> Título da Atividade Complementar </b-form-text>
        <b-form-input required v-model="form.titulo"></b-form-input>
        <div id="button-modal">
          <b-button type="reset" variant="danger">Cancelar</b-button>
          <b-button type="submit" variant="primary">Salvar</b-button>
        </div>
      </b-form>
    </b-modal>

    <!-- MODAL ADICIONAR EVENTO -->
    <b-modal
      id="modal-addEvt"
      ref="modal-add-evento"
      title="Adicionar Novo Evento"
      hide-footer
      ><b-form @submit.prevent="addEvento" @reset="resetForm">
        <b-form-text> Título do Evento </b-form-text>
        <b-form-input required v-model="formEvento.titulo"></b-form-input>
        <div id="button-modal">
          <b-button type="reset" variant="danger">Cancelar</b-button>
          <b-button type="submit" variant="primary">Salvar</b-button>
        </div>
      </b-form>
    </b-modal>

    <!-- MODAL ADICIONAR FOTO -->
    <b-modal
      id="modal-addFt"
      ref="modal-add-foto"
      title="Adicionar Nova Foto"
      hide-footer
      ><b-form @submit.prevent="addFoto" @reset="resetForm">
        <b-form-text>Sessão da Foto</b-form-text>
        <b-form-select v-model="formFoto.idEvento">
          <b-form-select-option
            v-for="evento in selected_atividade.eventos"
            :key="evento.id"
            :value="evento.id"
            >{{ evento.titulo }}</b-form-select-option
          ></b-form-select
        >
        <b-form-text>Legenda da Foto </b-form-text>
        <b-form-input required v-model="formFoto.legenda"></b-form-input>
        <b-form-text>Link da Foto </b-form-text>
        <b-form-input required v-model="formFoto.link"></b-form-input>
        <b-form-text id="password-help-block">
          O link para acesso deve seguir o exemplo: "http://www.uefs.br/"
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
  </div>
</template>
<script>
import Navbar from "../../components/reutilizavel/Navbar";
import CardExtensao from "../../components/reutilizavel/CardExtensao";
import Sidebar from "../../components/manager/Sidebar";
import atividadeService from "../../services/atividadeService";
export default {
  components: {
    Navbar,
    CardExtensao,
    Sidebar,
  },
  created() {
    this.getAtividades();
    const user = JSON.parse(sessionStorage.getItem("login"));
    if (user.user == "NupecUefs" && user.senha == "n1u$pec") {
      this.isLogged = true;
    }
  },
  data: () => ({
    deleteid: "",
    tipo: "",
    selected_atividade: {
      atividade: "",
      eventos: [
        {
          fotos: [],
        },
      ],
    },
    items: [],
    isLogged: false,
    form: {
      titulo: "",
      eventos: [],
    },
    formEvento: {
      titulo: "",
      fotos: "",
      idAtividade: "",
    },
    formFoto: {
      link: "",
      legenda: "",
      idEvento: "",
    },
  }),
  methods: {
    async addAtividade() {
      try {
        await atividadeService.addAtividade(this.form);
        this.$vs.notification({
          color: "success",
          title: "Adicionar Atividade Complementar",
          text: "Atividade Complementar adicionada com sucesso!",
        });
        this.getAtividades();
        this.$refs["modal-add-atividade"].hide();
      } catch (e) {
        this.$vs.notification({
          color: "danger",
          title: "Adicionar Atividade Complementar",
          text:
            "Houve um erro ao tentar adicionar a nova atividade complementar",
        });
      }
    },
    async addEvento() {
      this.formEvento.idAtividade = this.selected_atividade.atividade.id;
      try {
        await atividadeService.addEvento(this.formEvento);
        this.$vs.notification({
          color: "success",
          title: "Adicionar Evento",
          text: "Evento adicionado com sucesso!",
        });
        this.loadInfo(this.selected_atividade.atividade.id);
        this.$refs["modal-add-evento"].hide();
      } catch (e) {
        this.$vs.notification({
          color: "danger",
          title: "Adicionar Evento",
          text: "Houve um erro ao tentar adicionar o novo evento",
        });
      }
    },
    async addFoto() {
      try {
        await atividadeService.addFoto(this.formFoto, this.formFoto.idEvento);
        this.$vs.notification({
          color: "success",
          title: "Adicionar Foto",
          text: "Foto adicionada com sucesso!",
        });
        this.loadInfo(this.selected_atividade.atividade.id);
        this.$refs["modal-add-foto"].hide();
      } catch (e) {
        this.$vs.notification({
          color: "danger",
          title: "Adicionar Foto",
          text: "Houve um erro ao tentar adicionar a nova foto",
        });
      }
    },
    removeId(tipo, id) {
      this.tipo = tipo;
      this.deleteid = id;
    },
    async onDelete() {
      try {
        if (this.tipo == 1) {
          await atividadeService.deleteEvento(this.deleteid);
          this.$vs.notification({
            color: "success",
            title: "Remover Evento",
            text: "Evento Removido com sucesso!",
          });
          this.loadInfo(this.selected_atividade.atividade.id);
        } else {
          await atividadeService.deleteFoto(this.deleteid);
          this.$vs.notification({
            color: "success",
            title: "Remover Foto",
            text: "Foto Removida com sucesso!",
          });
          this.loadInfo(this.selected_atividade.atividade.id);
        }
      } catch (e) {
        if (this.tipo == 1) {
          this.$vs.notification({
            color: "danger",
            title: "Remover Evento",
            text: "Houve um erro ao tentar remover o evento",
          });
        } else {
          this.$vs.notification({
            color: "danger",
            title: "Remover Foto",
            text: "Houve um erro ao tentar remover a foto",
          });
        }
      }
    },
    // async deleteFoto(id) {
    //   try {
    //     await atividadeService.deleteFoto(id);
    //     this.$vs.notification({
    //       color: "success",
    //       title: "Remover Foto",
    //       text: "Foto Removida com sucesso!",
    //     });
    //     this.loadInfo(this.selected_atividade.atividade.id);
    //   } catch (e) {
    //     this.$vs.notification({
    //       color: "danger",
    //       title: "Remover Foto",
    //       text: "Houve um erro ao tentar remover a foto",
    //     });
    //   }
    //   this.loadInfo(this.selected_atividade.atividade.id);
    // },
    // async deleteEvento(id) {
    //   await atividadeService.deleteEvento(id);
    //   this.loadInfo(this.selected_atividade.atividade.id);
    // },
    resetForm(ref) {
      this.form = {};
      this.formEvento = {};
      this.formFoto = {};
      this.$refs[ref].hide();
    },
    getAtividades() {
      const loading = this.$vs.loading();
      atividadeService.getAtividades().then((response) => {
        this.items = response.data;
        loading.close();
      });
    },
    async loadInfo(id) {
      const loading = this.$vs.loading();
      var res = await atividadeService.findAtividade(id);
      this.selected_atividade.atividade = res.atividade;
      this.selected_atividade.eventos = res.eventos;
      this.selected_atividade.eventos.forEach(async (item) => {
        res = await atividadeService.getFotos(item.id);
        item.fotos = res.data;
        loading.close();
      });
      this.$refs["modal-info"].show();
    },
  },
};
</script>
<style>
.event-title {
  width: 100%;
  /* background: var(--primary-light-color); */
  padding: 8px 16px;
}

#action-card {
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
}

#fotos-section {
  padding-top: 8px;
  background: var(--light-color);
  margin: 0px !important;
}

#modal-info .modal-body {
  background-color: var(--light-color) !important;
  padding: 16px 0px !important;
}

#modal-info .modal-title {
  width: 100% !important;
  font-size: 32px !important;
  text-transform: uppercase !important;
  color: white !important;
}
#modal-info .modal-header {
  background-color: var(--primary-dark-color);
}
#modal-info .btn-form {
  background-color: var(--secondary-color);
  border-color: var(--secondary-color);
  margin: 0 !important;
}
#modal-info .btn-form:focus {
  background-color: var(--secondary-dark-color) !important;
  box-shadow: 0px 0px 1px 2px var(--secondary-light-color) !important;
}
#modal-info .btn-form:hover {
  background-color: var(--secondary-dark-color) !important;
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
