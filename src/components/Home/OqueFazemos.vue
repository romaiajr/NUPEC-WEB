<template>
  <div id="materiais" ref="materiais">
    <div class="container">
      <div class="row m-0">
        <img src="../../assets/img/box.png" id="box" />
        <div class="col-12 col-md-3">
          <h2 class="title-section">O QUE <br />FAZEMOS</h2>
        </div>
        <div class="col-0 col-md-1"></div>
        <div class="col-12 col-md-8">
          <h5>
            O NUPEC trabalha com estudos e intervenções que tem como eixos a
            promoção da saúde, proteção específica, reabilitação e cura, com
            enfoque no adoecimento agudo e crônico no contexto individual,
            familiar e de grupos, tendo como recorte os itinerários terapêuticos
            e as dimensões da produção do cuidado nos campos da clínica, da
            saúde coletiva e da saúde mental, privilegiando o trabalho com
            narrativas autobiográficas.
          </h5>
        </div>
      </div>
      <div class="row m-0" id="card-container">
        <div class="col-md-3 col-sm-4">
          <div class="wrimagecard wrimagecard-topimage">
            <router-link to="/materias/artigos">
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
            </router-link>
          </div>
        </div>
        <div class="col-md-3 col-sm-4">
          <div class="wrimagecard wrimagecard-topimage">
            <router-link to="/">
              <div class="wrimagecard-topimage_header">
                <center>
                  <i class="bx bx-book" style="color:#1fa67b"></i>
                </center>
              </div>
              <div class="wrimagecard-topimage_title">
                <h6>Livros</h6>
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-md-3 col-sm-4">
          <div class="wrimagecard wrimagecard-topimage">
            <router-link to="/">
              <div class="wrimagecard-topimage_header">
                <center>
                  <i class="fa fa-bookmark-o" style="color:#dc3546"> </i>
                </center>
              </div>
              <div class="wrimagecard-topimage_title">
                <h6>Cap. Livro</h6>
              </div>
            </router-link>
          </div>
        </div>
        <div class="col-md-3 col-sm-4">
          <div class="wrimagecard wrimagecard-topimage">
            <router-link to="/">
              <div class="wrimagecard-topimage_header">
                <center>
                  <i class="fa  fa-plus-square-o" style="color:#ff9a00"> </i>
                </center>
              </div>
              <div class="wrimagecard-topimage_title">
                <h6>Atividades Extras</h6>
              </div>
            </router-link>
          </div>
        </div>
      </div>
      <div id="button-section">
        <router-link to="/materiais">
          <button class="a-button">
            <h6>VEJA TODOS OS MATERIAIS</h6>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<style>
a {
  text-decoration: none !important;
  color: #525c65 !important;
}
#materiais {
  box-sizing: border-box;
  padding: 32px 0px;
  display: flex;
  align-items: center;
  width: 100%;
  height: auto;
  background-color: white;
}
#card-container {
  padding-top: 24px;
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

@media screen and (max-width: 760px) {
  #materiais {
    padding-bottom: 16px;
  }
  #materiais br {
    display: none !important;
  }
  .wrimagecard-topimage_title h6 {
    font-size: 21px !important;
  }
  .a-button {
    display: block;
    margin: 0.4em auto;
  }
}

@media screen and (max-width: 1140px) and (min-width: 761px) {
  #materiais br {
    display: none !important;
  }
}
</style>
