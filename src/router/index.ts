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
      meta: {
        title: 'home',
      },
    },
    {
      path: '/a',
      component: () => import('../views/A.vue'),
      meta: {
        needsGuard: true,
        title: 'A',
      },
    },
    {
      path: '/b',
      component: () => import('../views/B.vue'),
      meta: {
        title: 'B',
      },
    },
    {
      path: '/guard',
      name: 'guard',
      component: () => import('../views/Guard.vue'),
      meta: {
        title: 'guard',
      },
    },
  ],
})

setUpGuard(router)

router.beforeEach((to) => {
  if (typeof to.meta.title === 'string') {
    document.title = to.meta.title
  }
})

export default router