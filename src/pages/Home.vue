<template>
  <div>
    <Navbar />
    <div class="content-home">
      <Hero />
      <div id="quem-somos" ref="quem-somos">
        <div class="container">
          <div class="row m-0">
            <img src="../assets/box.png" id="box" />
            <div class="col-12 col-md-3">
              <h2 class="title-section">QUEM <br />SOMOS</h2>
            </div>
            <div class="col-0 col-md-1"></div>
            <div class="col-12 col-md-8">
              <h5>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div id="materiais" ref="materiais">
        <div class="container">
          <div class="row m-0">
            <img src="../assets/box.png" id="box" />
            <div class="col-12 col-md-3">
              <h2 class="title-section">O QUE <br />FAZEMOS</h2>
            </div>
            <div class="col-0 col-md-1"></div>
            <div class="col-12 col-md-8">
              <h5>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </h5>
            </div>
          </div>
          <div class="row m-0" id="card-container">
            <div class="col-md-3 col-sm-4">
              <div class="wrimagecard wrimagecard-topimage">
                <a href="#">
                  <div class="wrimagecard-topimage_header">
                    <center>
                      <i
                        class="fa fa-file-text-o"
                        style="color:RGB(59, 89, 153)"
                      ></i>
                    </center>
                    <!-- fa-pencil-square-o -->
                  </div>
                  <div class="wrimagecard-topimage_title">
                    <h6>Artigos</h6>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-3 col-sm-4">
              <div class="wrimagecard wrimagecard-topimage">
                <a href="#">
                  <div class="wrimagecard-topimage_header">
                    <center>
                      <i class="bx bx-book" style="color:#1fa67b"></i>
                    </center>
                  </div>
                  <div class="wrimagecard-topimage_title">
                    <h6>Livros</h6>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-3 col-sm-4">
              <div class="wrimagecard wrimagecard-topimage">
                <a href="#">
                  <div class="wrimagecard-topimage_header">
                    <center>
                      <i class="fa fa-bookmark-o" style="color:#dc3546"> </i>
                    </center>
                  </div>
                  <div class="wrimagecard-topimage_title">
                    <h6>Cap. Livro</h6>
                  </div>
                </a>
              </div>
            </div>
            <div class="col-md-3 col-sm-4">
              <div class="wrimagecard wrimagecard-topimage">
                <a href="#">
                  <div class="wrimagecard-topimage_header">
                    <center>
                      <i class="fa  fa-plus-square-o" style="color:#ff9a00">
                      </i>
                    </center>
                  </div>
                  <div class="wrimagecard-topimage_title">
                    <h6>Atividades Extras</h6>
                  </div>
                </a>
              </div>
            </div>
            <!-- <div class="col-md-3 col-sm-4">
                    <div class="wrimagecard wrimagecard-topimage">
                        <a href="#">
                        <div class="wrimagecard-topimage_header">
                            <center><i class="fa fa-info-circle" style="color:#fabc09"> </i></center>
                        </div>
                        <div class="wrimagecard-topimage_title">
                            <h5>Information</h5>
                        </div>
                        </a>
                    </div>
                </div> -->
          </div>
        </div>
      </div>
    </div>
    <div id="nossa-equipe" ref="nossa-equipe">
      <div class="container">
        <div class="row m-0">
          <img src="../assets/box.png" id="box" />
          <div class="col-12 col-md-3">
            <h2 class="title-section">NOSSA <br />EQUIPE</h2>
          </div>
          <div class="col-0 col-md-1"></div>
          <div class="col-12 col-md-8">
            <h5>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </h5>
          </div>
        </div>
        <div id="carousel-section">
          <div class="row m-0" id="carousel-cards">
            <div class="col-sm-12">
              <div id="inam" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="container">
                      <div class="row">
                        <div class="col-12 col-lg-4">
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
                        <div class="col-12 col-lg-4">
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
                        <div class="col-sm-12 col-lg-4">
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
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="container">
                      <div class="row">
                        <div class="col-12 col-lg-4">
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
                        <div class="col-12 col-lg-4">
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
                        <div class="col-sm-12 col-lg-4">
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
                      </div>
                    </div>
                  </div>
                  <a
                    href="#inam"
                    class="carousel-control-prev"
                    data-slide="prev"
                  >
                    <span class="carousel-control-prev-icon"></span>
                  </a>
                  <a
                    href="#inam"
                    class="carousel-control-next"
                    data-slide="next"
                  >
                    <span class="carousel-control-next-icon"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="row m-0" id="carousel-cards-mobile">
            <div class="col-sm-12">
              <div id="inam1" class="carousel slide" data-ride="carousel">
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <div class="container">
                      <div class="row">
                        <div class="col-sm-12">
                          <div class="card">
                            <img
                              class="card-img-top img-fluid"
                              src="http://placehold.it/800x600/f44242/fff"
                              alt="Card image cap"
                            />
                            <div class="card-body">
                              <h4 class="card-title">Nome 1</h4>
                              <p class="card-text">
                                Cargo
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="carousel-item">
                    <div class="container">
                      <div class="row">
                        <div class="col-12">
                          <div class="card">
                            <img
                              class="card-img-top img-fluid"
                              src="http://placehold.it/800x600/f44242/fff"
                              alt="Card image cap"
                            />
                            <div class="card-body">
                              <h4 class="card-title">Nome</h4>
                              <h5 class="card-text">
                                Cargo
                              </h5>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="#inam1"
                  class="carousel-control-prev"
                  data-slide="prev"
                >
                  <span class="carousel-control-prev-icon"></span>
                </a>
                <a
                  href="#inam1"
                  class="carousel-control-next"
                  data-slide="next"
                >
                  <span class="carousel-control-next-icon"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="social-media">
      <div class="container">
        <div id="buttons_social">
          <vs-button icon color="facebook">
            <i class="bx bxl-facebook-square"></i>
          </vs-button>
          <vs-button
            icon
            href="https://www.youtube.com/channel/UCXw_d0NO8M11GlB1-tEFgtQ"
            blank
            color="youtube"
          >
            <i class="bx bxl-youtube"></i>
          </vs-button>
          <vs-button icon color="slack">
            <i class="bx bxl-instagram"></i>
          </vs-button>
        </div>
      </div>
    </div>
    <div id="rodapé">
      <div class="container">
        <div class="row m-0 justify-content-center">
          <img src="../assets/Logo.png" alt="logo" id="logo-rodapé" />
          <div class="row m-0 justify-content-center" style="padding-top: 8px">
            <h6>NUPEC | NÚCLEO DE ESTUDOS E PESQUISA SOBRE O CUIDAR/CUIDADO</h6>
            <p>
              Avenida Transnordestina, s/n - Novo Horizonte - CEP 44036-900 -
              Feira de Santana - Bahia
              <br />
              Tel: 75 99876-5432 | Email: nupec@uefs.br
            </p>
          </div>
          <div class="row m-0 justify-content-center" style="padding-top: 8px">
            <small
              >Desenvolvido por
              <a href="https://github.com/romaiajr" id="developer"
                >Roberto Maia</a
              ></small
            >
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
export default {
  components: {
    Navbar,
    Hero,
  },
  methods: {
    scrollMeTo(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top - 80);
    },
  },
};
</script>
<style>
#card-container {
  padding-top: 24px;
}
.card-body {
  text-align: center;
}
#carousel-section {
  padding-top: 24px;
}
#carousel-cards-mobile {
  display: none;
}
.carousel-control-next-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='black' viewBox='0 0 8 8'%3E%3Cpath d='M2.75 0l-1.5 1.5 2.5 2.5-2.5 2.5 1.5 1.5 4-4-4-4z'/%3E%3C/svg%3E");
}

