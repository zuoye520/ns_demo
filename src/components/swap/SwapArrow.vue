<template>
  <div class="flex justify-center -my-4">
    <button 
      class="swap-arrow-btn bg-background-dark/80 hover:bg-background-dark p-2 rounded-xl 
             border border-white/5 w-10 h-10 flex items-center justify-center 
             transition-all duration-200 shadow-card hover:shadow-lg"
      @click="$emit('click')"
    >
      <arrow-down-icon class="h-5 w-5 text-primary" />
    </button>
  </div>
</template>

<script setup lang="ts">
import { ArrowDownIcon } from '@heroicons/vue/24/outline'

defineEmits<{
  (e: 'click'): void
}>()
</script>


<style scoped>
.swap-arrow-btn {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.swap-arrow-btn:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}
</style>
```