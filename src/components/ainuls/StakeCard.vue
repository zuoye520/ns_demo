```vue
<template>
  <div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-gray-600/50 transition-all duration-200">
    <!-- Header -->
    <div class="text-center mb-6">
      <div class="bg-primary/10 text-primary text-sm py-2 px-4 rounded-lg inline-block mb-4">
        Total Locked: {{ totalLocked.toLocaleString() }} {{ token }}
      </div>
      <h3 class="text-xl font-bold text-white mb-2">{{ title }}</h3>
      <p class="text-gray-400 text-sm">{{ description }}</p>
    </div>

    <!-- Stake Input -->
    <div class="space-y-3 mb-6">
      <div class="flex justify-between items-center">
        <span class="text-gray-400 text-sm">Balance: {{ balance }}</span>
        <button class="text-primary hover:text-primary-dark text-sm font-medium transition-colors">
          Max
        </button>
      </div>

      <div class="relative">
        <input
          type="text"
          :placeholder="`Minimum to stake: ${minStake} ${token}`"
          class="w-full px-4 py-3 rounded-xl bg-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
        />
        <button class="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-lg bg-primary text-white text-sm font-medium hover:bg-primary-dark transition-colors">
          STAKE
        </button>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="flex flex-wrap gap-2 mb-6">
      <template v-if="showCompound">
        <button class="action-button py-1.5 text-xs">
          COMPOUND
        </button>
      </template>
      <template v-if="showGetReward">
        <button class="action-button py-1.5 text-xs">
          GET REWARD
        </button>
      </template>
      <template v-if="showHarvest">
        <button class="action-button py-1.5 text-xs">
          HARVEST
        </button>
      </template>
      <button class="action-button py-1.5 text-xs">
        UNSTAKE ALL
      </button>
    </div>

    <!-- Stats -->
    <div class="bg-gray-900/30 rounded-xl p-4">
      <h4 class="text-lg font-medium text-white mb-4">Your Stats</h4>
      <div class="space-y-3">
        <div v-if="currentApr" class="stat-row">
          <span>Current APR:</span>
          <span class="text-primary font-medium">
            {{ currentApr }}% {{ token }} 
            <template v-if="nswapApr">+ {{ nswapApr }}% NSWAP</template>
          </span>
        </div>
        <div v-if="nulsStaked" class="stat-row">
          <span>${token} Staked:</span>
          <span>{{ nulsStaked }}</span>
        </div>
        <div v-if="nulsEarned" class="stat-row">
          <span>${token} Earned:</span>
          <span>{{ nulsEarned }}</span>
        </div>
        <div v-if="nswapEarned" class="stat-row">
          <span>$NSWAP Earned:</span>
          <span>{{ nswapEarned }}</span>
        </div>
        <div v-if="nswapStaked" class="stat-row">
          <span>$NSWAP Staked:</span>
          <span>{{ nswapStaked }}</span>
        </div>
        <div v-if="farmedNswap" class="stat-row">
          <span>Farmed vNSWAP:</span>
          <span>{{ farmedNswap }} vNSWAP</span>
        </div>
        <div v-if="claimableNswap" class="stat-row">
          <span>Claimable vNSWAP:</span>
          <span>{{ claimableNswap }} vNSWAP</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  description: string
  totalLocked: number
  balance: number
  minStake: number
  token: string
  currentApr?: number
  nswapApr?: number
  nulsStaked?: number
  nulsEarned?: number
  nswapEarned?: number
  nswapStaked?: number
  farmedNswap?: number
  claimableNswap?: number
  showCompound?: boolean
  showGetReward?: boolean
  showHarvest?: boolean
}>()
</script>

<style scoped>
.action-button {
  @apply flex-1 px-3 rounded-lg border border-primary text-primary hover:bg-primary/10 transition-colors font-medium;
}

.stat-row {
  @apply flex justify-between items-center;
}

.stat-row > span:first-child {
  @apply text-gray-400;
}

.stat-row > span:last-child {
  @apply text-white;
}
</style>
```