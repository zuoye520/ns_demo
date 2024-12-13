```vue
<template>
  <div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-200">
    <div class="flex items-center gap-2 mb-4">
      <div class="flex -space-x-2">
        <img :src="token0Icon" class="w-8 h-8 rounded-full ring-2 ring-gray-800" :alt="token0Symbol">
        <img :src="token1Icon" class="w-8 h-8 rounded-full ring-2 ring-gray-800" :alt="token1Symbol">
      </div>
      <span class="text-lg font-medium text-white">{{ token0Symbol }}/{{ token1Symbol }}</span>
    </div>

    <div class="space-y-4">
      <div class="flex justify-between items-center">
        <span class="text-gray-400">Your Liquidity</span>
        <span class="text-white font-medium">{{ liquidity }}</span>
      </div>
      <div class="flex justify-between items-center">
        <span class="text-gray-400">USD Value</span>
        <span class="text-white font-medium">${{ usdValue }}</span>
      </div>
    </div>

    <div class="flex gap-2 mt-6">
      <button 
        class="flex-1 px-4 py-2 rounded-xl bg-primary/10 text-primary hover:bg-primary/20 transition-colors"
        @click="$emit('remove')"
      >
        Remove
      </button>
      <button 
        class="flex-1 px-4 py-2 rounded-xl bg-primary text-white hover:bg-primary-dark transition-colors"
        @click="$emit('add')"
      >
        Add
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  token0Symbol: string
  token1Symbol: string
  token0Icon: string
  token1Icon: string
  liquidity: string
  usdValue: string
}>()

defineEmits<{
  (e: 'add'): void
  (e: 'remove'): void
}>()
</script>
```