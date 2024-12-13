```vue
<template>
  <BaseModal :show="show" @close="$emit('close')">
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-xl font-bold text-white">Settings</h3>
        <button 
          class="text-gray-400 hover:text-white"
          @click="$emit('close')"
        >
          <x-mark-icon class="h-5 w-5" />
        </button>
      </div>

      <div class="space-y-6">
        <div>
          <h4 class="text-primary font-medium mb-4">SWAPS & LIQUIDITY</h4>
          
          <div class="space-y-6">
            <div>
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center">
                  <span class="text-white">Slippage Tolerance</span>
                  <info-circle-icon class="h-4 w-4 text-gray-400 ml-1" />
                </div>
              </div>
              <div class="flex gap-2">
                <button 
                  v-for="value in ['0.1%', '0.5%', '1.0%']"
                  :key="value"
                  class="px-4 py-2 rounded-xl bg-gray-700/50 text-white hover:bg-gray-600/50 transition-colors"
                  :class="{ 'ring-2 ring-primary': slippage === value }"
                  @click="slippage = value"
                >
                  {{ value }}
                </button>
                <div class="relative flex-1">
                  <input
                    v-model="customSlippage"
                    type="text"
                    class="w-full px-4 py-2 rounded-xl bg-gray-700/50 text-white focus:outline-none focus:ring-2 focus:ring-primary"
                    placeholder="Custom"
                  />
                  <span class="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400">%</span>
                </div>
              </div>
              <p v-if="showWarning" class="text-orange-400 text-sm mt-2">
                Your transaction may be frontrun
              </p>
            </div>

            <div>
              <div class="flex items-center justify-between mb-2">
                <div class="flex items-center">
                  <span class="text-white">Tx deadline (mins)</span>
                  <info-circle-icon class="h-4 w-4 text-gray-400 ml-1" />
                </div>
              </div>
              <input
                v-model="deadline"
                type="number"
                class="w-full px-4 py-2 rounded-xl bg-gray-700/50 text-white focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <div class="flex items-center">
                  <span class="text-white">Disable Multihops</span>
                  <info-circle-icon class="h-4 w-4 text-gray-400 ml-1" />
                </div>
                <ToggleSwitch v-model="disableMultihops" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { XMarkIcon, InformationCircleIcon } from '@heroicons/vue/24/outline'
import BaseModal from '@/components/ui/BaseModal.vue'
import ToggleSwitch from '@/components/ui/ToggleSwitch.vue'

defineProps<{
  show: boolean
}>()

defineEmits<{
  (e: 'close'): void
}>()

const slippage = ref('0.1%')
const customSlippage = ref('')
const deadline = ref(20)
const disableMultihops = ref(false)
const showWarning = ref(true)
</script>
```