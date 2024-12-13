<template>
  <nav class="bg-gray-800/50 backdrop-blur-sm border-b border-gray-700/50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <div class="flex items-center">
          <router-link to="/swap" class="flex-shrink-0 transition-transform duration-200 hover:-translate-y-0.5">
            <img class="h-8 w-auto" src="https://app.nulswap.com/_next/image?url=%2Flogo.png&w=256&q=75" alt="Nulswap" />
          </router-link>
          <div class="ml-10 flex items-baseline space-x-1">
            <router-link
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              class="nav-link group relative px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300"
              :class="[
                isCurrentRoute(item.href)
                  ? 'text-primary'
                  : 'text-gray-300 hover:text-white'
              ]"
            >
              <span class="relative z-10">{{ item.name }}</span>
              <div
                class="absolute inset-0 rounded-xl transition-all duration-300 group-hover:bg-gray-700/50"
                :class="{ 'bg-primary/10': isCurrentRoute(item.href) }"
              ></div>
              <div
                class="absolute bottom-0 left-1/2 h-0.5 bg-primary transform -translate-x-1/2 transition-all duration-300 w-0 group-hover:w-4/5"
                :class="{ 'w-4/5': isCurrentRoute(item.href) }"
              ></div>
            </router-link>
          </div>
        </div>
        <div class="flex items-center">
          <WalletButton />
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import WalletButton from '../wallet/WalletButton.vue'

const route = useRoute()

const navigation = ref([
  { name: 'Swap', href: '/swap' },
  { name: 'Pools', href: '/pools' },
  { name: 'Stake', href: '/stake' },
  { name: 'aiNULS', href: '/ainuls' },
])

const isCurrentRoute = (path) => route.path === path
</script>