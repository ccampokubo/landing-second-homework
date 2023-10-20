export default defineNuxtPlugin(() => {
  addRouteMiddleware(
    'global-middleware',
    (to) => {
      const userData = useOnboarding().getLoginUser

      if (to.path === '/' && userData) {
        return navigateTo('/dashboard')
      }

      if (Object.entries(to.meta).length === 0 && !userData) {
        return navigateTo('/')
      }
    },
    { global: true },
  )
})
