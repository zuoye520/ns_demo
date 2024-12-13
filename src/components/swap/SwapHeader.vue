<template>
  <div class="mb-6">
    <div class="flex justify-between items-center mb-2">
      <div>
        <h2 class="text-2xl font-bold text-white mb-1">Swap</h2>
        <p class="text-gray-400 text-sm">Trade tokens in an instant</p>
      </div>
      <div class="flex items-center space-x-2">
        <button 
          class="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-700/50 transition-all duration-200"
          title="Transaction Settings"
          @click="showSettings = true"
        >
          <cog-6-tooth-icon class="h-5 w-5" />
        </button>
        <button 
          class="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-700/50 transition-all duration-200"
          title="Recent Transactions"
          @click="showHistory = true"
        >
          <clock-icon class="h-5 w-5" />
        </button>
        <button 
          class="text-gray-400 hover:text-white p-2 rounded-lg hover:bg-gray-700/50 transition-all duration-200"
          title="Refresh"
        >
          <arrow-path-icon class="h-5 w-5" />
        </button>
      </div>
    </div>

    <SwapSettingsModal 
      :show="showSettings"
      @close="showSettings = false"
    />

    <SwapHistoryModal
      :show="showHistory"
      @close="showHistory = false"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { Cog6ToothIcon, ClockIcon, ArrowPathIcon } from '@heroicons/vue/24/outline'
import SwapSettingsModal from './modals/SwapSettingsModal.vue'
import SwapHistoryModal from './modals/SwapHistoryModal.vue'

const showSettings = ref(false)
const showHistory = ref(false)
</script>