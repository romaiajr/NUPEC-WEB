<template>
  <div class="col-md-3 col-sm-4">
    <div class="wrimagecard wrimagecard-topimage" @click="loadInfo(id)">
      <div class="wrimagecard-topimage_header" :style="background">
        <center>
          <slot id="icone"></slot>
        </center>
      </div>
      <div class="wrimagecard-topimage_title">
        <p>{{ nome }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "CardExtensao",
  props: {
    nome: String,
    id: Number,
    background: String,
  },
  methods: {
    loadInfo(id) {
      this.$parent.loadInfo(id);
    },
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
  cursor: pointer;
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
