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
        id="carousel"
        style="width:100%;margin:20px auto;height:400px"
      >
        <slider ref="slider" :options="options">
          <!-- slideritem wrapped package with the components you need -->
          <!-- <slideritem
            v-for="(item, index) in someList"
            :key="index"
            :style="item.style"
            >{{ item.html }}</slideritem
          > -->
          <slideritem>
            <div class="row">
              <div class="col-md-4 col-sm-6">
                <div class="card">
                  <img
                    class="card-img-top"
                    src="http://placehold.it/400x300/f44242/fff"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Nome 1</h5>
                    <h6 class="card-text">
                      Cargo
                    </h6>
                  </div>
                </div>
              </div>
              <div class="col-md-4 col-sm-6">
                <div class="card">
                  <img
                    class="card-img-top img-fluid"
                    src="http://placehold.it/800x600/f44242/fff"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Nome 1</h5>
                    <h6 class="card-text">
                      Cargo
                    </h6>
                  </div>
                </div>
              </div>
              <!-- <div class="col-md-4 col-sm-6">
                <div class="card">
                  <img
                    class="card-img-top img-fluid"
                    src="http://placehold.it/800x600/f44242/fff"
                    alt="Card image cap"
                  />
                  <div class="card-body">
                    <h5 class="card-title">Nome 1</h5>
                    <h6 class="card-text">
                      Cargo
                    </h6>
                  </div>
                </div>
              </div> -->
            </div>
          </slideritem>
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
            <div class="col-6 col-lg-4">
              <div class="card">
                <img
                  class="card-img-top img-fluid"
                  src="http://placehold.it/800x600/f44242/fff"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h6 class="card-title">Nome 1</h6>
                  <p class="card-text">
                    Cargo
                  </p>
                </div>
              </div>
            </div>
            <div class="col-6 col-lg-4">
              <div class="card">
                <img
                  class="card-img-top img-fluid"
                  src="http://placehold.it/800x600/f44242/fff"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h6 class="card-title">Nome 1</h6>
                  <p class="card-text">
                    Cargo
                  </p>
                </div>
              </div>
            </div>
            <div class="col-6 col-lg-4">
              <div class="card">
                <img
                  class="card-img-top img-fluid"
                  src="http://placehold.it/800x600/f44242/fff"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h6 class="card-title">Nome 1</h6>
                  <p class="card-text">
                    Cargo
                  </p>
                </div>
              </div>
            </div>
            <div class="col-6 col-lg-4">
              <div class="card">
                <img
                  class="card-img-top img-fluid"
                  src="http://placehold.it/800x600/f44242/fff"
                  alt="Card image cap"
                />
                <div class="card-body">
                  <h6 class="card-title">Nome 1</h6>
                  <p class="card-text">
                    Cargo
                  </p>
                </div>
              </div>
            </div>
          </div>
        </vs-dialog>
      </div>
    </div>
  </div>
</template>
<script>
import { slider, slideritem } from "vue-concise-slider";
export default {
  components: {
    slider,
    slideritem,
  },
  data: () => ({
    equipeDialog: false,
    someList: [
      {
        html: "slide1",
        style: {
          background: "#1bbc9b",
        },
      },
      {
        html: "slide2",
        style: {
          background: "#4bbfc3",
        },
      },
      {
        html: "slide3",
        style: {
          background: "#7baabe",
        },
      },
    ],
    //Slider configuration [obj]
    options: {
      currentPage: 0,
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
#nossa-equipe {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 64px 0px 32px 0;
  background-color: #f2f2f2;
}
.card-body {
  text-align: center;
}
.card-title {
  color: black;
}
.card-text {
  color: black;
}
#carousel-section {
  padding-top: 24px;
}
#carousel-cards-mobile {
  display: none;
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
  /* #carousel-cards {
    display: none !important;
  } */
  /* #carousel-cards-mobile {
    display: block !important;
  } */
}

@media screen and (max-width: 1140px) and (min-width: 761px) {
  #nossa-equipe br {
    display: none !important;
  }
  /* #carousel-cards {
    display: none !important;
  } */
  /* #carousel-cards-mobile {
    display: block !important;
  } */
}
</style>
