import type { Router } from 'vue-router'

export function setUpGuard(router: Router) {
  router.beforeEach((to, from) => {
    if (!to.meta.needsGuard) return
    if (from.name === 'guard') return
    if (history.state.guardFinished === true) return

    return { name: 'guard', query: { targetUrl: to.fullPath } }
  })
}
