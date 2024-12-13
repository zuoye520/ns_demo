```vue
<template>
  <div>
    <button
      v-if="!wallet.isConnected"
      class="base-button text-white px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200"
      @click="wallet.connect"
    >
      Connect Wallet
    </button>

    <button
      v-else
      class="wallet-address-btn flex items-center gap-2 bg-gray-800/50 hover:bg-gray-700/50 rounded-xl px-4 py-2 transition-all duration-200 border border-gray-700/50"
      @click="showWalletModal = true"
    >
      <div class="flex items-center gap-2">
        <div class="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
          <wallet-icon class="w-3.5 h-3.5 text-primary" />
        </div>
        <span class="text-white font-medium">{{ formatAddress(wallet.address) }}</span>
      </div>
      <chevron-down-icon class="w-4 h-4 text-gray-400" />
    </button>

    <WalletModal
      :show="showWalletModal"
      @close="showWalletModal = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { WalletIcon, ChevronDownIcon } from '@heroicons/vue/24/outline'
import { useWalletStore } from '@/stores/wallet'
import WalletModal from './WalletModal.vue'

const wallet = useWalletStore()
const showWalletModal = ref(false)

function formatAddress(address: string): string {
  if (!address) return ''
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}
</script>

<style scoped>
.base-button {
  background: linear-gradient(135deg, #00e789, #00cc7a);
  box-shadow: 0 4px 12px rgba(0, 231, 137, 0.2);
}

.base-button:hover {
  box-shadow: 0 6px 16px rgba(0, 231, 137, 0.3);
}

.wallet-address-btn {
  backdrop-filter: blur(8px);
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
}

.wallet-address-btn:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}
</style>
```