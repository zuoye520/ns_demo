<template>
  <div class="space-y-6">
    <div class="mb-8">
      <h2 class="text-2xl font-bold text-white mb-2">Stake</h2>
      <p class="text-gray-400">Stake your tokens to earn rewards</p>
    </div>

    <div class="space-y-6">
      <StakeCard
        title="Stake NSWAP"
        description="Earn rewards by staking NSWAP"
        :total-locked="33103157.29"
        :balance="0"
        :min-stake="100"
        token="NSWAP"
        :current-apr="15.10"
        :nswap-staked="0"
        :nswap-earned="0"
        show-compound
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import StakeCard from '@/components/stake/StakeCard.vue'
</script>
