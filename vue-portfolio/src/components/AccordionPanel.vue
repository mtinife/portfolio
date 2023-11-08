<script setup>
import { ref } from "vue";

// eslint-disable-next-line
const props = defineProps({
  count: { type: String, required: true },
  title: { type: String, required: true },
  ariaTitle: { type: String, required: true },
});

const showPanel = ref(false);
// eslint-disable-next-line
const togglePanel = (event) => {
  showPanel.value = !showPanel.value;
};
</script>
<template>
  <div class="panel">
    <button @click.prevent="togglePanel">
      <span>{{ count }}</span>
      <span>{{ title }}</span>
      <span>
        <i class="ri-arrow-right-down-line"></i>
      </span>
    </button>
    <div v-if="showPanel" class="content">
      <slot></slot>
    </div>
  </div>
</template>
