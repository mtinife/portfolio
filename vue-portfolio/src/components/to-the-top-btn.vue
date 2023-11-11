<script>
import { defineComponent } from "vue";
export default defineComponent({
  mounted() {
    window.addEventListener("scroll", this.handleScroll);
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const scrollBtn = this.$refs.scrollTopButton;
      if (window.scrollY > 0) {
        scrollBtn.classList.remove("invisible");
      } else {
        scrollBtn.classList.add("invisible");
      }
    },
  },
});
</script>
<template>
  <div
    ref="scrollTopButton"
    class="sticky w-full flex justify-end bottom-0 pb-3 pr-5 transition"
  >
    <div class="text-gray-400 hover:text-blue-400 transition">
      <button>scroll to top</button>
    </div>
  </div>
</template>
