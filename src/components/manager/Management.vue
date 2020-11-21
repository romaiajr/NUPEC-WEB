<template>
  <div>
    <div id="title">
      <div class="container">
        <h4>
          {{ nome }}
          <b-badge>{{ conteudo.length }}</b-badge>
        </h4>
      </div>
    </div>
    <div id="inputs">
      <div class="container">
        <div class="row m-0">
          <div class="col-md-3 col-4 p-0">
            <b-form-input v-model="text" placeholder="Pesquisar"></b-form-input>
          </div>
          <div class="col-md-7 col-4 p-0" />
          <div class="col-md-2 col-4 p-0">
            <b-button block><p>Adicionar</p></b-button>
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
            responsive="sm"
            :items="conteudo"
            :fields="fields"
          >
            <template #cell(Link)="row">
              <b-button
                size="sm"
                variant="primary"
                squared
                @click="redirect(row)"
              >
                <i class="bx bx-link"></i>
                Acessar</b-button
              >
            </template></b-table
          >
          <div id="pagination">
            <b-pagination
              v-model="currentPage"
              :total-rows="conteudo.length"
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
  },
  data: () => ({
    perPage: 6,
    currentPage: 1,
    fields: [
      { key: "Nome", label: "Nome", sortable: true, sortDirection: "asc" },
      { key: "Autor", label: "Autor", sortable: true, sortDirection: "asc" },
      {
        key: "Data",
        label: "Data de Publicação",
      },
      { key: "Link", label: "Link" },
    ],
  }),
  methods: {
    redirect(row) {
      console.log(row.value);
      window.open(row.value);
    },
  },
};
</script>
<style>
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
#title {
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
  /* border: 1px solid var(--secondary-color) !important; */
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
}
</style>
