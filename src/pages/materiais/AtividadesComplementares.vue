<template>
  <div>
    <Navbar>
      <b-nav-item class="mobile-nav" to="/producoes/projetos-de-pesquisa"
        >Projetos de Pesquisa</b-nav-item
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

      <b-nav-item class="mobile-nav">Atividades Desenvolvidas</b-nav-item>
      <b-nav-item class="mobile-nav" to="/producoes/leituras-recomendadas" exact
        >Leituras Recomendadas</b-nav-item
      >
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
                Atividades Desenvolvidas
                <b-badge>{{ items.length }}</b-badge>
              </h4>
            </div>
          </div>
          <div id="inputs">
            <div class="container">
              <div class="row m-0">
                <div class="col-md-8 col-2 p-0" />
                <div class="col-md-2 col-4 " v-show="isLogged">
                  <b-button block v-b-modal.modal-addAtv
                    ><p>Adicionar</p></b-button
                  >
                </div>
                <div class="col-md-2 col-4 " v-show="isLogged">
                  <b-button block v-b-modal.modal-removeAtividade
                    ><p>Remover</p></b-button
                  >
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
              <img class="img-projeto" :src="atividade.link" />
            </CardExtensao>
          </div>
          <Footer />
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
      <div class="container-fluid">
        <div
          id="evento-body"
          v-for="evento in selected_atividade.eventos"
          :key="evento._id"
        >
          <div class="event-title">
            <h5>
              {{ evento.titulo }}
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
            </h5>
          </div>
          <div class="row m-0" id="fotos-section" :key="componentKey">
            <div class="container-fluid">
              <div
                class="row m-0"
                id="carousel-desktop"
                style="width:100%;margin:10px auto;height: 450px"
              >
                <slider
                  ref="slider-desktop"
                  :options="optionsDesktop"
                  v-if="evento.fotos.length != 0"
                >
                  <!-- slideritem wrapped package with the components you need -->
                  <slideritem
                    v-for="(foto, index) in evento.fotos"
                    :key="index"
                    :style="styleDesktop"
                  >
                    <div class="card">
                      <img
                        class="card-img-top img-fluid"
                        :src="foto.link"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <p class="card-title text-wrap">
                          {{ foto.legenda }}
                          <br />
                          <small
                            v-if="
                              foto.linkExterno != undefined &&
                                foto.linkExterno != ''
                            "
                            @click="redirect(foto.linkExterno)"
                            class="linkExterno"
                            >Acessar</small
                          >
                        </p>

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
                      </div>
                    </div>
                  </slideritem>
                  <!-- Customizable loading -->
                </slider>
                <div v-else style="width: 100% !important;">
                  <b-alert show variant="warning">
                    <h6>
                      Ainda não foram inseridas fotos nesta sessão
                    </h6></b-alert
                  >
                </div>
              </div>
              <div
                class="row m-0"
                id="carousel-mobile"
                style="width:100%;margin:10px auto;height: 500px"
              >
                <slider
                  ref="slider-mobile"
                  :options="optionsMobile"
                  v-if="evento.fotos.length != 0"
                >
                  <!-- slideritem wrapped package with the components you need -->
                  <slideritem
                    v-for="(foto, index) in evento.fotos"
                    :key="index"
                    :style="styleMobile"
                  >
                    <div class="card">
                      <img
                        class="card-img-top img-fluid"
                        :src="foto.link"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <p class="card-title text-wrap">
                          {{ foto.legenda }}
                          <br />
                          <small
                            v-if="
                              foto.linkExterno != undefined &&
                                foto.linkExterno != ''
                            "
                            @click="redirect(foto.linkExterno)"
                            class="linkExterno"
                            >Acessar</small
                          >
                        </p>

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
                      </div>
                    </div>
                  </slideritem>
                  <!-- Customizable loading -->
                </slider>
                <div v-else style="width: 100% !important;">
                  <b-alert show variant="warning">
                    <h6>
                      Ainda não foram inseridas fotos nesta sessão
                    </h6></b-alert
                  >
                </div>
              </div>
              <div
                class="row m-0"
                id="carousel-medium"
                style="width:100%;margin:10px auto;height: 450px"
              >
                <slider
                  ref="slider-medium"
                  :options="optionsMobile"
                  v-if="evento.fotos.length != 0"
                >
                  <!-- slideritem wrapped package with the components you need -->
                  <slideritem
                    v-for="(foto, index) in evento.fotos"
                    :key="index"
                    :style="styleMedium"
                  >
                    <div class="card">
                      <img
                        class="card-img-top img-fluid"
                        :src="foto.link"
                        alt="Card image cap"
                      />
                      <div class="card-body">
                        <p class="card-title text-wrap">
                          {{ foto.legenda }}
                          <br />
                          <small
                            v-if="
                              foto.linkExterno != undefined &&
                                foto.linkExterno != ''
                            "
                            @click="redirect(foto.linkExterno)"
                            class="linkExterno"
                            >Acessar</small
                          >
                        </p>

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
                      </div>
                    </div>
                  </slideritem>
                  <!-- Customizable loading -->
                </slider>
                <div slot="loading" v-show="evento.fotos.length == 0">
                  <b-alert show variant="warning"
                    ><h6>
                      Ainda não foram inseridas fotos nesta sessão
                    </h6></b-alert
                  >
                </div>
              </div>
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
      @hide="resetForm"
      hide-footer
      ><b-form @submit.prevent="addAtividade" @reset="resetForm">
        <b-form-text> Título da Atividade Complementar </b-form-text>
        <b-form-input required v-model="form.titulo"></b-form-input>
        <b-form-text> Link para Imagem de Capa </b-form-text>
        <b-form-input required v-model="form.link"></b-form-input>
        <b-form-text id="password-help-block">
          A imagem de capa deve estar recortada no formato 1x1 (quadrado)
        </b-form-text>
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
      @hide="resetForm"
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
      @hide="resetForm"
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
          Sugestão: Para melhor harmonia entre as fotos, é recomendado que todas
          estejam na mesma proporção. Ex: 10x8, 1x1
        </b-form-text>
        <b-form-text>Link para Acesso Externo (Não Obrigatório )</b-form-text>
        <b-form-input v-model="formFoto.linkExterno"></b-form-input>
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
      id="modal-removeAtividade"
      ref="modal-remove-atividade"
      title="Remover Atividade Complementar"
      hide-footer
      @hide="resetForm"
      ><b-form @reset="resetForm">
        <b-form-text>
          Selecione a Atividade Complementar a ser removida</b-form-text
        >
        <b-form-select @change="tipo = 0" v-model="deleteid">
          <b-form-select-option
            v-for="atv in items"
            :key="atv._id"
            :value="atv._id"
            >{{ atv.titulo }}</b-form-select-option
          ></b-form-select
        >
        <div id="button-modal">
          <b-button type="reset" variant="danger">Cancelar</b-button>
          <b-button v-b-modal.modal-remover variant="primary">Remover</b-button>
        </div>
      </b-form>
    </b-modal>
  </div>
