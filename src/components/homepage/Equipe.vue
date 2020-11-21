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
          <h5>
            Nossa equipe é formada por estudantes e professores da Universidade
            Estadual de Feira de Santana.
          </h5>
        </div>
      </div>
      <div
        class="row m-0"
        id="carousel-desktop"
        style="width:100%;margin:10px auto;height: 450px"
      >
        <slider ref="slider-desktop" :options="optionsDesktop">
          <!-- slideritem wrapped package with the components you need -->
          <slideritem
            v-for="(item, index) in someList"
            :key="index"
            :style="styleDesktop"
            ><CardEquipe
              imagem="https://avatars0.githubusercontent.com/u/59492898?s=460&u=dc1a72e0302a1b74dd9b429eedb48e078a1684ea&v=4"
              nome="Roberto Maia"
              cargo="Desenvolvedor"
          /></slideritem>
          <!-- Customizable loading -->
          <div slot="loading">loading...</div>
        </slider>
      </div>
      <div
        class="row m-0"
        id="carousel-mobile"
        style="width:100%;margin:10px auto;height: 500px"
      >
        <slider ref="slider-desktop" :options="optionsMobile">
          <!-- slideritem wrapped package with the components you need -->
          <slideritem
            v-for="(item, index) in someList"
            :key="index"
            :style="styleMobile"
            ><CardEquipe
              imagem="https://avatars0.githubusercontent.com/u/59492898?s=460&u=dc1a72e0302a1b74dd9b429eedb48e078a1684ea&v=4"
              nome="Roberto Maia"
              cargo="Desenvolvedor"
          /></slideritem>
          <!-- Customizable loading -->
          <div slot="loading">loading...</div>
        </slider>
      </div>
      <div
        class="row m-0"
        id="carousel-medium"
        style="width:100%;margin:10px auto;height: 450px"
      >
        <slider ref="slider-desktop" :options="optionsMobile">
          <!-- slideritem wrapped package with the components you need -->
          <slideritem
            v-for="(item, index) in someList"
            :key="index"
            :style="styleMedium"
            ><CardEquipe
              imagem="https://avatars0.githubusercontent.com/u/59492898?s=460&u=dc1a72e0302a1b74dd9b429eedb48e078a1684ea&v=4"
              nome="Roberto"
              cargo="Desenvolvedor"
          /></slideritem>
          <!-- Customizable loading -->
          <div slot="loading">loading...</div>
        </slider>
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
          <div class="row">
            <div class="col-6 col-lg-6">
              <CardEquipe
                imagem="https://avatars0.githubusercontent.com/u/59492898?s=460&u=dc1a72e0302a1b74dd9b429eedb48e078a1684ea&v=4"
                nome="Roberto Maia"
                cargo="Desenvolvedor"
              />
            </div>
          </div>
        </vs-dialog>
      </div>
    </div>
  </div>
</template>
<script>
import { slider, slideritem } from "vue-concise-slider";
import CardEquipe from "../reutilizavel/CardEquipe";
export default {
  components: {
    slider,
    slideritem,
    CardEquipe,
  },
  data: () => ({
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
    someList: [
      {
        html: "slide1",
      },
      {
        html: "slide2",
      },
      {
        html: "slide3",
      },
      {
        html: "slide4",
      },
      {
        html: "slide5",
      },
    ],
    //Slider configuration [obj]
    optionsDesktop: {
      currentPage: 0,
      slidesToScroll: 2,
      thresholdDistance: "50",
    },
    optionsMobile: {
      currentPage: 0,
      slidesToScroll: 1,
      thresholdDistance: "50",
    },
  }),
  methods: {
    openEquipe() {
      this.equipeDialog = true;
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

#nossa-equipe {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 64px 0px 32px 0;
  background-color: #f2f2f2;
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
  #nossa-equipe br {
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
  #nossa-equipe br {
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
