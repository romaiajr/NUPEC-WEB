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
              :key="atividade._id"
              :nome="atividade.titulo"
              :id="atividade._id"
              v-on:click="loadInfo(atividade._id)"
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
            {{ selected_atividade.atividade[0].titulo }}
          </div>
          <div class="col-md-0 col-0"></div>
          <div v-show="isLogged" class="col-md-2 col-6">
            <b-button size="sm" block class="btn-form" v-b-modal.modal-addEvt
              ><p>Novo Evento</p></b-button
            >
          </div>
          <div v-show="isLogged" class="col-md-2 col-6">
            <b-button size="sm" block class="btn-form" v-b-modal.modal-addFt
              ><p>Nova Foto</p></b-button
            >
          </div>
        </div>
      </template>
      <div v-for="evento in selected_atividade.eventos" :key="evento._id">
        <div class="event-title">
          <h5>{{ evento.titulo }}</h5>
          <b-button
            v-show="isLogged"
            v-b-modal.modal-remover
            @click="removeId(1, evento._id)"
            size="sm"
            variant="danger"
            squared
          >
            <i class="bx bx-trash"></i>
            Excluir</b-button
          >
        </div>
        <div class="row m-0" id="fotos-section">
          <!-- <div class="col-md-6" v-for="foto in evento.fotos" :key="foto._id">
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
                  @click="removeId(2, foto._id)"
                  size="sm"
                  variant="danger"
                  squared
                >
                  <i class="bx bx-trash"></i>
                  Excluir</b-button
                >
              </div>
            </b-card>
          </div> -->
          <div
            class="row m-0"
            id="carousel-desktop"
            style="width:100%;margin:10px auto;height: 450px"
          >
            <slider ref="slider-desktop" :options="optionsDesktop">
              <!-- slideritem wrapped package with the components you need -->
              <slideritem
                v-for="(foto, index) in evento.fotos"
                :key="index"
                :style="styleDesktop"
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
                      @click="removeId(2, foto._id)"
                      size="sm"
                      variant="danger"
                      squared
                    >
                      <i class="bx bx-trash"></i>
                      Excluir</b-button
                    >
                  </div>
                </b-card>
              </slideritem>
              <!-- Customizable loading -->
              <div slot="loading">loading...</div>
            </slider>
          </div>
          <div
            class="row m-0"
            id="carousel-mobile"
            style="width:100%;margin:10px auto;height: 500px"
          >
            <slider ref="slider-mobile" :options="optionsMobile">
              <!-- slideritem wrapped package with the components you need -->
              <slideritem
                v-for="(foto, index) in evento.fotos"
                :key="index"
                :style="styleMobile"
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
                      @click="removeId(2, foto._id)"
                      size="sm"
                      variant="danger"
                      squared
                    >
                      <i class="bx bx-trash"></i>
                      Excluir</b-button
                    >
                  </div>
                </b-card>
              </slideritem>
              <!-- Customizable loading -->
              <div slot="loading">loading...</div>
            </slider>
          </div>
          <div
            class="row m-0"
            id="carousel-medium"
            style="width:100%;margin:10px auto;height: 450px"
          >
            <slider ref="slider-medium" :options="optionsMobile">
              <!-- slideritem wrapped package with the components you need -->
              <slideritem
                v-for="(foto, index) in evento.fotos"
                :key="index"
                :style="styleMedium"
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
                      @click="removeId(2, foto._id)"
                      size="sm"
                      variant="danger"
                      squared
                    >
                      <i class="bx bx-trash"></i>
                      Excluir</b-button
                    >
                  </div>
                </b-card></slideritem
              >
              <!-- Customizable loading -->
              <div slot="loading"></div>
            </slider>
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
            :key="evento._id"
            :value="evento._id"
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
import { slider, slideritem } from "vue-concise-slider";
export default {
  components: {
    Navbar,
    CardExtensao,
    Sidebar,
    slider,
    slideritem,
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
    styleDesktop: {
      height: "auto",
      width: "31.3%",
      "margin-right": "2%",
    },
    styleMobile: {
      height: "auto",
      width: "98%",
      "margin-right": "2%",
    },
    styleMedium: {
      height: "auto",
      width: "49%",
      "margin-right": "2%",
    },
    //Slider configuration [obj]
    optionsDesktop: {
      currentPage: 0,
      slidesToScroll: 2,
      thresholdDistance: "50",
      pagination: false,
    },
    optionsMobile: {
      currentPage: 0,
      slidesToScroll: 1,
      thresholdDistance: "50",
      pagination: false,
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
      this.formEvento.idAtividade = this.selected_atividade.atividade[0]._id;
      try {
        await atividadeService.addEvento(this.formEvento);
        this.$vs.notification({
          color: "success",
          title: "Adicionar Evento",
          text: "Evento adicionado com sucesso!",
        });
        this.loadInfo(this.selected_atividade.atividade[0]._id);
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
        await atividadeService.addFoto(this.formFoto);
        this.$vs.notification({
          color: "success",
          title: "Adicionar Foto",
          text: "Foto adicionada com sucesso!",
        });
        this.loadInfo(this.selected_atividade.atividade[0]._id);
        this.$refs["modal-add-foto"].hide();
      } catch (e) {
        this.$vs.notification({
          color: "danger",
          title: "Adicionar Foto",
          text: "Houve um erro ao tentar adicionar a nova foto",
        });
      }
    },
    removeId(tipo, obj) {
      this.tipo = tipo;
      this.deleteid = obj;
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
          this.loadInfo(this.selected_atividade.atividade[0]._id);
        } else {
          await atividadeService.deleteFoto(this.deleteid);
          this.$vs.notification({
            color: "success",
            title: "Remover Foto",
            text: "Foto Removida com sucesso!",
          });
          this.loadInfo(this.selected_atividade.atividade[0]._id);
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
    resetForm(ref) {
      this.form = {};
      this.formEvento = {};
      this.formFoto = {};
      this.$refs[ref].hide();
    },
    getAtividades() {
      const loading = this.$vs.loading();
      atividadeService.getAtividades().then((response) => {
        this.items = response.data.sort((a, b) => {
          return a.titulo.localeCompare(b.titulo);
        });
        loading.close();
      });
    },
    async loadInfo(id) {
      const loading = this.$vs.loading();
      var res = await atividadeService.findAtividade(id);
      this.selected_atividade.atividade = res.atividade;
      this.selected_atividade.eventos = res.eventos;
      this.selected_atividade.eventos.forEach(async (item) => {
        res = await atividadeService.getFotos(item._id);
        console.log("fotos: " + res.data);
        item.fotos = res.data;
      });
      loading.close();
      this.$refs["modal-info"].show();
    },
  },
};
</script>
<style>
#carousel-mobile {
  display: none;
}
#carousel-medium {
  display: none;
}

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
  #carousel-desktop {
    display: none !important;
  }
  #carousel-mobile {
    display: block !important;
  }
  #carousel-medium {
    display: none !important;
  }
  @media screen and (max-width: 1140px) and (min-width: 761px) {
    #carousel-desktop {
      display: none !important;
    }
    #carousel-mobile {
      display: none !important;
    }
    #carousel-medium {
      display: block !important;
    }
  }

  #sidebar {
    display: none !important;
  }
}
</style>
