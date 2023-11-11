<script setup>
import NavbarLarge from "./components/navbar-large.vue";
import NavbarSmall from "./components/navbar-small.vue";
import CallToAction from "./components/call-to-action.vue";
import FooterMain from "./components/footer-main.vue";
import ToTheTop from "./components/to-the-top-btn.vue";
</script>
<template>
  <section class="p-4 mx-auto bg-ra-black md:p-8">
    <section
      class="px-4 py-4 rounded-md mx-auto bg-ra-black md:px-8 md:pb-8 md:pt-0 md:rounded-xl"
    >
      <NavbarLarge class="xl:flex hidden" />
      <NavbarSmall class="xl:hidden" />
      <main>
        <router-view />
        <CallToAction />
        <FooterMain />
        <ToTheTop />
      </main>
    </section>
  </section>
</template>
<style src="./assets/tailwind.css"></style>
