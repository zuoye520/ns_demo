```vue
<template>
  <BaseModal :show="show" @close="$emit('close')" max-width="md">
    <div class="p-6">
      <div class="flex items-center mb-6">
        <button 
          class="p-2 -ml-2 rounded-lg text-gray-400 hover:text-white hover:bg-gray-700/50 transition-all duration-200"
          @click="$emit('close')"
        >
          <arrow-left-icon class="h-5 w-5" />
        </button>
        <div class="ml-2">
          <h3 class="text-xl font-bold text-white">NULS-USDTN LP</h3>
          <p class="text-sm text-gray-400">Receive LP tokens and earn 0.25% trading fees</p>
        </div>
      </div>

      <div class="space-y-4">
        <TokenInput
          label="NULS"
          balance="Balance: 30.7613"
          v-model="nulsAmount"
          :token-icon="nulsIcon"
          token-symbol="NULS"
          :usd-value="'~0.54 USD'"
          show-percentages
          @select-token="showFromTokenList = true"
          @select-percentage="selectPercentage"
        />

        <div class="flex justify-center">
          <plus-icon class="h-5 w-5 text-gray-400" />
        </div>

        <TokenInput
          label="USDTN"
          balance="Balance: 0"
          v-model="usdtAmount"
          :token-icon="usdtIcon"
          token-symbol="USDTN"
          :usd-value="'~0.54 USD'"
          @select-token="showToTokenList = true"
        />
      </div>

      <div class="mt-6 p-4 rounded-xl bg-gray-900/50">
        <h4 class="text-white font-medium mb-4">Prices and Share</h4>
        <div class="space-y-2">
          <div class="flex justify-between">
            <span class="text-gray-400">USDTN per NULS</span>
            <span class="text-white">0.541936</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-400">NULS per USDTN</span>
            <span class="text-white">1.84524</span>
          </div>
          <div class="flex justify-between">
            <span class="text-gray-400">Share in Trading Pair</span>
            <span class="text-white">&lt;0.01%</span>
          </div>
        </div>
      </div>

      <button 
        class="w-full px-4 py-3 rounded-xl bg-primary text-white hover:bg-primary-dark transition-all duration-200 mt-6"
        :class="{'opacity-50 cursor-not-allowed': !canSupply}"
      >
        {{ supplyButtonText }}
      </button>

      <p class="mt-6 text-sm text-gray-400 text-center">
        By adding liquidity you'll earn 0.25% of all trades on this pair proportional to your share in the trading pair. Fees are added to your share in the pair, accrue in real time and can be claimed by withdrawing your liquidity.
      </p>
    </div>

    <TokenListModal
      :show="showFromTokenList"
      @close="showFromTokenList = false"
      @select="selectFromToken"
    />

    <TokenListModal
      :show="showToTokenList"
      @close="showToTokenList = false"
      @select="selectToToken"
    />
  </BaseModal>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { ArrowLeftIcon, PlusIcon } from '@heroicons/vue/24/outline'
import BaseModal from '@/components/ui/BaseModal.vue'
import TokenInput from '@/components/swap/TokenInput.vue'
import TokenListModal from '@/components/swap/modals/TokenListModal.vue'

defineProps<{
  show: boolean
}>()

defineEmits<{
  (e: 'close'): void
}>()

const nulsAmount = ref('')
const usdtAmount = ref('')
const nulsIcon = 'https://app.nulswap.com/tokens/NULS.svg'
const usdtIcon = 'https://nuls-cf.oss-us-west-1.aliyuncs.com/icon/USDTN.png'
const showFromTokenList = ref(false)
const showToTokenList = ref(false)

const canSupply = computed(() => {
  return nulsAmount.value !== '' && usdtAmount.value !== ''
})

const supplyButtonText = computed(() => {
  if (!nulsAmount.value || !usdtAmount.value) return 'Enter an amount'
  return 'Supply'
})

const selectPercentage = (percent: number) => {
  nulsAmount.value = ((30.7613 * percent) / 100).toString()
}

const selectFromToken = (token: any) => {
  // Handle from token selection
}

const selectToToken = (token: any) => {
  // Handle to token selection
}
</script>
```