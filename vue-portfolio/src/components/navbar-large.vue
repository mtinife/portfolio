<script>
export default {
  name: "NavbarLarge",
};
</script>
<template>
  <nav class="relative flex justify-between z-40 font-robo uppercase">
    <div class="">
      <router-link to="/">
        <img class="w-20" alt="Logo banner" src="../assets/logo.png" />
      </router-link>
    </div>
    <ul role="list" class="rounded-sm flex items-center">
      <li class="flex">
        <router-link
          to="/about"
          class="py-6 px-12 bg-ra-dark rounded-bl-sm rounded-tl-sm hover:bg-ra-gold hover:text-ra-dark"
        >
          About
        </router-link>
      </li>
      <li class="flex">
        <router-link
          to="/projects"
          class="py-6 px-12 bg-ra-dark hover:bg-ra-gold hover:text-ra-dark"
        >
          Projects
        </router-link>
      </li>
      <li class="flex">
        <router-link
          to="/services"
          class="py-6 px-12 bg-ra-dark hover:bg-ra-gold hover:text-ra-dark"
        >
          Services
        </router-link>
      </li>
      <li class="flex">
        <router-link
          to="/contact"
          class="py-6 px-12 bg-ra-dark rounded-br-sm rounded-tr-sm hover:bg-ra-gold hover:text-ra-dark"
        >
          Contact
        </router-link>
      </li>
    </ul>
    <div class="flex items-center">
      <a
        class="flex py-6 px-12 bg-ra-dark text-ra-gold rounded-sm hover:bg-ra-gold hover:text-ra-gold"
      >
        Hire Me
      </a>
    </div>
  </nav>
</template>
