import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import { setUpGuard } from './guard'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/a',
      component: () => import('../views/A.vue'),
      meta: {
        needsGuard: true,
      },
    },
    {
      path: '/b',
      component: () => import('../views/B.vue'),
    },
    {
      path: '/guard',
      name: 'guard',
      component: () => import('../views/Guard.vue'),
    },
  ],
})

setUpGuard(router)

export default router