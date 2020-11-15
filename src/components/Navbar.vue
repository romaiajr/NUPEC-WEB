<template>
    <div>
    <b-navbar toggleable="lg" class="navbar" fixed="top">
      <div class="container">
    <b-navbar-brand href="#"><img id="logo-nav" src="../assets/Logo.png"/></b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item href="#quem-somos">Quem Somos</b-nav-item>
        <b-nav-item-dropdown text="Materiais" right id="item-dropdown">
          <b-dropdown-item href="#">Artigos</b-dropdown-item>
          <b-dropdown-item href="#">Livros</b-dropdown-item>
          <b-dropdown-item href="#">Atividades Extras</b-dropdown-item>
        </b-nav-item-dropdown>
        <b-nav-item href="#nossa-equipe">Nossa Equipe</b-nav-item>
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
        box-shadow: 0 0px 10px rgba(0, 0, 0, .2);
    }

    #logo-nav{
        width: 150px;
    }
    .nav-link{
        text-transform: uppercase;
        color: black !important;
        font-weight: 600;
        /* font-size: 21px; */
    }
    .nav-link,
    .nav-link:after,
    .nav-link:before {
        transition: all .5s;    
    }
    .nav-link:hover{
        color: var(--secondary-dark-color) !important;
    }
    /* stroke */
    .nav-link
    {
        position: relative;
    }
    .nav-link:after,
    .nav-link:after {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 0%;
        content: '.';
        color: transparent;
        background: var(--primary-dark-color);
        height: 4px !important;
    }
    .nav-link:hover:after {
        width: 100%;
    }

    .nav-link {
        transition: all 1s;
    }

    .nav-link:after {
        text-align: left;
        content: '.';
        margin: 0;
        opacity: 0;
    }
    .nav-link:hover {
        color: var(--primary-dark-color);
        z-index: 1;
    }
    .nav-link:hover:after {
        z-index: -10;
        animation: fill 1s forwards;
        opacity: 1;
    }
    .dropdown:hover .dropdown-menu {
        display: block;
    } 

    /* DROPDOWN */
    .dropdown-item,
    .dropdown-item:after,
    .dropdown-item:before {
        transition: all .5s;    
    }
    .dropdown-item:hover{
        color: white !important;
    }

    .dropdown-item{
        position: relative;
    }
     .dropdown-item:after,
    .dropdown-item:after {
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 0%;
        content: '.';
        color: transparent;
        background: var(--primary-dark-color);
        height: 100% ;
    }
     .dropdown-item:hover:after {
        width: 100%;
    }

    /* .dropdown-item {
        transition: all 1s;
    } */

    .dropdown-item:after {
        text-align: left;
        content: '.';
        margin: 0;
        opacity: 0;
    }
    .dropdown-item:hover {
        color: var(--primary-dark-color);
        z-index: 1;
    }
    .dropdown-item:hover:after {
        z-index: -10;
        animation: fill 1s forwards;
        opacity: 1;
    }
/* 
    .dropdown-item:hover{
        color: white;
        background-color: var(--primary-dark-color);
    } */
    @media screen and (max-width: 600px) {
        #logo-nav{
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