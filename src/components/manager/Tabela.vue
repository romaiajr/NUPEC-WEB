<template>
  <b-table
    small
    :sort-by.sync="sortBy"
    striped
    hover
    responsive="sm"
    :material="conteudo"
  ></b-table>
</template>
<script>
export default {
  name: "Tabela",
  props: {
    conteudo: {
      type: Array,
      required: true,
    },
    sortBy: {
      type: String,
    },
  },
};
</script>
<style>
.table-striped > tbody > tr:nth-child(2n + 1) > td,
.table-striped > tbody > tr:nth-child(2n + 1) > th {
  background-color: #ffd9f0;
  border-color: #ffd9f0;
}
.table-striped > tbody > tr:hover {
  background-color: #ffd9f0;
}
</style>
