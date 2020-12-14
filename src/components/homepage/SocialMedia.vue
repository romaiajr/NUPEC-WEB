<template>
  <div id="social-media">
    <div class="container">
      <div id="buttons_social">
        <vs-button
          icon
          color="facebook"
          href="https://www.facebook.com/profile.php?id=100018617562787"
          blank
        >
          <i class="bx bxl-facebook-square"></i>
        </vs-button>
        <vs-button
          icon
          href="https://www.youtube.com/channel/UCXw_d0NO8M11GlB1-tEFgtQ"
          blank
          color="youtube"
        >
          <i class="bx bxl-youtube"></i>
        </vs-button>
        <vs-button
          icon
          color="slack"
          href="https://instagram.com/nupecuefs2?igshid=7lzcp6tihac9"
          blank
        >
          <i class="bx bxl-instagram"></i>
        </vs-button>
      </div>
    </div>
  </div>
</template>
<style>
#social-media {
  box-sizing: border-box;
  width: 100%;
  padding: 12px 0px;
  background: var(--secondary-light-color);
}
#buttons_social {
  display: flex;
  align-items: center;
  justify-content: center;
}
#buttons_social .bx {
  font-size: 48px !important;
}
#buttons_social button {
  margin: 0px 8px !important;
}
@media screen and (max-width: 760px) {
  #buttons_social .bx {
    font-size: 36px !important;
  }
  #buttons_social button {
    margin: 0 8px !important;
  }
}
</style>
