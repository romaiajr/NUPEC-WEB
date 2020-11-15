<template>
  <div>
    <Navbar/>
    <div class="content-home">
    <Hero/>
    <div id="quem-somos" ref="quem-somos">
        <div class="container">
            <div class="row m-0">
                <img src="../assets/box.png" id="box"/>
                <div class="col-12 col-md-3">
                    <h2 class="title-section">QUEM <br/>SOMOS</h2>
                </div>
                <div class="col-0 col-md-1"></div>
                 <div class="col-12 col-sm-8">
                    <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </h5>
                </div>
            </div>
        </div>
    </div>
    <div id="materiais" ref="materiais">
        <div class="container">
             <div class="row m-0">
                <img src="../assets/box.png" id="box"/>
                <div class="col-12 col-md-3">
                    <h2 class="title-section">O QUE <br/>FAZEMOS</h2>
                </div>
                <div class="col-0 col-md-1"></div>
                <div class="col-12 col-sm-8">
                    <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </h5>
                </div>
            </div>
        </div>
    </div>
    <div id="nossa-equipe" ref="nossa-equipe">
        <div class="container">
            <div class="row m-0">
                <img src="../assets/box.png" id="box"/>
                <div class="col-12 col-md-3">
                    <h2 class="title-section">NOSSA <br/>EQUIPE</h2>
                </div>
                 <div class="col-0 col-md-1"></div>
                <div class="col-12 col-sm-8">
                    <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </h5>
                </div>
            </div>
        </div>
    </div>
    <div id="social-media">
    </div>
    <div id="rodapé">
        <div class="container">
            <div class="row m-0 justify-content-center">
                <img src="../assets/Logo.png" alt="logo" id="logo-rodapé"/>
                <div class="row m-0 justify-content-center" style="padding-top: 8px">
                    <h6>NUPEC | NÚCLEO DE ESTUDOS E PESQUISA SOBRE O CUIDAR/CUIDADO</h6>
                    <p>Avenida Transnordestina, s/n - Novo Horizonte - CEP 44036-900 - Feira de Santana - Bahia
                    <br/>
                    Tel: 75 99876-5432 |  Email: nupec@uefs.br</p>
                </div>
                <div class="row m-0 justify-content-center" style="padding-top: 8px">
                    <small>Desenvolvido por <a href="https://github.com/romaiajr" id="developer">Roberto Maia</a></small>
                </div>
            </div>
        </div>
    </div>
    </div>
  </div>
</template>

<script>
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
export default {
  components: {
    Navbar,
    Hero,
  },
  methods:{
    scrollMeTo(refName) {
        var element = this.$refs[refName];
        var top = element.offsetTop;
        window.scrollTo(0, top-80);
    }
  }

}
</script>
<style>

    /* .content-home{
        padding-top:90px;
    } */
    #box{
        position: absolute;
        left: 0;
        width:50px;
    }
    .title-section {
        /* text-align: right; */
        color: var(--secondary-dark-color) !important;
    }
    #quem-somos{
        box-sizing: border-box;
        display: flex;
        align-items: center;
        width: 100%;
        height: 280px;
        background-color: #f2f2f2;
    }
    
    #materiais{
        box-sizing: border-box;
        display: flex;
        align-items: center;
        width: 100%;
        height: 320px;
        background-color: white;
    }
    #nossa-equipe{
        box-sizing: border-box;
        display: flex;
        align-items: center;
        width: 100%;
        height: 280px;
        background-color: #f2f2f2;
    }
    #social-media{
        box-sizing: border-box;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        height: 80px;
        background-color: var(--secondary-color);
    }
    #rodapé{
        width: 100%;
        height: 240px;
        display: flex;
        align-items: center;
        text-align: center;
    }

    #logo-rodapé{
        display: block;
        height: 60px;
    }

    #developer{
        text-decoration: none;
        color: black;
    }
    #developer,
    #developer:after,
    #developer:before {
        transition: all .5s;    
    }
    #developer:hover{
        color: var(--secondary-dark-color) !important;
    }
    /* stroke */
    #developer
    {
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
        content: '.';
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
        content: '.';
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
        #box{
            width: 25px;
        }
        h2{
            font-size: 32px !important;
        }
        h5{
            font-size: 16px !important;
            line-height: 150% !important;
        }
        h6{
            font-size: 12px !important;
            line-height: 150% !important;
        }
        p{
            font-size: 12px !important;
            line-height: 150% !important;
        }
        small{
            font-size: 10px !important;
        }
        #logo-rodapé{
            width: 30% !important;
            height: 50px;
        }
        #materiais br, #quem-somos br, #nossa-equipe br{
            display: none !important;
        }
    }
    @media screen and (max-width: 1140px) and (min-width: 761px){
        #box{
            width: 35px;
        }
        h2{
            font-size: 45px !important;
        }
        h5{
            font-size: 20px !important;
            line-height: 150% !important;
        }
        h6{
            font-size: 16px !important;
            line-height: 150% !important;
        }
        p{
            font-size: 16px !important;
            line-height: 150% !important;
        }
        small{
            font-size: 12px !important;
        }
        #materiais br, #quem-somos br, #nossa-equipe br{
            display: none !important;
        }
    }
</style>