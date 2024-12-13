```vue
<template>
  <BaseModal :show="show" @close="$emit('close')" max-width="md">
    <div class="p-6">
      <!-- Wallet Address -->
      <div class="flex items-center justify-between mb-6">
        <div class="flex items-center gap-3">
          <div class="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
            <wallet-icon class="w-5 h-5 text-primary" />
          </div>
          <div>
            <div class="text-sm text-gray-400">Connected with NULS</div>
            <div class="flex items-center gap-2">
              <span class="text-white font-medium">{{ formatAddress(wallet.address) }}</span>
              <button 
                class="p-1 hover:bg-gray-700/50 rounded-lg transition-colors"
                @click="copyAddress"
                title="Copy Address"
              >
                <document-duplicate-icon class="w-4 h-4 text-gray-400 hover:text-primary" />
              </button>
            </div>
          </div>
        </div>
        <button 
          class="text-gray-400 hover:text-white"
          @click="$emit('close')"
        >
          <x-mark-icon class="h-5 w-5" />
        </button>
      </div>

      <!-- Balance -->
      <div class="bg-gray-800/50 backdrop-blur-sm rounded-xl p-4 mb-6 border border-gray-700/50">
        <div class="text-gray-400 text-sm mb-1">Balance</div>
        <div class="text-2xl font-bold text-white">
          {{ wallet.balance }} NULS
        </div>
      </div>

      <!-- Menu Items -->
      <div class="space-y-2">
        <button 
          class="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-gray-700/50 transition-colors text-white"
          @click="showTransactions = true"
        >
          <div class="flex items-center gap-3">
            <clock-icon class="w-5 h-5 text-gray-400" />
            <span>Recent Transactions</span>
          </div>
          <chevron-right-icon class="w-5 h-5 text-gray-400" />
        </button>

        <button 
          class="w-full flex items-center justify-between px-4 py-3 rounded-xl hover:bg-gray-700/50 transition-colors text-red-400"
          @click="disconnect"
        >
          <div class="flex items-center gap-3">
            <arrow-right-on-rectangle-icon class="w-5 h-5" />
            <span>Disconnect</span>
          </div>
        </button>
      </div>
    </div>

    <!-- Recent Transactions Modal -->
    <SwapHistoryModal
      :show="showTransactions"
      @close="showTransactions = false"
    />
  </BaseModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { 
  XMarkIcon, 
  WalletIcon,
  DocumentDuplicateIcon,
  ClockIcon,
  ChevronRightIcon,
  ArrowRightOnRectangleIcon
} from '@heroicons/vue/24/outline'
import { useWalletStore } from '@/stores/wallet'
import BaseModal from '../ui/BaseModal.vue'
import SwapHistoryModal from '../swap/modals/SwapHistoryModal.vue'

const wallet = useWalletStore()
const showTransactions = ref(false)

defineProps<{
  show: boolean
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

function formatAddress(address: string): string {
  if (!address) return ''
  return `${address.slice(0, 6)}...${address.slice(-4)}`
}

function copyAddress() {
  if (wallet.address) {
    navigator.clipboard.writeText(wallet.address)
  }
}

function disconnect() {
  wallet.disconnect()
  emit('close')
}
</script>
```