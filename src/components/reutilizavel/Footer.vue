<template>
  <div id="rodapé">
    <div class="container">
      <div class="row m-0 justify-content-center">
        <div class="row m-0 justify-content-center" id="logos-rodapé">
          <a href="http://www.uefs.br/" target="_blank">
            <img
              src="../../assets/img/logo_uefs2.png"
              alt="logo"
              id="logo-rodapé-secundaria1"
            />
          </a>
          <a
            href="http://www.mpe.uefs.br/modules/conteudo/conteudo.php?conteudo=20"
            target="_blank"
          >
            <img src="../../assets/img/Logo.png" alt="logo" id="logo-rodapé" />
          </a>
          <a href="http://proex.uefs.br/" target="_blank">
            <img
              src="../../assets/img/proex_logo2.png"
              alt="logo"
              id="logo-rodapé-secundaria2"
            />
          </a>
        </div>
        <div class="row m-0 justify-content-center" style="padding-top: 8px">
          <h6>
            NUPEC | NÚCLEO DE ESTUDOS E PESQUISA SOBRE O CUIDAR/CUIDADO
          </h6>
          <p>
            Avenida Transnordestina, s/n - Novo Horizonte - CEP 44036-900 -
            Feira de Santana - Bahia
            <br />
            Telefone: 75 3161-8365 | Email: nupec@uefs.br
          </p>
        </div>

        <div class="row m-0 justify-content-center" style="padding-top: 8px">
          <small
            >Desenvolvido por
            <a href="https://github.com/romaiajr" target="_blank" id="developer"
              >Roberto Maia</a
            ></small
          >
        </div>
      </div>
    </div>
  </div>
</template>
<style>
#rodapé {
  border-top: 1px solid #dee2e6 !important;
  width: 100%;
  padding: 24px 0px;
  display: flex;
  align-items: center;
  text-align: center;
}
#logos-rodapé {
  display: flex;
  align-items: center;
}
#logo-rodapé {
  margin: 0 8px;
  display: block;
  height: 65px;
}
#logo-rodapé-secundaria1 {
  display: block;
  height: 35px;
}
#logo-rodapé-secundaria2 {
  padding-top: 7px;
  display: block;
  height: 35px;
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
  #logo-rodapé {
    width: auto;
    height: 45px;
  }
  #logo-rodapé-secundaria1,
  #logo-rodapé-secundaria2 {
    width: auto;
    height: 30px;
  }
}
</style>
