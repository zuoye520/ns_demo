```vue
<template>
  <div class="space-y-6">
    <div class="mb-8">
      <h2 class="text-2xl font-bold text-white mb-2">Stake NSWAP</h2>
      <p class="text-gray-400">Stake NSWAP tokens to earn rewards</p>
    </div>

    <div class="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50">
      <!-- Total Locked Banner -->
      <div class="bg-primary/10 text-primary text-center py-2 px-4 rounded-lg mb-6">
        Total Locked: {{ totalLocked.toLocaleString() }} NSWAP
      </div>

      <!-- Stake Form -->
      <div class="space-y-6">
        <div>
          <div class="flex justify-between items-center mb-2">
            <span class="text-gray-400">Balance: {{ balance }}</span>
            <button class="text-primary hover:text-primary-dark text-sm transition-colors">
              Max
            </button>
          </div>

          <div class="flex gap-4">
            <input
              v-model="stakeAmount"
              type="text"
              placeholder="0.00"
              class="flex-1 px-4 py-3 rounded-xl bg-gray-700/50 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
            <button class="px-8 py-3 rounded-xl bg-primary text-white font-medium hover:bg-primary-dark transition-colors">
              STAKE
            </button>
          </div>
        </div>

        <!-- Action Buttons -->
        <div class="flex gap-4">
          <button class="flex-1 px-4 py-2 rounded-xl border border-gray-600 text-white hover:bg-gray-700/50 transition-colors">
            COMPOUND
          </button>
          <button class="flex-1 px-4 py-2 rounded-xl border border-gray-600 text-white hover:bg-gray-700/50 transition-colors">
            UNSTAKE ALL
          </button>
        </div>

        <!-- Stats -->
        <div class="bg-gray-900/30 rounded-xl p-4">
          <h4 class="text-lg font-medium text-white mb-4">Your Stats</h4>
          <div class="space-y-3">
            <div class="flex justify-between">
              <span class="text-gray-400">Current APR:</span>
              <span class="text-primary">{{ currentApr }}%</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">$NSWAP Staked:</span>
              <span class="text-white">{{ nswapStaked }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">$NSWAP Earned:</span>
              <span class="text-white">{{ nswapEarned }}</span>
            </div>
            <div class="flex justify-between">
              <span class="text-gray-400">Timelock Unlock Date:</span>
              <span class="text-white">{{ timelockDate || '-' }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// State
const stakeAmount = ref('')
const totalLocked = ref(33103157.29)
const balance = ref(0)
const currentApr = ref(15.10)
const nswapStaked = ref(0)
const nswapEarned = ref(0)
const timelockDate = ref(null)
</script>
```