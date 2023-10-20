import { defineStore } from 'pinia'
export const useOnboarding = defineStore('onboarding', {
  state: () => ({ user: undefined }),
  actions: {
    async login(form: object) {
      const result = await apiServices({
        method: 'POST',
        url: 'onboarding/login',
        data: form,
      })

      if (result?.status && result.code === 100) {
        setLoginUser(result?.data)
      }

      return result
    },

    async passwordRecovery(form: object) {
      const result = await apiServices({
        method: 'POST',
        url: 'onboarding/password-recovery',
        data: form,
      })

      return result
    },

    async sendCode(form: object) {
      const result = await apiServices({
        method: 'POST',
        url: 'onboarding/password-recovery',
        data: form,
      })

      return result
    },

    async verifyCode(form: object) {
      const result = await apiServices({
        method: 'POST',
        url: 'onboarding/verify-code',
        data: form,
      })

      return result
    },

    async updatePassword(form: object) {
      const result = await apiServices({
        method: 'POST',
        url: 'onboarding/update-password',
        data: form,
        typeHeader: 'auth',
      })

      if (result.status && result.code === 100) {
        setLoginUser({ user: undefined, authToken: undefined })
      }

      return result
    },

    async logout() {
      const result = await apiServices({
        method: 'POST',
        url: '/onboarding/logout',
        typeHeader: 'auth',
      })

      if (result.status && result.code === 100) {
        setLoginUser({ user: undefined, authToken: undefined })
      }

      return result
    },
  },
  getters: {
    getLoginUser: (state) => {
      return state.user || useCookie('userData').value
    },
  },
})
