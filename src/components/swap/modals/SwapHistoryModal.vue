<template>
  <BaseModal :show="show" @close="$emit('close')">
    <div class="p-6">
      <div class="flex justify-between items-center mb-6">
        <h3 class="text-xl font-bold text-white">Recent Transactions</h3>
        <button 
          class="text-gray-400 hover:text-white"
          @click="$emit('close')"
        >
          <x-mark-icon class="h-5 w-5" />
        </button>
      </div>

      <div v-if="transactions.length === 0" class="text-center py-12">
        <p class="text-gray-400">No recent transactions</p>
      </div>
      
      <div v-else class="space-y-4">
        <div 
          v-for="tx in transactions" 
          :key="tx.hash"
          class="flex items-center justify-between p-4 rounded-xl bg-gray-700/30"
        >
          <div class="flex items-center">
            <check-circle-icon class="h-5 w-5 text-green-400 mr-2" />
            <span class="text-white">{{ tx.description }}</span>
          </div>
          <external-link-icon class="h-5 w-5 text-gray-400 hover:text-white cursor-pointer" />
        </div>
      </div>
    </div>
  </BaseModal>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { XMarkIcon, CheckCircleIcon, ArrowTopRightOnSquareIcon as ExternalLinkIcon } from '@heroicons/vue/24/outline'
import BaseModal from '@/components/ui/BaseModal.vue'

defineProps<{
  show: boolean
}>()

defineEmits<{
  (e: 'close'): void
}>()

const transactions = ref([])
</script>