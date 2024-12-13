```vue
<template>
  <BaseModal :show="show" @close="$emit('close')">
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-xl font-bold text-white">Manage Tokens</h3>
        <button 
          class="text-gray-400 hover:text-white"
          @click="$emit('close')"
        >
          <x-mark-icon class="h-5 w-5" />
        </button>
      </div>

      <div class="space-y-4">
        <div>
          <h4 class="text-sm font-medium text-gray-400 mb-2">Custom Tokens</h4>
          <div class="relative">
            <input
              v-model="tokenAddress"
              type="text"
              placeholder="Enter token address"
              class="w-full px-4 py-3 rounded-xl bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button 
              class="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1.5 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors"
              @click="importToken"
            >
              Import
            </button>
          </div>
        </div>

        <div>
          <h4 class="text-sm font-medium text-gray-400 mb-2">Imported Tokens</h4>
          <div v-if="importedTokens.length === 0" class="text-center py-8 text-gray-400">
            No imported tokens
          </div>
          <div v-else class="space-y-2">
            <div
              v-for="token in importedTokens"
              :key="token.address"
              class="flex items-center justify-between p-3 rounded-xl bg-gray-700/30"
            >
              <div class="flex items-center">
                <img :src="token.icon" class="w-8 h-8 rounded-full" :alt="token.symbol">
                <div class="ml-3">
                  <div class="text-white font-medium">{{ token.symbol }}</div>
                  <div class="text-sm text-gray-400">{{ token.name }}</div>
                </div>
              </div>
              <button 
                class="text-red-400 hover:text-red-300 transition-colors"
                @click="removeToken(token)"
              >
                <trash-icon class="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { XMarkIcon, TrashIcon } from '@heroicons/vue/24/outline'
import BaseModal from '@/components/ui/BaseModal.vue'

defineProps<{
  show: boolean
}>()

defineEmits<{
  (e: 'close'): void
}>()

const tokenAddress = ref('')
const importedTokens = ref([])

const importToken = () => {
  // Implement token import logic
}

const removeToken = (token: any) => {
  // Implement token removal logic
}
</script>
```