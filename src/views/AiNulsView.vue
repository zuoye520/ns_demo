<template>
  <div class="space-y-6">
    <div class="mb-8">
      <h2 class="text-2xl font-bold text-white mb-2">Stake</h2>
      <p class="text-gray-400">Stake your tokens to earn rewards</p>
    </div>

    <div class="space-y-6">
      <StakeCard
        title="Stake NULS Earn NULS"
        description="Earn NULS rewards by staking NULS"
        :total-locked="908034.17"
        :balance="18.28107808"
        :min-stake="100"
        token="NULS"
        :current-apr="8.68"
        :nswap-apr="1.65"
        :nuls-staked="85.96"
        :nuls-earned="0.26"
        :nswap-earned="4.82"
        show-compound
      />

      <StakeCard
        title="Stake NULS Earn NSWAP"
        description="Earn NSWAP rewards by staking NULS"
        :total-locked="28144.69"
        :balance="18.28107808"
        :min-stake="100"
        token="NULS"
        :current-apr="7.4"
        :nswap-earned="0"
        :nuls-staked="0"
        show-get-reward
      />

      <StakeCard
        title="Stake NSWAP Earn NULS"
        description="Earn NULS rewards by staking NSWAP"
        :total-locked="976101.97"
        :balance="0"
        :min-stake="1"
        token="NSWAP"
        :current-apr="0"
        :nswap-staked="0"
        :nuls-earned="0"
        :farmed-nswap="0"
        :claimable-nswap="0"
        show-harvest
        show-get-reward
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import StakeCard from '@/components/stake/StakeCard.vue'
</script>
