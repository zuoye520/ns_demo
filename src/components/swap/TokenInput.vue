```vue
<template>
  <div class="card p-4">
    <div class="flex justify-between mb-3">
      <span class="text-gray-400 text-sm">{{ label }}</span>
      <span class="text-gray-400 text-sm">{{ balance }}</span>
    </div>
    <div class="flex items-center gap-3">
      <input
        type="text"
        class="flex-1 bg-transparent text-2xl text-white focus:outline-none placeholder-gray-600"
        :placeholder="placeholder || '0.0'"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
      />
      <button 
        class="token-select-btn flex items-center gap-2 px-4 py-2 rounded-xl 
               bg-background-dark/80 hover:bg-background-dark transition-all duration-200"
        @click="$emit('select-token')"
      >
        <img 
          :src="tokenIcon" 
          class="h-6 w-6 rounded-full" 
          :alt="tokenSymbol"
        />
        <span class="text-white font-medium">{{ tokenSymbol }}</span>
        <chevron-down-icon class="h-4 w-4 text-gray-400" />
      </button>
    </div>
    
    <div v-if="showPercentages" class="flex gap-2 mt-4">
      <button
        v-for="percent in [25, 50, 75, 100]"
        :key="percent"
        class="px-3 py-1 rounded-lg text-sm font-medium bg-primary/10 
               hover:bg-primary/20 text-primary transition-all duration-200"
        @click="$emit('select-percentage', percent)"
      >
        {{ percent === 100 ? 'MAX' : `${percent}%` }}
      </button>
    </div>

    <div v-if="usdValue" class="text-sm text-gray-400 mt-2">
      ~{{ usdValue }} USD
    </div>
  </div>
</template>

<script setup>
import { ChevronDownIcon } from '@heroicons/vue/24/outline'

defineProps({
  label: String,
  balance: String,
  placeholder: String,
  modelValue: [String, Number],
  tokenIcon: String,
  tokenSymbol: String,
  showPercentages: Boolean,
  usdValue: String
})

defineEmits(['update:modelValue', 'select-token', 'select-percentage'])
</script>

<style scoped>
.token-select-btn {
  border: 1px solid rgba(255, 255, 255, 0.05);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.token-select-btn:hover {
  border-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
</style>
```