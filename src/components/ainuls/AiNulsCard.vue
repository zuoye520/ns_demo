<template>
  <BaseCard>
    <div class="grid md:grid-cols-2 gap-6">
      <AiNulsInfo />
      <AiNulsStats />
    </div>
    <BaseButton class="w-full mt-6">Get aiNULS</BaseButton>
  </BaseCard>
</template>

<script setup lang="ts">
import BaseCard from '@/components/ui/BaseCard.vue'
import BaseButton from '@/components/ui/BaseButton.vue'
import AiNulsInfo from './AiNulsInfo.vue'
import AiNulsStats from './AiNulsStats.vue'
</script>