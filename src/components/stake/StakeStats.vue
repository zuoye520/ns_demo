<template>
  <BaseCard>
    <h3 class="text-xl font-semibold text-white mb-6">Your Stats</h3>
    <div class="space-y-4">
      <StakeStatItem label="Total Staked" value="0 NULS" />
      <StakeStatItem label="APR" value="0%" />
      <StakeStatItem label="Rewards Earned" value="0 NULS" />
    </div>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
import StakeStatItem from './StakeStatItem.vue'
</script>