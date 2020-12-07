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
            <!-- O NUPEC trabalha com estudos e intervenções que tem como eixos a
            promoção da saúde, proteção específica, reabilitação e cura, com
            enfoque no adoecimento agudo e crônico no contexto individual,
            familiar e de grupos, tendo como recorte os itinerários terapêuticos
            e as dimensões da produção do cuidado nos campos da clínica, da
            saúde coletiva e da saúde mental, privilegiando o trabalho com
            narrativas autobiográficas. -->
            O NUPEC trabalha com estudos e intervenções voltados para a promoção
            da saúde, proteção específica, reabilitação e cura.
          </h5>
        </div>
      </div>
      <div class="row m-0" id="card-container">
        <div class="col-md-3 col-sm-4">
          <CardMaterial
            link="/materiais/iniciacao-cientifica"
            icone="bx bx-atom"
            cor="color:RGB(59, 89, 153)"
            nome="Iniciação Científica"
          >
          </CardMaterial>
        </div>
        <div class="col-md-3 col-sm-4">
          <CardMaterial
            link="/materiais/projetos-de-extensao"
            icone="fa fa-laptop"
            cor="color:#dc3546"
            nome="Projetos de Extensão"
          >
          </CardMaterial>
        </div>
        <div class="col-md-3 col-sm-4">
          <CardMaterial
            link="/materiais/artigos"
            icone="fa fa-file-text-o"
            cor="color:RGB(59, 89, 153)"
            nome="Artigos"
          >
          </CardMaterial>
        </div>
        <div class="col-md-3 col-sm-4">
          <CardMaterial
            link="/materiais/livros"
            icone="bx bx-book"
            cor="color:#1fa67b"
            nome="Livros"
          >
          </CardMaterial>
        </div>
      </div>
      <div id="button-section">
        <router-link to="/materiais" exact>
          <button class="a-button">
            <h6>VEJA TODOS OS MATERIAIS</h6>
          </button>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import CardMaterial from "../reutilizavel/CardMaterial";
export default {
  components: { CardMaterial: CardMaterial },
};
</script>
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
