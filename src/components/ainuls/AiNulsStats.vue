<template>
  <div class="bg-gray-700 rounded-lg p-6">
    <div class="space-y-4">
      <AiNulsStatItem label="Price" value="$0.00" />
      <AiNulsStatItem label="Market Cap" value="$0.00" />
      <AiNulsStatItem label="Total Supply" value="0 aiNULS" />
    </div>
  </div>
</template>

<script setup lang="ts">
import AiNulsStatItem from './AiNulsStatItem.vue'
</script>