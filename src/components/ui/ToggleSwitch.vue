<template>
  <Switch
    :modelValue="modelValue"
    @update:modelValue="$emit('update:modelValue', $event)"
    class="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200"
    :class="modelValue ? 'bg-primary' : 'bg-gray-600'"
  >
    <span
      class="inline-block h-4 w-4 transform rounded-full bg-white transition-transform duration-200"
      :class="modelValue ? 'translate-x-6' : 'translate-x-1'"
    />
  </Switch>
</template>

<script setup lang="ts">
import { Switch } from '@headlessui/vue'

defineProps<{
  modelValue: boolean
}>()

defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()
</script>