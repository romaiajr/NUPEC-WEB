<template>
  <div id="hero">
    <img src="../../assets/img/Logo 2.png" alt="logo" id="logo-hero" />
  </div>
</template>

<style>
#hero {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 316px;
  background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(252, 252, 252, 0.213542) 21.35%,
      rgba(251, 251, 251, 0.302083) 30.21%,
      rgba(248, 248, 248, 0.557292) 55.73%,
      rgba(244, 244, 244, 0.848958) 84.9%,
      #f2f2f2 100%
    ),
    url(../../assets/img/HeroImage.png);
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  /* background-attachment: fixed; */
}
#logo-hero {
  margin: auto;
  display: block;
}

@media screen and (max-width: 760px) {
  #logo-hero {
    width: 60%;
  }
  #hero {
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0) 0%,
        rgba(252, 252, 252, 0.213542) 21.35%,
        rgba(251, 251, 251, 0.302083) 30.21%,
        rgba(248, 248, 248, 0.557292) 55.73%,
        rgba(244, 244, 244, 0.848958) 84.9%,
        #f2f2f2 100%
      ),
      url(../../assets/img/HeroImage.png);
    height: 200px;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
  }
}
@media screen and (max-width: 1140px) and (min-width: 761px) {
  #logo-hero {
    width: 60%;
  }
}
</style>
