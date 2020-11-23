<template>
  <b-list-group>
    <b-list-group-item
      to="/materiais/artigos"
      exact
      :active="active == 1"
      :disabled="active == 1"
    >
      Artigos</b-list-group-item
    >
    <b-list-group-item
      to="/materiais/livros"
      exact
      :active="active == 2"
      :disabled="active == 2"
      >Livro</b-list-group-item
    >
    <b-list-group-item
      to="/materiais/capitulos-de-livros"
      exact
      :active="active == 3"
      :disabled="active == 3"
      >Capítulo de Livros</b-list-group-item
    >
    <b-list-group-item
      to="/materiais/projetos-de-extensao"
      exact
      :active="active == 4"
      :disabled="active == 4"
      >Projetos de Extensão</b-list-group-item
    >
    <b-list-group-item
      to="/materiais/atividades-complementares"
      exact
      :active="active == 5"
      :disabled="active == 5"
      >Atividades Complementares</b-list-group-item
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
#sidebar {
  padding: 8px 8px 0 8px;
}

@media screen and (max-width: 760px) {
  #sidebar {
    display: none !important;
  }
}
</style>
