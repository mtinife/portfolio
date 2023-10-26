<script setup>
import { ref } from "vue";

const props = defineProps({
  title: { type: String, required: true },
  ariaTitle: { type: String, required: true },
});

const showPanel = ref(false);

const togglePanel = (event) => {
  showPanel.value = !showPanel.value;
};
</script>
<template>
  <div class="panel">
    <button @click.prevent="togglePanel">{{ title }}</button>
    <div v-if="showPanel" class="content">
      <slot></slot>
    </div>
  </div>
</template>
