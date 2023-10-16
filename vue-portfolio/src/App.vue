<script setup>
import NavbarLarge from "./components/navbar-large.vue";
import NavbarSmall from "./components/navbar-small.vue";
import CallToAction from "./components/call-to-action.vue";
import FooterMain from "./components/footer-main.vue";
</script>
<template>
  <section class="p-4 mx-auto bg-ra-dark md:p-8">
    <section
      class="px-4 pb-8 rounded-md mx-auto bg-ra-red md:px-8 md:pb-8 md:rounded-xl"
    >
      <NavbarLarge />
      <NavbarSmall />
      <main>
        <router-view />
        <CallToAction />
        <FooterMain />
      </main>
    </section>
  </section>
</template>
<style src="./assets/tailwind.css"></style>
