```vue
<template>
  <div class="space-y-3 text-sm">
    <div class="flex justify-between items-center text-gray-400">
      <div class="flex items-center group">
        <span>Price</span>
        <info-circle-icon class="h-4 w-4 ml-1 cursor-help opacity-50 group-hover:opacity-100 transition-opacity" />
      </div>
      <div class="flex items-center text-white">
        <span>{{ rate }}</span>
        <button class="ml-2 p-1 hover:bg-gray-700/50 rounded-lg transition-all duration-200">
          <arrow-path-icon class="h-4 w-4 text-gray-400 hover:text-primary transition-colors" />
        </button>
      </div>
    </div>

    <div class="flex justify-between items-center text-gray-400">
      <div class="flex items-center group">
        <span>Slippage Tolerance</span>
        <info-circle-icon class="h-4 w-4 ml-1 cursor-help opacity-50 group-hover:opacity-100 transition-opacity" />
      </div>
      <div class="flex items-center text-white">
        <span>{{ slippageTolerance }}</span>
        <button class="ml-2 p-1 hover:bg-gray-700/50 rounded-lg transition-all duration-200">
          <pencil-icon class="h-4 w-4 text-gray-400 hover:text-primary transition-colors" />
        </button>
      </div>
    </div>

    <div class="flex justify-between items-center text-gray-400">
      <div class="flex items-center group">
        <span>Minimum received</span>
        <info-circle-icon class="h-4 w-4 ml-1 cursor-help opacity-50 group-hover:opacity-100 transition-opacity" />
      </div>
      <span class="text-white">{{ minimumReceived }}</span>
    </div>

    <div class="flex justify-between items-center text-gray-400">
      <div class="flex items-center group">
        <span>Price Impact</span>
        <info-circle-icon class="h-4 w-4 ml-1 cursor-help opacity-50 group-hover:opacity-100 transition-opacity" />
      </div>
      <span class="text-green-400">{{ priceImpact }}</span>
    </div>

    <div class="flex justify-between items-center text-gray-400">
      <div class="flex items-center group">
        <span>Liquidity Provider Fee</span>
        <info-circle-icon class="h-4 w-4 ml-1 cursor-help opacity-50 group-hover:opacity-100 transition-opacity" />
      </div>
      <span class="text-white">{{ lpFee }}</span>
    </div>

    <div class="flex justify-between items-center text-gray-400">
      <div class="flex items-center group">
        <span>Route</span>
        <info-circle-icon class="h-4 w-4 ml-1 cursor-help opacity-50 group-hover:opacity-100 transition-opacity" />
      </div>
      <div class="flex items-center text-white">
        <span>{{ route }}</span>
        <button 
          class="ml-2 p-1 hover:bg-gray-700/50 rounded-lg transition-all duration-200"
          @click="$emit('show-route')"
        >
          <magnifying-glass-icon class="h-4 w-4 text-gray-400 hover:text-primary transition-colors" />
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { 
  InformationCircleIcon as InfoCircleIcon,
  ArrowPathIcon,
  PencilIcon,
  MagnifyingGlassIcon
} from '@heroicons/vue/24/outline'

defineProps<{
  rate: string
  minimumReceived: string
  priceImpact: string
  slippageTolerance: string
  lpFee: string
  route: string
}>()

defineEmits<{
  (e: 'show-route'): void
}>()
</script>
```