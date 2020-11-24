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
          <b-navbar-nav class="ml-auto">
            <slot></slot>
            <div v-show="!isLogged">
              <b-button v-b-modal.modal-login squared>Login</b-button>
            </div>
          </b-navbar-nav>
        </b-collapse>
      </div>
    </b-navbar>
    <b-modal id="modal-login" ref="modal-login" hide-footer title="Login">
      <b-form @submit="onLogin">
        <b-form-text> Usuário </b-form-text>
        <b-form-input required v-model="form.user"></b-form-input>
        <b-form-text> Senha </b-form-text>
        <b-form-input
          type="password"
          required
          v-model="form.senha"
        ></b-form-input>
        <div id="button-modal">
          <b-button id="btn-login" type="submit" block variant="primary"
            >Realizar Login</b-button
          >
        </div>
      </b-form>
    </b-modal>
  </div>
</template>

<script>
export default {
  mounted() {
    const user = JSON.parse(sessionStorage.getItem("login"));
    if (user.user == "NupecUefs" && user.senha == "n1u$pec") {
      this.isLogged = true;
    }
  },
  data: () => ({
    isHover: false,
    isLogged: false,
    form: {
      user: "",
      senha: "",
    },
  }),
  methods: {
    scrollMeTo(refName) {
      this.$parent.scrollMeTo(refName);
    },
    onLogin() {
      console.log(this.form);
      sessionStorage.setItem(
        "login",
        JSON.stringify({
          user: this.form.user,
          senha: this.form.senha,
        })
      );
    },
  },
};
</script>

<style>
#btn-login {
  margin: 0px !important;
}
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

.navbar .btn {
  color: white !important;
  background-color: var(--secondary-color) !important;
  border-color: var(--secondary-color) !important;
}

.navbar .btn:hover {
  background-color: var(--secondary-dark-color) !important;
  color: white !important;
  border-color: var(--secondary-dark-color) !important;
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
  .navbar .btn {
    margin: 0 !important;
  }
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
