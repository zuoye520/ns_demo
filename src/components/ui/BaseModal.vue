```vue
<template>
  <Teleport to="body">
    <TransitionRoot appear :show="show" as="template">
      <Dialog as="div" @close="$emit('close')" class="relative z-50">
        <TransitionChild
          as="template"
          enter="duration-300 ease-out"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="duration-200 ease-in"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div class="fixed inset-0 bg-black/75" />
        </TransitionChild>

        <div class="fixed inset-0 overflow-y-auto">
          <div class="flex min-h-full items-center justify-center p-4 sm:p-6">
            <TransitionChild
              as="template"
              enter="duration-300 ease-out"
              enter-from="opacity-0 scale-95"
              enter-to="opacity-100 scale-100"
              leave="duration-200 ease-in"
              leave-from="opacity-100 scale-100"
              leave-to="opacity-0 scale-95"
            >
              <DialogPanel 
                class="w-full transform overflow-hidden rounded-2xl bg-gray-800 shadow-xl transition-all"
                :class="{
                  'sm:max-w-[95%] md:max-w-[600px]': maxWidth === 'md',
                  'sm:max-w-[95%] md:max-w-[768px]': maxWidth === 'lg',
                  'sm:max-w-[95%] md:max-w-[1024px]': maxWidth === 'xl',
                  'max-w-[95%]': !maxWidth
                }"
              >
                <slot></slot>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </Dialog>
    </TransitionRoot>
  </Teleport>
</template>

<script setup lang="ts">
import { Dialog, DialogPanel, TransitionChild, TransitionRoot } from '@headlessui/vue'

defineProps<{
  show: boolean
  maxWidth?: 'md' | 'lg' | 'xl'
}>()

defineEmits<{
  (e: 'close'): void
}>()
</script>

<style scoped>
/* Custom scrollbar for modals */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}
</style>
```