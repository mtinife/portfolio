<script>
export default {
  name: "NavbarLarge",
};
</script>
<template>
  <nav class="relative flex justify-between z-40 font-robo uppercase">
    <div class="">
      <router-link to="/">
        <img class="w-20" alt="Logo banner" src="../assets/dark-logo-1.png" />
      </router-link>
    </div>
    <ul role="list" class="rounded-sm flex items-center navMenu">
      <li class="flex">
        <router-link
          to="/about"
          class="py-6 px-12 rounded-bl-sm rounded-tl-sm hover:bg-ra-gold hover:text-ra-dark hover:font-bold"
        >
          About
        </router-link>
      </li>
      <li class="flex">
        <router-link
          to="/projects"
          class="py-6 px-12 hover:bg-ra-gold hover:text-ra-dark hover:font-bold"
        >
          Projects
        </router-link>
      </li>
      <li class="flex">
        <router-link
          to="/services"
          class="py-6 px-12 hover:bg-ra-gold hover:text-ra-dark hover:font-bold"
        >
          Services
        </router-link>
      </li>
      <li class="flex">
        <router-link
          to="/contact"
          class="py-6 px-12 rounded-br-sm rounded-tr-sm hover:bg-ra-gold hover:text-ra-dark hover:font-bold"
        >
          Contact
        </router-link>
      </li>
    </ul>
    <div class="flex items-center">
      <a
        href="/contact"
        class="flex py-6 px-12 text-ra-gold rounded-sm hover:bg-ra-gold hover:text-ra-dark"
      >
        Hire Me
      </a>
    </div>
  </nav>
</template>
<style>
.navMenu li a.router-link-active {
  color: #3e0709;
  background-color: #f28907;
}
</style>