.carousel-control-prev-icon {
  background-image: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='black' viewBox='0 0 8 8'%3E%3Cpath d='M5.25 0l-4 4 4 4 1.5-1.5-2.5-2.5 2.5-2.5-1.5-1.5z'/%3E%3C/svg%3E");
}
.wrimagecard {
  margin-top: 0;
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
  background: #fff;
  box-shadow: 12px 15px 20px 0px rgba(46, 61, 73, 0.15);
  border-radius: 4px;
  transition: all 0.3s ease;
}
.wrimagecard .fa,
.wrimagecard .bx {
  position: relative;
  font-size: 70px;
}
.wrimagecard-topimage_header {
  padding: 20px;
}
a.wrimagecard:hover,
.wrimagecard-topimage:hover {
  box-shadow: 2px 4px 8px 0px rgba(46, 61, 73, 0.2);
}
.wrimagecard-topimage a {
  width: 100%;
  height: 100%;
  display: block;
}
.wrimagecard-topimage_title {
  padding: 8px 24px;
  height: 80px;
  position: relative;
}
.wrimagecard-topimage a {
  border-bottom: none;
  text-decoration: none;
  color: #525c65;
  transition: color 0.3s ease;
}

#box {
  position: absolute;
  left: 0;
  width: 50px;
}
.title-section {
  /* text-align: right; */
  color: var(--secondary-dark-color) !important;
}
#quem-somos {
  padding: 64px 0px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #f2f2f2;
}

