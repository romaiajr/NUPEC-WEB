<template>
  <div>
    <Navbar>
      <b-nav-item class="mobile-nav" to="/producoes/iniciacao-cientifica"
        >Iniciação Científica</b-nav-item
      >
      <b-nav-item class="mobile-nav">Projetos de Extensão</b-nav-item>
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
      <b-nav-item class="mobile-nav" to="/producoes/leituras-recomendadas" exact
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
                background=" background-color: #ffffff"
                v-on:click="loadInfo(projeto._id)"
              >
                <img class="img-projeto" :src="projeto.logo" />
              </CardExtensao>
            </div>
          </div>
          <Footer />
        </div>
      </div>

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
          <b-form-textarea required v-model="form.descricao"></b-form-textarea>
          <b-form-text> Nome do Orientador</b-form-text>
          <b-form-input v-model="form.orientador"></b-form-input>
          <b-form-text> Nome do Aluno</b-form-text>
          <b-form-input v-model="form.bolsista"></b-form-input>
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
            Os valores devem seguir o seguinte formato "Titulo do Item;Link;"
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
          <b-form-select v-model="deleteid" @change="deleteClass = 0">
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

      <!-- MODAL INFO -->
      <b-modal id="modal-extensao" ref="modal-extensao" size="lg" hide-footer>
        <template #modal-title>
          <div class="row m-0">
            <div class="col-md-12 col-12">
              <h5>
                <b>{{ selected_projeto.titulo }}</b>
              </h5>
              <div id="descricao-projeto">
                <small>{{ selected_projeto.descricao }}</small>
              </div>
            </div>
          </div>
          <div class="row" style="margin-top:16px;">
            <div class="col-md-8 col-0" />
            <div
              v-show="isLogged && selected_projeto.fotos"
              class="col-md-2 col-6 "
            >
              <b-button
                size="sm"
                block
                class="btn-form"
                style="margin-left: 15px !important;"
                v-b-modal.modal-addEvt
                ><p>Adicionar Evento</p></b-button
              >
            </div>
            <div
              v-show="isLogged && selected_projeto.fotos"
              class="col-md-2 col-6"
            >
              <b-button size="sm" block class="btn-form" v-b-modal.modal-addFt
                ><p>Adicionar Foto</p></b-button
              >
            </div>
          </div>
        </template>
        <div v-if="selected_projeto.tabela" id="projeto-section">
          <Management
            :conteudo="producoes"
            nome="Produções"
            :fields="fields"
            @itemRemove="itemRemove"
          />
        </div>
        <div v-if="selected_projeto.fotos">
          <div id="evento-body">
            <div id="title">
              <div class="container">
                <h4>
                  Eventos
                </h4>
              </div>
            </div>
            <div
              v-for="evento in eventos"
              :key="evento._id"
              style="border-bottom: 1px solid #dee2e6 !important;"
            >
              <div class="event-title">
                <h5>
                  {{ evento.titulo }}
                  <b-button
                    v-show="isLogged"
                    v-b-modal.modal-remover
                    @click="removeId(2, evento._id)"
                    size="sm"
                    variant="danger"
                    squared
                  >
                    <i class="bx bx-trash"></i>
                    Excluir</b-button
                  >
                </h5>
              </div>
              <div class="row m-0" :key="componentKey">
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
                                @click="removeId(3, foto._id)"
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
                                @click="removeId(3, foto._id)"
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
                                @click="removeId(3, foto._id)"
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
        </div>
      </b-modal>

      <!-- MODAL ADD PRODUÇÃO -->
      <b-modal
        id="modal-1"
        ref="modal-1"
        title="Adicionar Produção"
        hide-footer
      >
        <b-form
          @reset="onReset"
          @submit.prevent="addProducao"
          :v-model="(formProducao.projetoId = selected_projeto._id)"
        >
          <div v-for="(field, index) in selected_projeto.labels" :key="field">
            <b-form-text> {{ field }}</b-form-text>
            <b-form-input
              required
              v-if="selected_projeto.fields[index] != 'remove'"
              v-model="formProducao[selected_projeto.fields[index]]"
            ></b-form-input>
          </div>
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
        @hide="onReset"
        hide-footer
        ><b-form @submit.prevent="addEvento" @reset="onReset">
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
        @hide="onReset"
        hide-footer
        ><b-form @submit.prevent="addFoto" @reset="onReset">
          <b-form-text>Sessão da Foto</b-form-text>
          <b-form-select v-model="formFoto.idEvento">
            <b-form-select-option
              v-for="evento in eventos"
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
            Sugestão: Para melhor harmonia entre as fotos, é recomendado que
            todas estejam na mesma proporção. Ex: 10x8, 1x1
          </b-form-text>
          <b-form-text>Link para Acesso Externo (Não Obrigatório )</b-form-text>
          <b-form-input v-model="formFoto.linkExterno"></b-form-input>
          <div id="button-modal">
            <b-button type="reset" variant="danger">Cancelar</b-button>
            <b-button type="submit" variant="primary">Salvar</b-button>
          </div>
        </b-form>
      </b-modal>
    </div>
  </div>
