<script setup>
import NavbarMain from "./components/navbar-main.vue";
import CallToAction from "./components/call-to-action.vue";
import FooterMain from "./components/footer-main.vue";
</script>
<template>
  <section class="p-8 mx-auto bg-ra-dark mobile:p-4">
    <section
      class="px-8 pb-8 rounded-xl mx-auto bg-ra-red mobile:px-4 mobile:pb-8 mobile:rounded-md"
    >
      <NavbarMain />
      <main>
        <router-view />
        <CallToAction />
        <FooterMain />
      </main>
    </section>
  </section>
</template>
<style src="./assets/tailwind.css"></style>
