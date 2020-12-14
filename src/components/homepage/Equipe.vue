<template>
  <div id="nossa-equipe" ref="nossa-equipe">
    <div class="container">
      <div class="row m-0">
        <img src="../../assets/img/box.png" id="box" />
        <div class="col-12 col-md-3">
          <h2 class="title-section">NOSSA <br />EQUIPE</h2>
        </div>
        <div class="col-0 col-md-1"></div>
        <div class="col-12 col-md-8">
          <h6>
            <!-- Nossa equipe é formada por Professores e Estudantes do curso de
            Enfermagem na Universidade Estadual de Feira de Santana, junto a
            Colaboradores Externos, como feirantes e contribuintes, onde
            compartilhamos do objetivo de promover o aprofundamento acerca do
            Cuidar/Cuidado. -->
            Nossa equipe é composta por um grupo multidisciplinar de
            pesquisadoras(es) e estudantes de graduação da Universidade Estadual
            de Feira de Santana, majoritariamente de Enfermagem, visando
            aprofundar o ensino e a pesquisa acerca do Cuidado.
          </h6>
        </div>
      </div>
      <div id="buttons-equipe" v-show="isLogged" class="col-md-2 col-6">
        <b-button size="sm" block class="btn-form" v-b-modal.modal-addEquipe
          ><p>Adicionar Membro</p></b-button
        >
        <b-button size="sm" block class="btn-form" v-b-modal.modal-removeEquipe
          ><p>Remover Membro</p></b-button
        >
      </div>
      <div
        class="row m-0"
        id="carousel-desktop"
        style="width:100%;margin:10px auto;height: 450px"
      >
        <slider
          ref="slider-desktop"
          :key="componentKey"
          :options="optionsDesktop"
          v-show="equipe.length != 0"
        >
          <!-- slideritem wrapped package with the components you need -->
          <slideritem
            v-for="(membro, index) in equipe"
            :key="index"
            :style="styleDesktop"
            ><CardEquipe
              v-if="membro.tipo != 'Ex-membro'"
              class="card-equipe"
              :imagem="membro.imagem"
              :nome="membro.nome"
              :cargo="membro.cargo"
              :lattes="membro.lattes"
            ></CardEquipe
          ></slideritem>
          <div slot="loading">
            <b-spinner label="Spinning"></b-spinner> Loading...
          </div>
        </slider>
        <div
          v-show="equipe.length == 0 && loading > 0"
          style="width: 100% !important;"
        >
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
          :key="componentKey"
          :options="optionsMobile"
          v-show="equipe.length != 0"
        >
          <!-- slideritem wrapped package with the components you need -->
          <slideritem
            v-for="(membro, index) in equipe"
            :key="index"
            :style="styleMobile"
            ><CardEquipe
              v-if="membro.tipo != 'Ex-membro'"
              class="card-equipe"
              :imagem="membro.imagem"
              :nome="membro.nome"
              :cargo="membro.cargo"
              :lattes="membro.lattes"
          /></slideritem>
          <div slot="loading">
            <b-spinner label="Spinning"></b-spinner> Loading...
          </div>
        </slider>
        <div
          v-show="equipe.length == 0 && loading > 0"
          style="width: 100% !important;"
        >
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
          :key="componentKey"
          :options="optionsMobile"
          v-show="equipe.length != 0"
        >
          <!-- slideritem wrapped package with the components you need -->
          <slideritem
            v-for="(membro, index) in equipe"
            :key="index"
            :style="styleMedium"
            ><CardEquipe
              v-if="membro.tipo != 'Ex-membro'"
              class="card-equipe"
              :imagem="membro.imagem"
              :nome="membro.nome"
              :cargo="membro.cargo"
              :lattes="membro.lattes"
          /></slideritem>
          <div slot="loading">
            <b-spinner label="Spinning"></b-spinner> Loading...
          </div>
          <div class="container"></div>
        </slider>
        <div
          v-show="equipe.length == 0 && loading > 0"
          style="width: 100% !important;"
        >
          <b-alert show variant="warning">
            <h6>
              Ainda não foram inseridos membros da equipe
            </h6></b-alert
          >
        </div>
      </div>
      <div id="button-section">
        <a
          ><button class="a-button" @click="openEquipe">
            <h6>VEJA TODA A EQUIPE</h6>
          </button></a
        >
      </div>

      <div class="center">
        <vs-dialog blur v-model="equipeDialog" id="dialog-equipe">
          <template #header>
            <h5 class="not-margin">Nossa Equipe</h5>
          </template>
          <div class="row m-0">
            <h4>Professoras(es)</h4>
          </div>
          <div class="row">
            <div
              class="col-6 col-md-4"
              v-for="membro in equipe"
              v-show="membro.tipo == options[0]"
              :key="membro._id"
            >
              <CardEquipe
                class="card-toda-equipe"
                :imagem="membro.imagem"
                :nome="membro.nome"
                :cargo="membro.cargo"
                :lattes="membro.lattes"
              />
            </div>
          </div>
          <div class="row m-0" style="margin-top: 36px !important;">
            <h4>Bolsistas</h4>
          </div>
          <div class="row">
            <div
              class="col-6 col-md-4"
              v-for="membro in equipe"
              v-show="membro.tipo == options[1]"
              :key="membro._id"
            >
              <CardEquipe
                class="card-toda-equipe"
                :imagem="membro.imagem"
                :nome="membro.nome"
                :cargo="membro.cargo"
                :lattes="membro.lattes"
              />
            </div>
          </div>
          <div class="row m-0" style="margin-top: 36px !important;">
            <h4>Voluntários(as)</h4>
          </div>
          <div class="row">
            <div
              class="col-6 col-md-4"
              v-for="membro in equipe"
              v-show="membro.tipo == options[2]"
              :key="membro._id"
            >
              <CardEquipe
                class="card-toda-equipe"
                :imagem="membro.imagem"
                :nome="membro.nome"
                :cargo="membro.cargo"
                :lattes="membro.lattes"
              />
            </div>
          </div>
          <div class="row m-0" style="margin-top: 36px !important;">
            <h4>Colaboradores(as)</h4>
          </div>
          <div class="row">
            <div
              class="col-6 col-md-4"
              v-for="membro in equipe"
              v-show="membro.tipo == options[3]"
              :key="membro._id"
            >
              <CardEquipe
                class="card-toda-equipe"
                :imagem="membro.imagem"
                :nome="membro.nome"
                :cargo="membro.cargo"
                :lattes="membro.lattes"
              />
            </div>
          </div>
          <div class="row m-0" style="margin-top: 36px !important;">
            <h4>Ex-membros</h4>
          </div>
          <div class="row">
            <div
              class="col-6 col-md-4"
              v-for="membro in equipe"
              v-show="membro.tipo == options[4]"
              :key="membro._id"
            >
              <CardEquipe
                class="card-toda-equipe"
                :imagem="membro.imagem"
                :nome="membro.nome"
                :cargo="membro.cargo"
                :lattes="membro.lattes"
              />
            </div>
          </div>
        </vs-dialog>
      </div>
    </div>
    <b-modal
      id="modal-addEquipe"
      ref="modal-add-equipe"
      title="Adicionar Novo Membro da Equipe"
      @hide="resetForm"
      hide-footer
      ><b-form @submit.prevent="onSubmit" @reset="resetForm">
        <b-form-text> Nome do Membro </b-form-text>
        <b-form-input required v-model="form.nome"></b-form-input>
        <b-form-text> Tipo de Cargo </b-form-text>
        <b-form-radio-group
          v-model="form.tipo"
          :options="options"
          class="mb-3"
          value-field="item"
          text-field="name"
          disabled-field="notEnabled"
        ></b-form-radio-group>
        <b-form-text> Cargo Exercido</b-form-text>
        <b-form-input required v-model="form.cargo"></b-form-input>
        <b-form-text> Link para o Lattes (Não obrigatório) </b-form-text>
        <b-form-input v-model="form.lattes"></b-form-input>
        <b-form-text> Link para Imagem </b-form-text>
        <b-form-input required v-model="form.imagem"></b-form-input>
        <b-form-text id="password-help-block">
          A imagem deverá está no formato quadrado (1x1)
        </b-form-text>
        <div id="button-modal">
          <b-button type="reset" variant="danger">Cancelar</b-button>
          <b-button type="submit" variant="primary">Salvar</b-button>
        </div>
      </b-form>
    </b-modal>
    <b-modal
      id="modal-removeEquipe"
      ref="modal-remove-equipe"
      title="Remover Membro da Equipe"
      hide-footer
      ><b-form @reset="resetForm">
        <b-form-text> Selecione o Membro a ser Removido</b-form-text>
        <b-form-select v-model="removeId">
          <b-form-select-option
            v-for="membro in equipe"
            :key="membro._id"
            :value="membro._id"
            >{{ membro.nome }}</b-form-select-option
          ></b-form-select
        >
        <div id="button-modal">
          <b-button type="reset" variant="danger">Cancelar</b-button>
          <b-button v-b-modal.modal-confirmRemove variant="primary"
            >Remover</b-button
          >
        </div>
      </b-form>
    </b-modal>
    <b-modal
      id="modal-confirmRemove"
      ref="modal-confirm-remove"
      title="Remover Membro da Equipe"
      ok-title="Remover"
      ok-variant="success"
      cancel-variant="danger"
      @ok="onDelete"
    >
      Deseja Remover o Membro Selecionado?
    </b-modal>
  </div>