#materiais {
  box-sizing: border-box;
  padding: 64px 0px;
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: white;
}
#nossa-equipe {
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  padding: 64px 0px;
  background-color: #f2f2f2;
}
#social-media {
  box-sizing: border-box;
  width: 100%;
  padding: 12px 0px;
  background: var(--secondary-light-color);
}
#buttons_social {
  display: flex;
  align-items: center;
  justify-content: center;
}
#buttons_social .bx {
  font-size: 48px !important;
}
#buttons_social button {
  margin: 0px 8px !important;
}
#rodapé {
  width: 100%;
  padding: 24px 0px;
  display: flex;
  align-items: center;
  text-align: center;
}

#logo-rodapé {
  display: block;
  height: 60px;
}

#developer {
  text-decoration: none;
  color: black;
}
#developer,
#developer:after,
#developer:before {
  transition: all 0.5s;
}
#developer:hover {
  color: var(--secondary-dark-color) !important;
}
/* stroke */
#developer {
  position: relative;
}
#developer:after,
#developer:after {
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
#developer:hover:after {
  width: 100%;
}

#developer {
  transition: all 1s;
}

#developer:after {
  text-align: left;
  content: ".";
  margin: 0;
  opacity: 0;
}
#developer:hover {
  color: var(--primary-dark-color);
  z-index: 1;
}
#developer:hover:after {
  z-index: -10;
  animation: fill 1s forwards;
  opacity: 1;
}

@media screen and (max-width: 760px) {
  #box {
    width: 15px;
  }
  h2 {
    font-size: 32px !important;
  }
  h5 {
    font-size: 16px !important;
    line-height: 150% !important;
  }
  h6 {
    font-size: 12px !important;
    line-height: 150% !important;
  }
  p {
    font-size: 12px !important;
    line-height: 150% !important;
  }
  small {
    font-size: 10px !important;
  }
  #logo-rodapé {
    width: 30% !important;
    height: 50px;
  }
  #materiais {
    padding-bottom: 16px;
  }
  #materiais br,
  #quem-somos br,
  #nossa-equipe br {
    display: none !important;
  }
  .wrimagecard-topimage_title h6 {
    font-size: 21px !important;
  }
  #buttons_social .bx {
    font-size: 36px !important;
  }
  #buttons_social button {
    margin: 0 8px !important;
  }
  #carousel-cards {
    display: none !important;
  }
  #carousel-cards-mobile {
    display: inline;
  }
}
@media screen and (max-width: 1140px) and (min-width: 761px) {
  #box {
    width: 25px;
  }
  h2 {
    font-size: 45px !important;
  }
  h5 {
    font-size: 20px !important;
    line-height: 150% !important;
  }
  h6 {
    font-size: 16px !important;
    line-height: 150% !important;
  }
  p {
    font-size: 16px !important;
    line-height: 150% !important;
  }
  small {
    font-size: 12px !important;
  }
  #materiais br,
  #quem-somos br,
  #nossa-equipe br {
    display: none !important;
  }
  #carousel-cards {
    display: none !important;
  }
  #carousel-cards-mobile {
    display: block !important;
  }
}
</style>
