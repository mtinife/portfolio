<script>
export default {
  name: "NavbarSmall",
  data: () => ({ isHidden: false, isNotHidden: true }),
  methods: {
    toggleMenu() {
      this.isHidden = !this.isHidden;
      this.isNotHidden = !this.isNotHidden;
    },
  },
};
</script>
<template>
  <div
    class="w-[30em] fixed z-50 bottom-2 left-[50%] my-0 mx-auto font-robo uppercase flex translate-x-[-50%] translate-y-[-50%] bg-ra-trans p-2 rounded-sm gap-2 text-[11px]"
  >
    <router-link
      to="/"
      class="bg-ra-darker flex items-center gap-2 p-5 rounded-[9px]"
    >
      <img src="../assets/dark-logo-1.png" class="w-5" />
      <span>home</span>
    </router-link>
    <nav relative>
      <button
        class="py-6 px-8 bg-ra-dark rounded-[9px] gap-2 uppercase flex justify-center"
        @click="toggleMenu()"
      >
        menu
        <i v-if="isNotHidden" class="ri-menu-line"></i>
        <i v-if="isHidden" class="ri-close-line"></i>
      </button>
      <ul
        v-if="isHidden"
        role="list"
        class="absolute top-[-227%] left-[54%] p-2 bg-ra-trans rounded-[9px] grid gap-1 translate-x-[-54%]"
      >
        <li
          class="px-6 py-3 rounded-[6px] bg-ra-dark hover:bg-ra-gold hover:text-ra-dark"
        >
          <router-link to="/about">about</router-link>
        </li>
        <li
          class="px-6 py-3 rounded-[6px] bg-ra-dark hover:bg-ra-gold hover:text-ra-dark"
        >
          <router-link to="/projects">projects</router-link>
        </li>
        <li
          class="px-6 py-3 rounded-[6px] bg-ra-dark hover:bg-ra-gold hover:text-ra-dark"
        >
          <router-link to="/services">services</router-link>
        </li>
        <li
          class="px-6 py-3 rounded-[6px] bg-ra-dark hover:bg-ra-gold hover:text-ra-dark"
        >
          <router-link to="/contact">contact</router-link>
        </li>
      </ul>
    </nav>
    <router-link
      to="/contact"
      class="bg-ra-darker flex items-center gap-2 p-5 rounded-[9px]"
    >
      Hire me
    </router-link>
  </div>
</template>
