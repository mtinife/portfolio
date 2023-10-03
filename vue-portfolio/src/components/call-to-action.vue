<template>
  <section class="cta gold-bg spacing-default">
    <h6 class="heading-robo-4">
      Let's get started,
      <br />
      your dream project can't wait.
    </h6>
    <button class="button-2">
      <span>Let's Talk</span>
      <i class="ri-arrow-right-up-line"></i>
    </button>
  </section>
</template>
<style scoped>
@import "../../public/main.css";
.cta h6 {
  font-weight: bold;
}
@media screen and (min-width: 1000px) {
  .cta {
    display: grid;
    grid-template-columns: 2.4fr 229px;
    align-items: center;
  }
  .cta .button-2 {
    height: 50%;
  }
}
</style>
