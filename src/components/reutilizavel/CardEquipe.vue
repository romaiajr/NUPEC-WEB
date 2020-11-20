<template>
  <div class="card">
    <img
      class="card-img-top img-fluid"
      v-bind:src="imagem"
      alt="Card image cap"
    />
    <div class="card-body">
      <h6 class="card-title">{{ nome }}</h6>
      <p class="card-text">
        {{ cargo }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardEquipe",
  props: ["imagem", "nome", "cargo"],
};
</script>
<style>
.card-body {
  text-align: center;
}
.card-title {
  color: black;
}
.card-text {
  color: black;
}
</style>