</template>
<script>
import { slider, slideritem } from "vue-concise-slider";
import equipeService from "@/services/equipeService";
import CardEquipe from "../reutilizavel/CardEquipe";

// import axios from "axios";

export default {
  components: {
    slider,
    slideritem,
    CardEquipe,
  },
  data: () => ({
    loading: 0,
    equipeDialog: false,
    styleDesktop: {
      height: "auto",
      width: "23.5%",
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
    equipe: [],
    form: {
      nome: "",
      cargo: "",
      tipo: "",
      imagem: "",
      lattes: "",
    },
    options: [
      "Professor",
      "Bolsista",
      "Voluntário",
      "Colaborador",
      "Ex-membro",
    ],
    isLogged: false,
    removeId: "",
    componentKey: 0,
  }),
  methods: {
    openEquipe() {
      this.equipeDialog = true;
    },
    getEquipe() {
      equipeService.getEquipe().then((response) => {
        this.equipe = response.data.sort((a, b) => {
          if (a.tipo == "Professor" && b.tipo != "Professor") return -1;
          else if (a.tipo == "Bolsista" && b.tipo == "Voluntário") return -1;
          else if (a.tipo == "Voluntário" && b.tipo == "Colaborador") return -1;
          else if (a.tipo == "Colaborador" && b.tipo == "Ex-membro") return -1;
          else if (a.tipo == "Ex-membro" && b.tipo != "Ex-membro") return +1;
          else if (a.tipo == b.tipo) {
            if (a.tipo == "Professor" && b.tipo == "Professor") {
              if (a.cargo.toLowerCase().includes("coordenador")) return -1;
              if (a.cargo.toLowerCase().includes("vice-coordenador")) {
                if (b.cargo.toLowerCase().includes("coordenador")) return +1;
                else return -1;
              }
            } else return a.nome.localeCompare(b.nome);
          }
        });
        this.loading++;
      });
    },
    async onSubmit() {
      this.form.nome.trim();
      this.form.cargo.trim();
      this.form.imagem.trim();
      try {
        await equipeService.addEquipe(this.form);
        this.$vs.notification({
          color: "success",
          title: "Adicionar Membro",
          text: "Membro adicionado com sucesso!",
        });
        this.getEquipe();
        this.componentKey++;
        this.$refs["modal-add-equipe"].hide();
      } catch (e) {
        this.$vs.notification({
          color: "danger",
          title: "Adicionar Membro",
          text: "Houve um erro ao tentar adicionar o novo membro",
        });
      }
    },
    resetForm() {
      this.form = {};
      this.$refs["modal-add-equipe"].hide();
    },
    async onDelete() {
      try {
        await equipeService.removeEquipe(this.removeId);
        this.$vs.notification({
          color: "success",
          title: "Remover Membro",
          text: "Membro removido com sucesso!",
        });
        this.getEquipe();
        this.$refs["modal-remove-equipe"].hide();
        this.$refs["modal-confirm-remove"].hide();
        this.componentKey++;
      } catch (e) {
        this.$vs.notification({
          color: "danger",
          title: "Remover Membro",
          text: "Houve um erro ao tentar remover o membro selecionado",
        });
      }
    },
  },
  created() {
    this.getEquipe();
    this.isLogged = JSON.parse(sessionStorage.getItem("isLogged"));
  },
};
</script>
<style>
#buttons-equipe {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 8px;
  float: right;
  width: 100%;
}
#buttons-equipe .btn-form {
  background-color: var(--secondary-color) !important;
  border-color: var(--secondary-color) !important;
  margin: 0 8px 0 0 !important;
}
/* #buttons-equipe .btn-form:first-of-type {
  margin-right: 8px !important;
} */
#buttons-equipe .btn-form:focus {
  background-color: var(--secondary-dark-color) !important;
  box-shadow: 0px 0px 1px 2px var(--secondary-light-color) !important;
}
#buttons-equipe .btn-form:hover {
  background-color: var(--secondary-dark-color) !important;
}

