<template>
  <b-list-group>
    <b-list-group-item
      to="/producoes/iniciacao-cientifica"
      exact
      :active="active == 1"
      :disabled="active == 1"
      >Iniciação Científica</b-list-group-item
    >
    <b-list-group-item
      to="/producoes/projetos-de-extensao"
      exact
      :active="active == 2"
      :disabled="active == 2"
      >Projetos de Extensão</b-list-group-item
    >
    <b-list-group-item
      to="/producoes/artigos"
      exact
      :active="active == 3"
      :disabled="active == 3"
    >
      Artigos</b-list-group-item
    >
    <b-list-group-item
      to="/producoes/livros"
      exact
      :active="active == 4"
      :disabled="active == 4"
      >Livros</b-list-group-item
    >
    <b-list-group-item
      to="/producoes/capitulos-de-livros"
      exact
      :active="active == 5"
      :disabled="active == 5"
      >Capítulos de Livros</b-list-group-item
    >

    <b-list-group-item
      to="/producoes/atividades-desenvolvidas"
      exact
      :active="active == 6"
      :disabled="active == 6"
      >Atividades Desenvolvidas</b-list-group-item
    >

    <b-list-group-item
      to="/producoes/leituras-recomendadas"
      exact
      :active="active == 7"
      :disabled="active == 7"
      >Leituras Recomendadas</b-list-group-item
    >
  </b-list-group>
</template>
<script>
export default {
  props: {
    active: {
      type: String,
    },
  },
};
</script>
<style>
.list-group-item {
  text-transform: uppercase;
}

.list-group-item:hover {
  cursor: pointer;
  background: var(--primary-dark-color) !important;
  border-color: var(--primary-dark-color) !important;
  color: white !important;
}

@media screen and (max-width: 760px) {
  #sidebar {
    display: none !important;
  }
}
</style>
