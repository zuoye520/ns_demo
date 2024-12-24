```vue
<template>
  <TokenListModal
    :show="showFromList"
    @close="$emit('close-from-list')"
    @select="$emit('select-from-token', $event)"
  />

  <TokenListModal
    :show="showToList"
    @close="$emit('close-to-list')"
    @select="$emit('select-to-token', $event)"
  />

  <SwapRouteModal
    :show="showRoute"
    :from-token="fromToken"
    :to-token="toToken"
    @close="$emit('close-route')"
  />

  <SwapSettingsModal 
    :show="showSettings"
    @close="$emit('close-settings')"
  />

  <SwapHistoryModal
    :show="showHistory"
    @close="$emit('close-history')"
  />
</template>

<script setup lang="ts">
import TokenListModal from './modals/TokenListModal.vue'
import SwapRouteModal from './modals/SwapRouteModal.vue'
import SwapSettingsModal from './modals/SwapSettingsModal.vue'
import SwapHistoryModal from './modals/SwapHistoryModal.vue'

defineProps<{
  showFromList: boolean
  showToList: boolean
  showRoute: boolean
  showSettings: boolean
  showHistory: boolean
  fromToken: any
  toToken: any
}>()

defineEmits<{
  (e: 'close-from-list'): void
  (e: 'close-to-list'): void
  (e: 'close-route'): void
  (e: 'close-settings'): void
  (e: 'close-history'): void
  (e: 'select-from-token', token: any): void
  (e: 'select-to-token', token: any): void
}>()
</script>
```