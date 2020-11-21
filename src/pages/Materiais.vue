<template>
  <div>
    <Navbar>
      <b-nav-item class="mobile-nav" @click="select_material('1')"
        >Artigos</b-nav-item
      >
      <b-nav-item class="mobile-nav" @click="select_material('2')"
        >Livros</b-nav-item
      >
      <b-nav-item class="mobile-nav" @click="select_material('3')"
        >Projetos de Extensão</b-nav-item
      >
      <b-nav-item class="mobile-nav" @click="select_material('4')"
        >Atividades Complementares</b-nav-item
      >
    </Navbar>
    <div class="container-fluid p-0">
      <div class="row m-0" id="content">
        <div class="col-md-2 col-0 border-right" id="sidebar">
          <b-list-group>
            <b-list-group-item
              :active="active == 1"
              @click="select_material('1')"
              >Artigos</b-list-group-item
            >
            <b-list-group-item
              :active="active == 2"
              @click="select_material('2')"
              >Livro</b-list-group-item
            >
            <b-list-group-item
              :active="active == 3"
              @click="select_material('3')"
              >Projetos de Extensão</b-list-group-item
            >
            <b-list-group-item
              :active="active == 4"
              @click="select_material('4')"
              >Atividades Complementares</b-list-group-item
            >
          </b-list-group>
        </div>
        <div class="col-md-10 col-12" id="table-section">
          <!-- <div id="title">
            <div class="container">
              <h4>
                Artigos
                <b-badge>5</b-badge>
              </h4>
            </div>
          </div>
          <div id="inputs">
            <div class="container">
              <div class="row m-0">
                <div class="col-md-3 col-4 p-0">
                  <b-form-input
                    v-model="text"
                    placeholder="Pesquisar"
                  ></b-form-input>
                </div>
                <div class="col-md-7 col-4 p-0" />
                <div class="col-md-2 col-4 p-0">
                  <b-button block
                    ><p>Button</p>
                    <p></p
                  ></b-button>
                </div>
              </div>
            </div>
          </div>
          <div id="card">
            <div class="container">
              <b-table
                small
                :sort-by.sync="sortBy"
                striped
                hover
                sort-icon-left
                responsive="sm"
                :items="items"
              ></b-table>
            </div>
          </div> -->
          <div class="manager" :style="active == 1 ? style : ''">
            <Management :conteudo="items" nome="Artigos" sortBy="nome" />
          </div>
          <div class="manager" :style="active == 2 ? style : ''">
            <Management :conteudo="items" nome="Livros" sortBy="nome" />
          </div>
          <div class="manager" :style="active == 3 ? style : ''">
            <Management
              :conteudo="items"
              nome="Projeto de Extensão"
              sortBy="nome"
            />
          </div>
          <div class="manager" :style="active == 4 ? style : ''">
            <Management
              :conteudo="items"
              nome="Atividades Complementares"
              sortBy="nome"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Navbar from "../components/reutilizavel/Navbar";
import Management from "../components/manager/Management";
export default {
  components: {
    Navbar,
    Management,
  },
  data: () => ({
    active: "1",
    sortBy: "Nome",
    items: [
      {
        Nome: "Artigo 7",
        Autor: "Dickerson",
        Data: "17/10/2019",
        Link: "http://www.",
      },
      {
        Nome: "Artigo 7",
        Autor: "Dickerson",
        Data: "17/10/2019",
        Link: "http://www.",
      },
      {
        Nome: "Artigo 7",
        Autor: "Dickerson",
        Data: "17/10/2019",
        Link: "http://www.",
      },
      {
        Nome: "Artigo 7",
        Autor: "Dickerson",
        Data: "17/10/2019",
        Link: "http://www.",
      },
      {
        Nome: "Artigo 7",
        Autor: "Dickerson",
        Data: "17/10/2019",
        Link:
          "https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Operators/Operador_Condicional",
      },
      {
        Nome: "Artigo 2",
        Autor: "Larsen",
        Data: "30/05/2001",
        Link: "http://www.",
      },
      {
        Nome: "Artigo 3",
        Autor: "Geneva",
        Data: "07/11/2000",
        Link: "http://www.",
      },
      {
        Nome: "Artigo 4",
        Autor: "Jami",
        Data: "17/10/2020",
        Link: "http://www.",
      },
    ],
    style: "display: block !important",
    // style2: "display: block !important",
    // style3: "display: block !important",
    // style4: "display: block !important",
  }),
  methods: {
    select_material(active) {
      console.log(active);
      this.active = active;
    },
  },
};
</script>
<style>
.manager {
  display: none;
}
/* .table-striped > tbody > tr:nth-child(2n + 1) > td,
.table-striped > tbody > tr:nth-child(2n + 1) > th {
  background-color: #ffd9f0;
  border-color: #ffd9f0;
}
.table-striped > tbody > tr:hover {
  background-color: #ffd9f0;
} */
.mobile-nav {
  display: none;
}
.list-group-item {
  text-transform: uppercase;
}

.list-group-item:hover {
  cursor: pointer;
  background: var(--primary-dark-color);
  border-color: var(--primary-dark-color);
  color: white;
}

/* #table-section {
  padding: 0px;
  box-sizing: border-box;
  /* padding: 8px 8px 0 8px; 
}*/
/* #title {
  box-sizing: border-box;
  padding: 16px 0px;
  background-color: var(--primary-dark-color);
  color: white;
  width: 100%;
}

#inputs {
  box-sizing: border-box;
  padding-top: 16px;
  padding-bottom: 16px;
}

.badge {
  background-color: var(--secondary-color) !important;
}
#inputs input {
  border: 1px solid var(--secondary-color) !important;
}

#inputs input:focus {
  box-shadow: 0px 0px 1px 2px var(--secondary-light-color) !important;
}

#inputs button {
  background-color: var(--secondary-color) !important;
  border: none !important;
}

#inputs button:hover {
  background-color: var(--secondary-dark-color) !important;
}

#inputs button:focus {
  background-color: var(--secondary-dark-color) !important;
  box-shadow: 0px 0px 1px 2px var(--secondary-light-color) !important;
}  */
#sidebar {
  padding: 8px 8px 0 8px;
}
#sidebar .active {
  border: 1px solid var(--primary-dark-color) !important;

  color: white;

  background-color: var(--primary-dark-color);
}

@media screen and (max-width: 760px) {
  .mobile-nav {
    display: block !important;
  }

  #sidebar {
    display: none !important;
  }
}
</style>
