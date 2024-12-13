<template>
  <BaseCard>
    <div class="flex justify-between items-center mb-6">
      <div>
        <h3 class="text-xl font-semibold text-white">Stake NULS</h3>
        <p class="text-gray-400">Earn rewards by staking NULS</p>
      </div>
      <img src="https://app.nulswap.com/tokens/NULS.svg" class="h-12 w-12" alt="NULS Logo" />
    </div>

    <div class="space-y-4">
      <TokenInput
        label="Amount"
        balance="0.0 NULS"
        v-model="amount"
        :token-icon="tokenIcon"
        token-symbol="NULS"
      />

      <BaseButton full-width>Connect Wallet</BaseButton>
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import TokenInput from '@/components/swap/TokenInput.vue'

const tokenIcon = 'https://app.nulswap.com/tokens/NULS.svg'
const amount = ref('')
</script>