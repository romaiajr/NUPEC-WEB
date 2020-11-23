<template>
  <div>
    <b-navbar toggleable="lg" class="navbar" fixed="top">
      <div class="container">
        <b-navbar-brand>
          <router-link to="/" exact>
            <img id="logo-nav" src="../../assets/img/Logo.png" />
          </router-link>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <!-- <b-nav-item @click="scrollMeTo('quem-somos')"
              >Quem Somos</b-nav-item
            >
            <b-nav-item-dropdown
              text="Materiais"
              right
              id="item-dropdown"
              @click="scrollMeTo('materiais')"
            >
              <b-dropdown-item>
                Artigos
              </b-dropdown-item>
              <b-dropdown-item>Livros</b-dropdown-item>
              <b-dropdown-item>Cap. de Livros</b-dropdown-item>
              <b-dropdown-item>Atividades Extras</b-dropdown-item>
            </b-nav-item-dropdown>
            <b-nav-item @click="scrollMeTo('nossa-equipe')"
              >Nossa Equipe</b-nav-item
            > -->
            <slot></slot>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
  </div>
</template>

<script>
export default {
  data: () => ({
    page: "",
    isHover: false,
  }),
  methods: {
    scrollMeTo(refName) {
      this.$parent.scrollMeTo(refName);
    },
    onChange(event) {
      this.page = event.target.value;
      console.log(this.page);
    },
  },
};
</script>

<style>
.navbar {
  background-color: var(--light-color);
  box-shadow: 0 0px 10px rgba(0, 0, 0, 0.2);
}

#logo-nav {
  width: 150px;
}
.nav-link {
  text-transform: uppercase;
  color: black !important;
  font-weight: 600;
  /* font-size: 21px; */
}
.nav-link,
.nav-link:after,
.nav-link:before {
  transition: all 0.5s;
}
.nav-link:hover {
  color: var(--secondary-dark-color) !important;
}
/* stroke */
.nav-link {
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
  content: ".";
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
  content: ".";
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
/* .dropdown-item,
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
    } */

.router_link {
  text-decoration: none !important;
  color: #000 !important;
}

.dropdown-item:hover .router_link {
  color: white !important;
}
.dropdown-item:hover {
  color: #fff !important;
  background-color: var(--primary-dark-color) !important;
}
@media screen and (max-width: 600px) {
  #logo-nav {
    width: 90px;
  }
  .nav-link {
    font-family: IBM Plex Sans;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
  }
  .dropdown-item {
    font-family: IBM Plex Serif;
    font-style: normal;
    font-weight: normal;
    font-size: 12px;
    line-height: 150%;
  }
}
</style>
