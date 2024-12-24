<template>
  <button
    class="btn-primary relative overflow-hidden group"
    :class="{
      'w-full': fullWidth,
      'opacity-50 cursor-not-allowed hover:scale-100': disabled
    }"
    :disabled="disabled"
  >
    <div class="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
    <span class="relative z-10">
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
defineProps<{
  fullWidth?: boolean
  disabled?: boolean
}>()
</script>