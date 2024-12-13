<template>
  <div class="space-y-2">
    <div v-for="pool in pools" :key="pool.id" class="grid grid-cols-5 gap-4 text-white">
      {{ pool }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  pools: any[]
}>()
</script>