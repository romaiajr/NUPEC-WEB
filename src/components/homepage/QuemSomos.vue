<template>
  <div id="quem-somos" ref="quem-somos">
    <div class="container">
      <div class="row m-0">
        <img src="../../assets/img/box.png" id="box" />
        <div class="col-12 col-md-3">
          <h2 class="title-section">QUEM <br />SOMOS</h2>
        </div>
        <div class="col-0 col-md-1"></div>
        <div class="col-12 col-md-8">
          <h5>
            <!-- O Núcleo Integrado de Estudos e Pesquisas sobre o Cuidar/Cuidado foi
            criado em 2010 com o objetivo de ampliar a discussão acerca do
            cuidado no processo saúde-doença do indivíduo, família e grupos da
            comunidade, a partir de um diálogo com referenciais
            teórico-metodológicos das ciências sociais e humanas e da saúde
            coletiva. -->
            O Núcleo Integrado de Estudos e Pesquisas sobre o Cuidar/Cuidado
            (NUPEC) foi criado em 2010 com o objetivo de ampliar a discussão
            acerca do cuidado no processo saúde-doença.
          </h5>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
#quem-somos {
  padding: 32px 0px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: #f2f2f2;
}
@media screen and (max-width: 760px) {
  #quem-somos br {
    display: none;
  }
  #carousel-cards {
    display: none !important;
  }
  #carousel-cards-mobile {
    display: inline;
  }
}
@media screen and (max-width: 1140px) and (min-width: 761px) {
  #quem-somos br {
    display: none;
  }
  #carousel-cards {
    display: none !important;
  }
  #carousel-cards-mobile {
    display: inline;
  }
}
</style>