</template>
<script>
import Navbar from "../../components/reutilizavel/Navbar";
import Footer from "../../components/reutilizavel/Footer";
import CardExtensao from "../../components/reutilizavel/CardExtensao";
import Sidebar from "../../components/manager/Sidebar";
import extensaoService from "../../services/extensaoService";
import Management from "../../components/manager/Management";
import { slider, slideritem } from "vue-concise-slider";
export default {
  components: {
    Navbar,
    Footer,
    CardExtensao,
    Sidebar,
    Management,
    slider,
    slideritem,
  },
  created() {
    this.getProjetos();
    this.isLogged = JSON.parse(sessionStorage.getItem("isLogged"));
  },
  data: () => ({
    isLogged: false,
    deleteid: "",
    deleteClass: "",
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
    formProducao: {},
    producoes: [],
    eventos: [],
    componentKey: 0,
    formEvento: {
      titulo: "",
      fotos: "",
      idProjeto: "",
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
  }),
  methods: {
    removeId(tipo, id) {
      this.deleteid = id;
      this.deleteClass = tipo;
    },
    redirect(row) {
      window.open(row);
    },
    async addEvento() {
      this.formEvento.titulo.trim();
      this.formEvento.idProjeto = this.selected_projeto._id;
      try {
        await extensaoService.addEvento(this.formEvento);
        this.$vs.notification({
          color: "success",
          title: "Adicionar Evento",
          text: "Evento adicionado com sucesso!",
        });
        this.loadInfo(this.selected_projeto._id);
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
        await extensaoService.addFoto(this.formFoto);
        this.$vs.notification({
          color: "success",
          title: "Adicionar Foto",
          text: "Foto adicionada com sucesso!",
        });
        this.loadInfo(this.selected_projeto._id);
        this.$refs["modal-add-foto"].hide();
        this.componentKey++;
      } catch (e) {
        this.$vs.notification({
          color: "danger",
          title: "Adicionar Foto",
          text: "Houve um erro ao tentar adicionar a nova foto",
        });
      }
    },
    itemRemove(obj) {
      this.deleteid = obj._id;
      this.deleteClass = 1;
    },
    getProjetos() {
      const loading = this.$vs.loading();
      extensaoService.getProjetos().then((response) => {
        this.items = response.data;
        loading.close();
      });
    },
    async loadInfo(id) {
      this.fields = [];
      const loading = this.$vs.loading();
      var res = await extensaoService.findProjeto(id);
      this.selected_projeto = res.data[0];
      this.selected_projeto.fields.forEach((field, index) => {
        this.fields.push({
          key: field,
          label: this.selected_projeto.labels[index],
        });
      });
      if (this.selected_projeto.fotos) {
        var eventos = await extensaoService.getEvento(
          this.selected_projeto._id
        );
        this.eventos = eventos.data;
        this.eventos.forEach(async (evento) => {
          var fotos = await extensaoService.getFotos(evento._id);
          evento.fotos = fotos.data;
          this.componentKey++;
        });
      }
      if (this.selected_projeto.tabela) {
        res = await extensaoService.getProducao(this.selected_projeto._id);
        this.producoes = res.data;
      }
      loading.close();
      this.$refs["modal-extensao"].show();
    },
    async addProjeto() {
      try {
        this.keys = this.keys + "remove";
        this.form.fields = this.keys
          .toLowerCase()
          .replace(/\s/g, "_")
          .split(";");
        this.form.labels = this.keys.replace("remove", "").split(";");
        await extensaoService.addProjeto(this.form);
        this.$vs.notification({
          color: "success",
          title: "Adicionar Projeto de Extensão",
          text: "Projeto de Extensão adicionado com sucesso!",
        });
        this.getProjetos();
        this.onReset;
        this.$refs["modal-addExt"].hide();
      } catch (e) {
        this.$vs.notification({
          color: "danger",
          title: "Adicionar Projeto de Extensão",
          text: "Houve um erro ao tentar adicionar o novo Projeto de Extensão",
        });
      }
    },
    onReset() {
      this.form = { tabela: false };
      this.keys = "";
      // this.fields = "";
      this.deleteid = "";
      this.deleteClass = "";
    },
    async onDelete() {
      if (this.deleteClass == 0) {
        try {
          await extensaoService.removeProjeto(this.deleteid);
          this.$vs.notification({
            color: "success",
            title: "Remover Projeto de Extensão",
            text: "Projeto de Extensão removido com sucesso!",
          });
          this.getProjetos();
          this.$refs["modal-remove-projeto"].hide();
        } catch (e) {
          this.$vs.notification({
            color: "danger",
            title: "Remover Projeto de Extensão",
            text: "Houve um erro ao tentar remover o Projeto de Extensão",
          });
        }
      } else if (this.deleteClass == 1) {
        try {
          await extensaoService.removeProducao(this.deleteid);
          this.$vs.notification({
            color: "success",
            title: "Remover Item",
            text: "Item removido com sucesso!",
          });
          this.loadInfo(this.selected_projeto._id);
        } catch (e) {
          this.$vs.notification({
            color: "danger",
            title: "Remover Item",
            text: "Houve um erro ao tentar remover o item",
          });
        }
      } else if (this.deleteClass == 2) {
        try {
          await extensaoService.deleteEvento(this.deleteid);
          this.$vs.notification({
            color: "success",
            title: "Remover Evento",
            text: "Evento Removido com sucesso!",
          });
          this.loadInfo(this.selected_projeto._id);
        } catch (e) {
          this.$vs.notification({
            color: "danger",
            title: "Remover Evento",
            text: "Houve um erro ao tentar remover o evento",
          });
        }
      } else {
        try {
          await extensaoService.deleteFoto(this.deleteid);
          this.$vs.notification({
            color: "success",
            title: "Remover Foto",
            text: "Foto Removida com sucesso!",
          });
          this.loadInfo(this.selected_projeto._id);
        } catch (e) {
          this.$vs.notification({
            color: "danger",
            title: "Remover Foto",
            text: "Houve um erro ao tentar remover a foto",
          });
        }
      }
    },
    async addProducao() {
      try {
        await extensaoService.addProducao(this.formProducao);
        this.$vs.notification({
          color: "success",
          title: "Adicionar Produção",
          text: "Projeto de Extensão adicionado com sucesso!",
        });
        // this.selected_projeto.producoes = this.selected_projeto.producoes
        //   .push(this.formProducao)
        //   .sort((a, b) => {
        //     return a[
        //       this.selected_projeto.fields[0].localeCompare(
        //         b[this.selected_projeto.fields[0]]
        //       )
        //     ];
        //   });
        this.loadInfo(this.selected_projeto._id);
        this.$refs["modal-1"].hide();
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
#descricao-projeto {
  line-height: 80% !important;
}
#projeto-section {
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  margin-top: 16px;
  padding-bottom: 16px;
}

#modal-extensao .modal-title {
  width: 100% !important;
  font-size: 32px !important;
  text-transform: uppercase !important;
  color: white !important;
}

#modal-extensao .modal-header {
  background-color: var(--primary-dark-color);
}
#modal-extensao .btn-form {
  background-color: var(--secondary-color);
  border-color: var(--secondary-color);
  margin: 0 !important;
}
#modal-extensao .btn-form:focus {
  background-color: var(--secondary-dark-color) !important;
  box-shadow: 0px 0px 1px 2px var(--secondary-light-color) !important;
}
#modal-extensao .btn-form:hover {
  background-color: var(--secondary-dark-color) !important;
}

#modal-extensao .modal-body {
  background: white !important;
}
#sidebar .active {
  color: white !important;

  background-color: var(--primary-dark-color);
}

.img-projeto {
  border: solid #f1f1f1;
  border-width: thin;
  width: 100% !important;
  height: auto !important;
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