</template>
<script>
import Navbar from "../../components/reutilizavel/Navbar";
import Footer from "../../components/reutilizavel/Footer";
import CardExtensao from "../../components/reutilizavel/CardExtensao";
import Sidebar from "../../components/manager/Sidebar";
import atividadeService from "../../services/atividadeService";
import { slider, slideritem } from "vue-concise-slider";
export default {
  components: {
    Navbar,
    Footer,
    CardExtensao,
    Sidebar,
    slider,
    slideritem,
  },
  created() {
    this.getAtividades();
    this.isLogged = JSON.parse(sessionStorage.getItem("isLogged"));
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
      link: "",
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
      linkExterno: "",
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
    componentKey: 0,
  }),
  methods: {
    async addAtividade() {
      this.form.titulo.trim();
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
      this.formEvento.titulo.trim();
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
      this.formFoto.link.trim();
      this.formFoto.legenda.trim();
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
          this.componentKey++;
          this.loadInfo(this.selected_atividade.atividade[0]._id);
        } else if (this.tipo == 2) {
          await atividadeService.deleteFoto(this.deleteid);
          this.$vs.notification({
            color: "success",
            title: "Remover Foto",
            text: "Foto Removida com sucesso!",
          });
          this.componentKey++;
          this.loadInfo(this.selected_atividade.atividade[0]._id);
        } else {
          await atividadeService.removeAtividade(this.deleteid);
          this.$vs.notification({
            color: "success",
            title: "Remover Atividade Complementar",
            text: "Atividade Complementar Removida com sucesso!",
          });
          this.getAtividades();
        }
      } catch (e) {
        if (this.tipo == 1) {
          this.$vs.notification({
            color: "danger",
            title: "Remover Evento",
            text: "Houve um erro ao tentar remover o evento",
          });
        } else if (this.tipo == 2) {
          this.$vs.notification({
            color: "danger",
            title: "Remover Foto",
            text: "Houve um erro ao tentar remover a foto",
          });
        } else {
          this.$vs.notification({
            color: "danger",
            title: "Remover Atividade Complementar",
            text: "Houve um erro ao tentar remover a Atividade Complementar",
          });
        }
      }
    },
    resetForm() {
      this.form = {};
      this.formEvento = {};
      this.formFoto = {};
      this.deleteid = "";
      this.tipo = "";
      this.$refs["modal-add-atividade"].hide();
      this.$refs["modal-add-evento"].hide();
      this.$refs["modal-add-foto"].hide();
      this.$refs["modal-remove-atividade"].hide();
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
      this.selected_atividade.eventos = res.eventos.reverse();
      this.selected_atividade.eventos.forEach(async (item) => {
        res = await atividadeService.getFotos(item._id);
        item.fotos = res.data;
        this.componentKey++;
      });

      loading.close();

      this.$refs["modal-info"].show();
    },
    redirect(row) {
      window.open(row);
    },
  },
};
</script>
<style>
.card {
  margin: 5% 0% !important;
}

