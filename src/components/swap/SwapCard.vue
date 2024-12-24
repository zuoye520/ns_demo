```vue
<template>
  <div class="card p-6 max-w-[480px] mx-auto">
    <SwapHeader 
      @show-settings="showSettings = true"
      @show-history="showHistory = true"
    />

    <div class="space-y-3">
      <TokenInput
        label="From"
        :balance="fromToken?.balance ?? '0'"
        v-model="fromAmount"
        :token-icon="fromToken?.icon"
        :token-symbol="fromToken?.symbol"
        :usd-value="fromUsdValue"
        show-percentages
        @select-token="showFromTokenList = true"
        @select-percentage="selectPercentage"
      />

      <SwapArrow @click="switchTokens" />

      <TokenInput
        label="To"
        :balance="toToken?.balance ?? '0'"
        v-model="toAmount"
        :token-icon="toToken?.icon"
        :token-symbol="toToken?.symbol"
        :usd-value="toUsdValue"
        @select-token="showToTokenList = true"
      />
    </div>

    <SwapInfo
      v-if="showSwapInfo"
      class="mt-4 mb-4"
      :rate="rate"
      :minimum-received="minimumReceived"
      :price-impact="priceImpact"
      :slippage-tolerance="slippageTolerance"
      :lp-fee="lpFee"
      :route="route"
      @show-route="showRouteModal = true"
    />

    <Button 
      class="w-full mt-4"
      size="lg"
    >
      Connect Wallet
    </Button>

    <SwapModals
      :show-from-list="showFromTokenList"
      :show-to-list="showToTokenList"
      :show-route="showRouteModal"
      :show-settings="showSettings"
      :show-history="showHistory"
      :from-token="fromToken"
      :to-token="toToken"
      @close-from-list="showFromTokenList = false"
      @close-to-list="showToTokenList = false"
      @close-route="showRouteModal = false"
      @close-settings="showSettings = false"
      @close-history="showHistory = false"
      @select-from-token="selectFromToken"
      @select-to-token="selectToToken"
    />
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import Button from '@/components/ui/Button.vue'
import SwapHeader from './SwapHeader.vue'
import TokenInput from './TokenInput.vue'
import SwapArrow from './SwapArrow.vue'
import SwapInfo from './SwapInfo.vue'
import SwapModals from './SwapModals.vue'

// State
const fromAmount = ref('')
const toAmount = ref('')
const showFromTokenList = ref(false)
const showToTokenList = ref(false)
const showRouteModal = ref(false)
const showSettings = ref(false)
const showHistory = ref(false)

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
  if (!fromAmount.value) return undefined
  return `$${(Number(fromAmount.value) * 0.53).toFixed(2)}`
})

const toUsdValue = computed(() => {
  if (!toAmount.value) return undefined
  return `$${(Number(toAmount.value) * 1.00).toFixed(2)}`
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
  fromAmount.value = ((Number(fromToken.value?.balance) * percent) / 100).toString()
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