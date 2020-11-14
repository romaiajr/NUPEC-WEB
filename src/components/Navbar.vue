<template>
    <div>
    <b-navbar toggleable="lg" class="navbar">
      <div class="container">
    <b-navbar-brand href="#"><img id="logo" src="../assets/Logo.png"/></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item>Nossa História</b-nav-item>
        <b-nav-item-dropdown text="Materiais" right>
          <b-dropdown-item href="#">Artigos</b-dropdown-item>
          <b-dropdown-item href="#">Livros</b-dropdown-item>
          <b-dropdown-item href="#">Atividades Extras</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item>Nossa Equipes</b-nav-item>
      </b-navbar-nav>
    </b-collapse>
    </div>
  </b-navbar>
</div>
</template>

<script>
    export default {
        data:() => ({
        active: 'guide',
        isHover: false
        }),

        methods:() => ({
        })    
    }
</script>

<style>
    .navbar{
        background-color: var(--light-color);
    }

    #logo{
        width: 150px;
    }
    .nav-link{
        color: black !important;
        font-size: 21px;
        padding-left: 8px !important;
    }
    .nav-link:hover{
        color: var(--secondary-dark-color) !important;
        border-bottom: 2px solid var(--primary-dark-color);
    }

    .dropdown-item:hover{
        color: white !important;
        background-color: var(--primary-dark-color);
    }
    @media screen and (max-width: 600px) {
        #logo{
            width: 90px;
        }
        .nav-link{
            font-family: IBM Plex Sans;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 150%;
        }
        .dropdown-item{
            font-family: IBM Plex Serif;
            font-style: normal;
            font-weight: normal;
            font-size: 12px;
            line-height: 150%;
        }
    }
</style>