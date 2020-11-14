<template>
  <div>
    <Navbar/>
    <Hero/>
    <!-- <div class="row">
        <div id="quem-somos">
            <div class="container">
                <h1>Quem Somos</h1>
            </div>
        </div>
    </div>
    <div class="row">
        <div id="materiais">
            <div class="container">
                <h1>Materiais</h1>
            </div>
        </div>
    </div>
    <div class="row">
        <div id="nossa-equipe">
            <div class="container">
                <h1>Nossa Equipe</h1>
            </div>
        </div>
    </div>    -->
  </div>
  
</template>

<script>
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
export default {
  components: {
    Navbar,
    Hero,
  }
}
</script>
<style>
    #quem-somos{
        height: 500px;
        background-color: #f2f2f2;
    }
    #materiais{
        height: 500px;
        background-color: white;
    }
    #nossa-equipe{
        height: 500px;
        background-color: var(--light-color);
    }
</style>