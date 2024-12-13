<template>
  <div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-4 border border-gray-700/50">
    <div class="flex justify-between mb-3">
      <span class="text-gray-400 text-sm">{{ label }}</span>
      <span class="text-gray-400 text-sm">{{ balance }}</span>
    </div>
    <div class="flex flex-col gap-4">
      <div class="flex items-center">
        <input
          type="text"
          class="bg-transparent text-white text-2xl w-full focus:outline-none font-medium placeholder-gray-600"
          :placeholder="placeholder || '0.0'"
          :value="modelValue"
          @input="$emit('update:modelValue', $event.target.value)"
        />
        <button 
          class="token-select-btn flex items-center bg-gray-700/50 hover:bg-gray-600/50 rounded-xl px-4 py-2.5 ml-2 transition-all duration-200 border border-gray-600/50"
          @click="$emit('select-token')"
        >
          <img 
            :src="tokenIcon" 
            class="h-6 w-6 rounded-full" 
            :alt="tokenSymbol"
          />
          <span class="text-white ml-2 font-medium">{{ tokenSymbol }}</span>
          <chevron-down-icon class="h-4 w-4 text-gray-400 ml-2" />
        </button>
      </div>
      
      <div v-if="showPercentages" class="flex gap-2">
        <button
          v-for="percent in [25, 50, 75, 100]"
          :key="percent"
          class="px-3 py-1 rounded-lg text-sm font-medium bg-primary/10 hover:bg-primary/20 text-primary transition-all duration-200"
          @click="$emit('select-percentage', percent)"
        >
          {{ percent === 100 ? 'MAX' : `${percent}%` }}
        </button>
      </div>

      <div v-if="usdValue" class="text-sm text-gray-400">
        ~{{ usdValue }} USD
      </div>
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.token-select-btn:hover {
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
}
</style>