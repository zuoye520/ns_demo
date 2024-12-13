import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useWalletStore = defineStore('wallet', () => {
  const address = ref('')
  const balance = ref('0')
  const isConnected = ref(false)

  function connect() {
    address.value = 'Nse7gF6Xg3hj9KLq2mY5k8P9Rm4xZ'
    balance.value = '335.711'
    isConnected.value = true
  }

  function disconnect() {
    address.value = ''
    balance.value = '0'
    isConnected.value = false
  }

  return {
    address,
    balance,
    isConnected,
    connect,
    disconnect
  }
})