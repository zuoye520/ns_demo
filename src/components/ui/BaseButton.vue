<template>
  <button
    class="base-button text-white px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200"
    :class="{
      'w-full': fullWidth
    }"
  >
    <slot></slot>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  fullWidth?: boolean
}>()
</script>

<style scoped>
.base-button {
  background: linear-gradient(135deg, #00e789, #00cc7a);
  box-shadow: 
    0 4px 12px rgba(0, 231, 137, 0.2),
    0 2px 4px rgba(0, 231, 137, 0.1);
}

.base-button:hover {
  transform: translateY(-1px);
  box-shadow: 
    0 6px 16px rgba(0, 231, 137, 0.3),
    0 3px 6px rgba(0, 231, 137, 0.2);
}
</style>