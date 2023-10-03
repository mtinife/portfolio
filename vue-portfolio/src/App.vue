<script setup>
import NavbarMain from "./components/navbar-main.vue";
import CallToAction from "./components/call-to-action.vue";
import FooterMain from "./components/footer-main.vue";
</script>
<template>
  <section class="container">
    <NavbarMain />
    <main>
      <router-view />
      <CallToAction />
      <FooterMain />
    </main>
  </section>
</template>
