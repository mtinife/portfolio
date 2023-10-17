<template>
  <section
    class="p-4 bg-ra-gold rounded-md md:rounded-xl md:px-14 md:py-28 xl:flex xl:justify-between my-32"
  >
    <div>
      <h6 class="font-robo font-black text-sm text-ra-dark md:text-lg">
        Let's get started,
        <br />
        your dream project can't wait.
      </h6>
    </div>
    <div class="xl:flex xl:items-center mt-8 xl:mt-0">
      <router-link
        to="/contact"
        class="flex xl:flex-auto justify-between items-center p-1 bg-ra-dark rounded-lg"
      >
        <span class="text-ra-gold p-4 text-xs md:text-sx">Let's Talk</span>
        <i
          class="ri-arrow-right-up-line text-ra-dark rounded-lg bg-ra-gold text-md"
        ></i>
      </router-link>
    </div>
  </section>
</template>
