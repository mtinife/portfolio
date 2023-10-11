<script>
export default {
  name: "NavbarMain",
};
</script>
<template>
  <nav class="flex flex-col">
    <div class="">
      <router-link to="/">
        <img class="w-20" alt="Logo banner" src="../assets/logo.png" />
      </router-link>
    </div>
    <ul role="list" class="bg-ra-dark rounded-sm grid grid-cols-4 w-4/12">
      <li
        class="p-7 text-center text-ra-gold uppercase hover:bg-ra-gold hover:text-ra-dark hover:rounded-tl-sm hover:rounded-bl-sm"
      >
        <router-link to="/about">About</router-link>
      </li>
      <li
        class="p-7 text-center text-ra-gold uppercase hover:bg-ra-gold hover:text-ra-dark"
      >
        <router-link to="/projects">Projects</router-link>
      </li>
      <li
        class="p-7 text-center text-ra-gold uppercase hover:bg-ra-gold hover:text-ra-dark"
      >
        <router-link to="/services">Services</router-link>
      </li>
      <li
        class="p-7 text-center text-ra-gold uppercase hover:bg-ra-gold hover:text-ra-dark hover:rounded-tr-sm hover:rounded-br-sm"
      >
        <router-link to="/contact">Contact</router-link>
      </li>
    </ul>
    <a
      class="py-7 px-10 bg-ra-dark text-ra-gold uppercase rounded-sm hover:bg-ra-gold hover:text-ra-gold text-lg"
    >
      Hire Me
    </a>
  </nav>
</template>
