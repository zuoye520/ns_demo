```vue
<template>
  <div class="space-y-4">
    <div v-if="pools.length === 0" class="text-center py-12">
      <p class="text-gray-400">No liquidity found</p>
    </div>

    <div v-else class="space-y-4">
      <PoolCard
        v-for="pool in pools"
        :key="pool.id"
        v-bind="pool"
        @add="$emit('add')"
        @remove="$emit('remove')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import PoolCard from './PoolCard.vue'

const pools = ref([
  {
    id: 1,
    token0Symbol: 'NULS',
    token1Symbol: 'wALV',
    token0Icon: 'https://app.nulswap.com/tokens/NULS.svg',
    token1Icon: 'https://nassets.oss-us-west-1.aliyuncs.com/wALV_9.png',
    liquidity: '494.6',
    usdValue: '99.57'
  },
  {
    id: 2,
    token0Symbol: 'NULS',
    token1Symbol: 'IBIT',
    token0Icon: 'https://app.nulswap.com/tokens/NULS.svg',
    token1Icon: 'https://nassets.oss-us-west-1.aliyuncs.com/IBIT_9.png',
    liquidity: '0.03805',
    usdValue: '143.71'
  }
])
</script>
```