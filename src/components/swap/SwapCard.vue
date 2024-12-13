```vue
<template>
  <div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 shadow-xl">
    <SwapHeader />

    <div class="relative space-y-8">
      <TokenInput
        label="From"
        :balance="`Balance: ${fromToken.balance}`"
        v-model="fromAmount"
        :token-icon="fromToken.icon"
        :token-symbol="fromToken.symbol"
        :usd-value="fromUsdValue"
        show-percentages
        @select-token="showFromTokenList = true"
        @select-percentage="selectPercentage"
      />

      <div class="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
        <SwapArrow @click="switchTokens" />
      </div>

      <TokenInput
        label="To"
        :balance="`Balance: ${toToken.balance}`"
        v-model="toAmount"
        :token-icon="toToken.icon"
        :token-symbol="toToken.symbol"
        :usd-value="toUsdValue"
        @select-token="showToTokenList = true"
      />
    </div>

    <div v-if="showSwapInfo" class="mt-6 mb-6">
      <SwapInfo
        :rate="rate"
        :minimum-received="minimumReceived"
        :price-impact="priceImpact"
        :slippage-tolerance="slippageTolerance"
        :lp-fee="lpFee"
        :route="route"
        @show-route="showRouteModal = true"
      />
    </div>

    <BaseButton full-width>Connect Wallet</BaseButton>

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

    <SwapRouteModal
      :show="showRouteModal"
      :from-token="fromToken"
      :to-token="toToken"
      @close="showRouteModal = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import SwapHeader from './SwapHeader.vue'
import TokenInput from './TokenInput.vue'
import SwapArrow from './SwapArrow.vue'
import SwapInfo from './SwapInfo.vue'
import BaseButton from '../ui/BaseButton.vue'
import TokenListModal from './modals/TokenListModal.vue'
import SwapRouteModal from './modals/SwapRouteModal.vue'

// State
const fromAmount = ref('')
const toAmount = ref('')
const showFromTokenList = ref(false)
const showToTokenList = ref(false)
const showRouteModal = ref(false)

// Token Data
const fromToken = ref({
  symbol: 'NULS',
  icon: 'https://app.nulswap.com/tokens/NULS.svg',
  balance: '335.711',
  name: 'NULS Token'
})

const toToken = ref({
  symbol: 'USDT',
  icon: 'https://nuls-cf.oss-us-west-1.aliyuncs.com/icon/USDTN.png',
  balance: '919.106',
  name: 'Tether USD'
})

// Computed Values
const fromUsdValue = computed(() => {
  return fromAmount.value ? `$${(Number(fromAmount.value) * 0.53).toFixed(2)}` : undefined
})

const toUsdValue = computed(() => {
  return toAmount.value ? `$${(Number(toAmount.value) * 1.00).toFixed(2)}` : undefined
})

const showSwapInfo = computed(() => {
  return fromAmount.value !== '' || toAmount.value !== ''
})

// Swap Info Data
const rate = ref('1 NULS ≈ 1.89737 USDT')
const minimumReceived = ref('0.4791 USDT')
const priceImpact = ref('<0.01%')
const slippageTolerance = ref('0.5%')
const lpFee = ref('0.0025 NULS')
const route = ref('NULS > USDT')

// Methods
const selectPercentage = (percent: number) => {
  fromAmount.value = ((Number(fromToken.value.balance) * percent) / 100).toString()
}

const selectFromToken = (token: any) => {
  fromToken.value = token
  showFromTokenList.value = false
}

const selectToToken = (token: any) => {
  toToken.value = token
  showToTokenList.value = false
}

const switchTokens = () => {
  const tempToken = { ...fromToken.value }
  fromToken.value = { ...toToken.value }
  toToken.value = tempToken

  const tempAmount = fromAmount.value
  fromAmount.value = toAmount.value
  toAmount.value = tempAmount
}
</script>
```