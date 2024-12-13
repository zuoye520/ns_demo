```vue
<template>
  <BaseModal :show="show" @close="$emit('close')">
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-xl font-bold text-white">Select a token</h3>
        <button 
          class="text-gray-400 hover:text-white"
          @click="$emit('close')"
        >
          <x-mark-icon class="h-5 w-5" />
        </button>
      </div>

      <div class="relative mb-4">
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search name or paste address"
          class="w-full px-4 py-3 rounded-xl bg-gray-700/50 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <magnifying-glass-icon class="absolute right-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
      </div>

      <div class="flex items-center justify-between mb-4">
        <h4 class="text-sm font-medium text-gray-400">Common tokens</h4>
        <button 
          class="text-primary text-sm hover:underline"
          @click="showManageTokens = true"
        >
          Manage Tokens
        </button>
      </div>

      <div class="space-y-2 max-h-[300px] overflow-y-auto">
        <button
          v-for="token in filteredTokens"
          :key="token.symbol"
          class="w-full flex items-center justify-between p-3 rounded-xl hover:bg-gray-700/50 transition-colors"
          @click="selectToken(token)"
        >
          <div class="flex items-center">
            <img :src="token.icon" class="w-8 h-8 rounded-full" :alt="token.symbol">
            <div class="ml-3 text-left">
              <div class="text-white font-medium">{{ token.symbol }}</div>
              <div class="text-sm text-gray-400">{{ token.name }}</div>
            </div>
          </div>
          <div class="text-right">
            <div class="text-white">{{ token.balance }}</div>
            <div class="text-sm text-gray-400">${{ token.usdValue }}</div>
          </div>
        </button>
      </div>
    </div>

    <ManageTokensModal 
      :show="showManageTokens"
      @close="showManageTokens = false"
    />
  </BaseModal>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { XMarkIcon, MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
import BaseModal from '@/components/ui/BaseModal.vue'
import ManageTokensModal from './ManageTokensModal.vue'

const props = defineProps<{
  show: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
  (e: 'select', token: any): void
}>()

const searchQuery = ref('')
const showManageTokens = ref(false)

const tokens = ref([
  {
    symbol: 'NULS',
    name: 'NULS Token',
    icon: 'https://app.nulswap.com/tokens/NULS.svg',
    balance: '335.711',
    usdValue: '177.92'
  },
  {
    symbol: 'USDT',
    name: 'Tether USD',
    icon: 'https://nuls-cf.oss-us-west-1.aliyuncs.com/icon/USDTN.png',
    balance: '919.106',
    usdValue: '919.10'
  }
])

const filteredTokens = computed(() => {
  if (!searchQuery.value) return tokens.value
  const query = searchQuery.value.toLowerCase()
  return tokens.value.filter(token => 
    token.symbol.toLowerCase().includes(query) || 
    token.name.toLowerCase().includes(query)
  )
})

const selectToken = (token: any) => {
  emit('select', token)
  emit('close')
}
</script>
```