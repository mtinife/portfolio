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
    <router-link to="/" class="bg-ra-darker flex gap-2 p-5 rounded-[9px]">
      <img src="../assets/mylogo.png" class="w-5" />
      <span>home</span>
    </router-link>
    <nav relative>
      <button
        @click="toggleMenu()"
        class="p-5 px-8 bg-ra-dark rounded-[9px] gap-2 uppercase flex"
      >
        menu
        <i class="ri-menu-line" v-if="isNotHidden"></i>
        <i class="ri-close-line" v-if="isHidden"></i>
      </button>
      <ul
        role="list"
        class="absolute top-[-253%] left-[54%] p-2 bg-ra-trans rounded-[9px] grid gap-1 translate-x-[-54%]"
        v-if="isHidden"
      >
        <li
          class="px-5 py-3 rounded-[6px] bg-ra-dark hover:bg-ra-gold hover:text-ra-dark"
        >
          <router-link to="/about">about</router-link>
        </li>
        <li
          class="px-5 py-3 rounded-[6px] bg-ra-dark hover:bg-ra-gold hover:text-ra-dark"
        >
          <router-link to="/projects">projects</router-link>
        </li>
        <li
          class="px-5 py-3 rounded-[6px] bg-ra-dark hover:bg-ra-gold hover:text-ra-dark"
        >
          <router-link to="/services">services</router-link>
        </li>
        <li
          class="px-5 py-3 rounded-[6px] bg-ra-dark hover:bg-ra-gold hover:text-ra-dark"
        >
          <router-link to="/contact">contact</router-link>
        </li>
      </ul>
    </nav>
    <router-link to="/contact" class="bg-ra-darker flex gap-2 p-5 rounded-[9px]"
      >Hire me
    </router-link>
  </div>
</template>