#carousel-mobile {
  display: none;
}
#carousel-medium {
  display: none;
}

#nossa-equipe {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 64px 0px 32px 0;
  background-color: #f2f2f2;
}
#nossa-equipe h6 {
  line-height: 145%;
}
#button-section {
  padding-top: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.a-button {
  display: inline-block;
  padding: 0.35em 1.2em;
  border: 0.1em solid var(--primary-color);
  margin: 0 0.3em 0.3em 0;
  border-radius: 0.12em;
  box-sizing: border-box;
  text-decoration: none;
  font-weight: 600 !important;
  color: var(--secondary-dark-color);
  background-color: #ffffff;
  text-align: center;
  transition: all 0.2s;
}

.a-button:hover {
  color: #ffffff;
  background-color: var(--secondary-dark-color);
  border: 0.1em solid var(--secondary-dark-color);
}

#dialog-equipe .card {
  margin-top: 16px;
}

@media screen and (max-width: 760px) {
  #nossa-equipe {
    padding: 32px 0 !important;
  }
  .title-section br {
    display: none !important;
  }
  .a-button {
    display: block;
    margin: 0.4em auto;
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
}

@media screen and (max-width: 1140px) and (min-width: 761px) {
  .title-section br {
    display: none !important;
  }
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
</style>
