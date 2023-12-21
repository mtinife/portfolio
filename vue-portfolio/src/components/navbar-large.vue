<script>
const OFFSET = 60;
export default {
  name: "NavbarLarge",
  data() {
    return {
      showNavbar: true,
      lastScrollPosition: 0,
      scrollValue: 0,
    };
  },
  mounted() {
    this.lastScrollPosition = window.scrollY;
    window.addEventListener("scroll", this.onScroll);
    const viewportMeta = document.createElement("meta");
    viewportMeta.name = "viewport";
    viewportMeta.content = "width=device-width, initial-scale=1";
    document.head.appendChild(viewportMeta);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.onScroll);
  },
  methods: {
    onScroll() {
      if (window.scrollY < 0) {
        return;
      }
      if (Math.abs(window.scrollY - this.lastScrollPosition) < OFFSET) {
        return;
      }
      this.showNavbar = window.scrollY < this.lastScrollPosition;
      this.lastScrollPosition = window.scrollY;
    },
  },
};
</script>
<template>
  <nav
    class="header sticky top-0 flex justify-between z-40 font-robo uppercase py-5 bg-ra-black shadow-2xl"
    :class="{ 'is-hidden': !showNavbar }"
  >
    <div class="">
      <router-link to="/">
        <img class="w-20" alt="Logo banner" src="../assets/dark-logo-1.png" />
      </router-link>
    </div>
    <ul role="list" class="rounded-sm flex items-center navMenu">
      <li class="flex">
        <router-link
          to="/about"
          class="py-6 px-12 rounded-bl-sm rounded-tl-sm hover:text-ra-gold hover:font-bold"
        >
          About
        </router-link>
      </li>
      <li class="flex">
        <router-link
          to="/projects"
          class="py-6 px-12 hover:text-ra-gold hover:font-bold"
        >
          Projects
        </router-link>
      </li>
      <li class="flex">
        <router-link
          to="/services"
          class="py-6 px-12 hover:text-ra-gold hover:font-bold"
        >
          Services
        </router-link>
      </li>
      <li class="flex">
        <router-link
          to="/contact"
          class="py-6 px-12 rounded-br-sm rounded-tr-sm hover:text-ra-gold hover:font-bold"
        >
          Contact
        </router-link>
      </li>
    </ul>
    <div class="flex items-center">
      <a
        href="/contact"
        class="flex py-6 px-12 text-ra-gold rounded-sm hover:bg-ra-gold hover:text-ra-dark hover:font-bold"
      >
        Hire Me
      </a>
    </div>
  </nav>
</template>
<style>
.navMenu li a.router-link-active {
  color: #f28907;
  font-weight: bold;
  text-decoration: underline;
  font-size: 16px;
}
.header {
  transform: translateY(0);
  transition: transform 300ms linear;
}

.header.is-hidden {
  transform: translateY(-100%);
}
</style>
