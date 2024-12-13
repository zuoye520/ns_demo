import { createRouter, createWebHistory } from 'vue-router'
import SwapView from '../views/SwapView.vue'
import PoolsView from '../views/PoolsView.vue'
import StakeView from '../views/StakeView.vue'
import AiNulsView from '../views/AiNulsView.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/swap'
    },
    {
      path: '/swap',
      name: 'swap',
      component: SwapView
    },
    {
      path: '/pools',
      name: 'pools',
      component: PoolsView
    },
    {
      path: '/stake',
      name: 'stake',
      component: StakeView
    },
    {
      path: '/ainuls',
      name: 'ainuls',
      component: AiNulsView
    }
  ]
})

export default router