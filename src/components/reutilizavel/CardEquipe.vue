<template>
  <div class="card">
    <img
      class="card-img-top img-fluid"
      v-bind:src="imagem"
      alt="Card image cap"
    />
    <div class="card-body">
      <h6 class="card-title text-wrap">
        {{ nome }}
      </h6>
      <p class="card-text text-wrap">
        {{ cargo }}
        <br />
        <small
          @click="redirect(lattes)"
          v-if="lattes != undefined && lattes != ''"
          class="linkExterno"
          >Currículo Lattes</small
        >
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardEquipe",
  props: ["imagem", "nome", "cargo", "lattes"],
  methods: {
    redirect(row) {
      window.open(row);
    },
  },
};
</script>
<style>
.card {
  margin: 5% 0% !important;
}

.card-body {
  margin: 0% 0% 0% 3% !important;
  padding: 6% 0% !important;
  color: black;
  text-align: center;
}
.card-title {
  word-break: break-word !important;
  overflow-wrap: break-word !important;
}
.card-img-top {
  width: 100% !important;
  height: auto !important;
}
</style>