.card-body {
  margin: 0% 0% 0% 3% !important;
  padding: 6% 0% !important;
  color: black;
}
.card-title {
  word-break: break-word !important;
  overflow-wrap: break-word !important;
}
.card-img-top {
  width: 100% !important;
  height: auto !important;
}
.spinner-border {
  color: #255be2 !important;
}
.linkExterno {
  text-decoration: none;
  color: black;
  cursor: pointer;
}
.linkExterno,
.linkExterno:after,
.linkExterno:before {
  transition: all 0.5s;
}
.linkExterno:hover {
  color: var(--secondary-dark-color) !important;
}
/* stroke */
.linkExterno {
  position: relative;
}
.linkExterno:after,
.linkExterno:after {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  width: 0%;
  content: ".";
  color: transparent;
  background: var(--primary-dark-color);
  height: 2px !important;
}
.linkExterno:hover:after {
  width: 100%;
}

.linkExterno {
  transition: all 1s;
}

.linkExterno:after {
  text-align: left;
  content: ".";
  margin: 0;
  opacity: 0;
}
.linkExterno:hover {
  color: var(--primary-dark-color);
  z-index: 1;
}
.linkExterno:hover:after {
  z-index: -10;
  animation: fill 1s forwards;
  opacity: 1;
}
#carousel-mobile {
  display: none;
}
#carousel-medium {
  display: none;
}

#evento-body {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  margin-top: 16px;
  padding-bottom: 16px;
}

.event-title {
  width: 100%;
  /* background: var(--primary-light-color); */
  padding: 8px 16px;
}

#action-card {
  margin-right: 8px;
  display: flex;
  justify-content: flex-end;
}

#fotos-section {
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
