<template>
  <b-list-group>
    <b-list-group-item :active="active == 1" @click="select_material('1')"
      >Artigos</b-list-group-item
    >
    <b-list-group-item :active="active == 2" @click="select_material('2')"
      >Livro</b-list-group-item
    >
    <b-list-group-item :active="active == 3" @click="select_material('3')"
      >Projetos de Extensão</b-list-group-item
    >
    <b-list-group-item :active="active == 4" @click="select_material('4')"
      >Atividades Complementares</b-list-group-item
    >
  </b-list-group>
</template>
<script>
export default {
  data: () => ({
    active: "0",
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
#sidebar {
  padding: 8px 8px 0 8px;
}
#sidebar .active {
  border: 1px solid var(--primary-dark-color) !important;
  /* color: var(--secondary-dark-color) !important; */
  color: white;
  /* background-color: white !important; */
  background-color: var(--primary-dark-color);
}
@media screen and (max-width: 760px) {
  #sidebar {
    display: none !important;
  }
}
</style>
