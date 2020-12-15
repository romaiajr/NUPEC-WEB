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
          <h6>
            <!-- O Núcleo de Estudos e Pesquisas sobre o Cuidar/Cuidado (NUPEC) foi
            fundado na Universidade Estadual de Feira de Santana vinculado à
            Pró-Reitoria de Extensão no ano de 2005. O objetivo do núcleo é
            promover um foro de estudos que reúna professores, enfermeiros,
            estudantes da graduação e pós-graduação em enfermagem e outros
            cursos interessados em aprofundar o conhecimento acerca do
            cuidar/cuidado em saúde. -->
            O Núcleo de Estudos e Pesquisas sobre o Cuidar/Cuidado (NUPEC) foi
            criado em 2005 com o objetivo de formar um foro de estudos que reúna
            docentes pesquisadoras(es), enfermeiros(as), estudantes de graduação
            e pós-graduação em enfermagem e outros cursos interessados em
            aprofundar seu conhecimento acerca do cuidar/cuidado em saúde e na
            enfermagem. Está vinculado ao Departamento de Saúde e Pró-Reitoria
            de Extensão da UEFS.
          </h6>
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
#quem-somos h6 {
  line-height: 145%;
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
