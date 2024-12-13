<template>
  <div class="flex justify-between">
    <span class="text-gray-400">{{ label }}</span>
    <span class="text-white">{{ value }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string
  value: string
}>()
</script>