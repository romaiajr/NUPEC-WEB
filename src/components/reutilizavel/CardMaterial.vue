<template>
  <div class="wrimagecard wrimagecard-topimage">
    <router-link v-bind:to="link">
      <div class="wrimagecard-topimage_header">
        <center>
          <i v-bind:class="icone" v-bind:style="cor"></i>
        </center>
      </div>
      <div class="wrimagecard-topimage_title">
        <h6>{{ nome }}</h6>
      </div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: "CardMaterial",
  props: {
    link: String,
    icone: String,
    cor: String,
    nome: String,
  },
};
</script>
<style>
.wrimagecard {
  margin-top: 0;
  margin-bottom: 1.5rem;
  text-align: center;
  position: relative;
  background: #fff;
  box-shadow: 12px 15px 20px 0px rgba(46, 61, 73, 0.15);
  border-radius: 4px;
  transition: all 0.3s ease;
}
.wrimagecard .fa,
.wrimagecard .bx {
  position: relative;
  font-size: 70px;
}
.wrimagecard-topimage_header {
  padding: 20px;
}
a.wrimagecard:hover,
.wrimagecard-topimage:hover {
  box-shadow: 2px 4px 8px 0px rgba(46, 61, 73, 0.2);
}
.wrimagecard-topimage a {
  width: 100%;
  height: 100%;
  display: block;
}
.wrimagecard-topimage_title {
  padding: 8px 24px;
  height: 80px;
  position: relative;
}
.wrimagecard-topimage a {
  border-bottom: none;
  text-decoration: none;
  color: #525c65;
  transition: color 0.3s ease;
}

@media screen and (max-width: 760px) {
  .wrimagecard-topimage_title h6 {
    font-size: 21px !important;
  }
}
</style>
