<template>
  <BaseModal :show="show" @close="$emit('close')">
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-xl font-bold text-white">Route</h3>
        <button 
          class="text-gray-400 hover:text-white"
          @click="$emit('close')"
        >
          <x-mark-icon class="h-5 w-5" />
        </button>
      </div>

      <div class="flex items-center justify-between space-x-4">
        <div class="flex-shrink-0">
          <img :src="fromToken.icon" class="w-12 h-12 rounded-full" :alt="fromToken.symbol">
        </div>
        
        <div class="flex-1 flex items-center justify-center space-x-2">
          <div class="h-0.5 flex-1 bg-gray-600 relative">
            <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-gray-700 rounded-lg px-2 py-1">
              <span class="text-sm text-white">V2</span>
            </div>
          </div>
        </div>

        <div class="flex items-center space-x-1">
          <img :src="fromToken.icon" class="w-8 h-8 rounded-full" :alt="fromToken.symbol">
          <img :src="toToken.icon" class="w-8 h-8 rounded-full" :alt="toToken.symbol">
        </div>
        
        <div class="flex-1 flex items-center justify-center">
          <div class="h-0.5 w-full bg-gray-600"></div>
        </div>

        <div class="flex-shrink-0">
          <img :src="toToken.icon" class="w-12 h-12 rounded-full" :alt="toToken.symbol">
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import { XMarkIcon } from '@heroicons/vue/24/outline'
import BaseModal from '@/components/ui/BaseModal.vue'

defineProps<{
  show: boolean
  fromToken: {
    symbol: string
    icon: string
  }
  toToken: {
    symbol: string
    icon: string
  }
}>()

defineEmits<{
  (e: 'close'): void
}>()
</script>