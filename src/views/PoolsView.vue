```vue
<template>
  <div class="space-y-6">
    <div>
      <h2 class="text-2xl font-bold text-white mb-1">Your Liquidity</h2>
      <p class="text-gray-400">Remove liquidity to receive tokens back</p>
    </div>

    <PoolsList />

    <button 
      class="w-full px-4 py-3 rounded-xl bg-primary text-white hover:bg-primary-dark transition-all duration-200 flex items-center justify-center gap-2"
      @click="showAddLiquidity = true"
    >
      <plus-icon class="h-5 w-5" />
      Add Liquidity
    </button>

    <AddLiquidityModal 
      :show="showAddLiquidity"
      @close="showAddLiquidity = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { PlusIcon } from '@heroicons/vue/24/outline'
import PoolsList from '../components/pools/PoolsList.vue'
import AddLiquidityModal from '../components/pools/modals/AddLiquidityModal.vue'

const showAddLiquidity = ref(false)
</script>
```