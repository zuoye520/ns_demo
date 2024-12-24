<template>
  <button
    class="relative overflow-hidden group transition-all duration-300"
    :class="[
      variants[variant],
      sizes[size],
      {
        'w-full': fullWidth,
        'opacity-50 cursor-not-allowed': disabled,
        'hover:-translate-y-0.5': !disabled && variant !== 'text'
      }
    ]"
    :disabled="disabled"
  >
    <div 
      v-if="variant !== 'text'"
      class="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    ></div>
    <span class="relative z-10 flex items-center justify-center gap-2">
      <slot name="icon"></slot>
      <slot></slot>
    </span>
  </button>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  variant?: 'primary' | 'secondary' | 'outline' | 'text'
  size?: 'sm' | 'md' | 'lg'
  fullWidth?: boolean
  disabled?: boolean
}>(), {
  variant: 'primary',
  size: 'md'
})

const variants = {
  primary: 'bg-gradient-button text-white shadow-glow hover:shadow-glow-lg rounded-xl',
  secondary: 'bg-background-card text-gray-100 border border-white/10 hover:border-white/20 rounded-xl',
  outline: 'border border-primary text-primary hover:bg-primary/10 rounded-xl',
  text: 'text-gray-400 hover:text-white hover:bg-white/5 rounded-lg'
}

const sizes = {
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2',
  lg: 'px-6 py-3 text-lg'
}
</script>