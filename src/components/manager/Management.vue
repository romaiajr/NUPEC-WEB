<template>
  <div style="width: 100%">
    <div id="title">
      <div class="container">
        <h4>
          {{ nome }}
          <b-badge>{{
            filteredList != undefined ? filteredList.length : conteudo.length
          }}</b-badge>
        </h4>
      </div>
    </div>
    <div id="inputs">
      <div class="container">
        <div class="row m-0">
          <div class="col-md-4 col-6 p-0">
            <b-form-input v-model="text" placeholder="Pesquisar"></b-form-input>
          </div>
          <div class="col-md-6 col-2 p-0" />
          <div class="col-md-2 col-4 p-0">
            <div v-show="isLogged">
              <b-button block v-b-modal.modal-1><p>Adicionar</p></b-button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="card">
      <div class="container">
        <div class="overflow-auto">
          <b-table
            id="table"
            :per-page="perPage"
            :current-page="currentPage"
            small
            :sort-by.sync="sortBy"
            striped
            hover
            sort-icon-left
            responsive
            stacked="sm"
            :items="filteredList == undefined ? conteudo : filteredList"
            :fields="fields"
          >
            <template #cell(link)="row">
              <b-button
                size="sm"
                variant="primary"
                squared
                @click="redirect(row)"
                v-if="row.value != ''"
              >
                <i class="bx bx-link"></i>
                Acessar</b-button
              >
            </template>
            <template #cell(remove)="row">
              <b-button
                v-b-modal.modal-remover
                v-show="isLogged"
                size="sm"
                variant="danger"
                squared
                @click="remove(row)"
              >
                <i class="bx bx-trash"></i>
                Excluir</b-button
              >
            </template>
          </b-table>
          <div id="pagination">
            <b-pagination
              v-model="currentPage"
              :total-rows="
                filteredList != undefined
                  ? filteredList.length
                  : conteudo.length
              "
              :per-page="perPage"
              aria-controls="table"
            ></b-pagination>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  created() {
    this.isLogged = JSON.parse(sessionStorage.getItem("isLogged"));
  },
  props: {
    conteudo: {
      type: Array,
      required: true,
    },
    nome: {
      type: String,
    },
    sortBy: {
      type: String,
    },
    fields: {
      type: Array,
    },
  },
  data: () => ({
    text: "",
    perPage: 6,
    currentPage: 1,
    isLogged: false,
    removeId: "",
  }),
  computed: {
    filteredList() {
      if (this.text != "") {
        var reserva = this.conteudo;
        var text = this.text.toLowerCase();
        return reserva.filter((item) => {
          var titulo =
            item.titulo == undefined ? "" : item.titulo.toLowerCase();
          var nome = item.autor == undefined ? "" : item.autor.toLowerCase();
          var bolsista =
            item.bolsista == undefined ? "" : item.bolsista.toLowerCase();
          var orientador =
            item.orientador == undefined ? "" : item.orientador.toLowerCase();
          var orgão = item.tipo == undefined ? "" : item.tipo.toLowerCase();
          var tema = item.tema == undefined ? "" : item.tema.toLowerCase();
          var apresentadores =
            item.apresentadores == undefined
              ? ""
              : item.apresentadores.toLowerCase();
          var ano = item.ano == undefined ? "" : item.ano.toLowerCase();
          return (
            titulo.includes(text) ||
            nome.includes(text) ||
            bolsista.includes(text) ||
            orientador.includes(text) ||
            orgão.includes(text) ||
            tema.includes(text) ||
            apresentadores.includes(text) ||
            ano.includes(text)
          );
        });
      } else {
        return (reserva = this.conteudos);
      }
    },
  },

  methods: {
    redirect(row) {
      window.open(row.value);
    },
    remove(row) {
      // this.$parent.itemRemove(row.item);
      this.$emit("itemRemove", row.item);
    },
  },
};
</script>
<style>
#sidebar {
  margin-top: 8px;
  padding: 0px 8px 0px 8px;
}
#pagination {
  display: flex;
  align-items: center;
  justify-content: center;
}

.table-striped > tbody > tr:nth-child(2n + 1) > td,
.table-striped > tbody > tr:nth-child(2n + 1) > th {
  background-color: #ffd9f0;
  border-color: #ffd9f0;
}
.table-striped > tbody > tr:hover {
  background-color: #ffd9f0;
}
#table-section {
  padding: 0px;
  box-sizing: border-box;
  /* padding: 8px 8px 0 8px; */
}
.table {
  white-space: pre-wrap;
}
#title {
  box-sizing: border-box;
  padding: 16px 0px;
  background-color: var(--primary-dark-color);
  color: white;
  width: 100%;
  margin-top: 8px;
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
  /* border: 1px solid var(--secondary-color) !important; */
}

#inputs button {
  background-color: var(--secondary-color) !important;
  border: none !important;
  margin: 0 !important;
}

#inputs button:hover {
  background-color: var(--secondary-dark-color) !important;
}

#inputs button:focus {
  background-color: var(--secondary-dark-color) !important;
  box-shadow: 0px 0px 1px 2px var(--secondary-light-color) !important;
}
</style>
