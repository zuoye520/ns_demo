<template>
  <div>
    <Button
      v-if="!wallet.isConnected"
      variant="primary"
      @click="wallet.connect"
    >
      Connect Wallet
    </Button>

    <Button
      v-else
      variant="secondary"
      @click="showWalletModal = true"
    >
      <template #icon>
        <div class="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center">
          <wallet-icon class="w-3.5 h-3.5 text-primary" />
        </div>
      </template>
      {{ formatAddress(wallet.address) }}
      <chevron-down-icon class="w-4 h-4 text-gray-400" />
    </Button>

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
import Button from '../ui/Button.vue'
import WalletModal from './WalletModal.vue'

const wallet = useWalletStore()
const showWalletModal = ref(false)

function formatAddress(address: string): string {
  if (!address) return ''
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}
</script>