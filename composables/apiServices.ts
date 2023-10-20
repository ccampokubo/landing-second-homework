import type { UseFetchOptions } from 'nuxt/app'
import { defu } from 'defu'
import { useOnboarding } from '../stores/Onboarding'

interface setting {
  method?: string
  typeHeader?: string
  url: string
  data?: object
  api?: string
  contentType?: number
}

export interface responseApi {
  success?: boolean
  code: number
  message: string
  data?: object
  status: boolean
  error?: unknown
}

export const apiServices = async (setting: setting): Promise<responseApi> => {
  const nuxtApp = useNuxtApp()

  try {
    const config = useRuntimeConfig()

    const userData = useOnboarding().getLoginUser

    if (userData && setting.typeHeader === '') {
      setting.typeHeader = 'auth'
    }

    const options: UseFetchOptions<unknown> = {
      baseURL: setting.api ? setting.api : config.public.API_BASE_URL,
      headers: getHeaders(setting.typeHeader),
      method: setting.method,
    } as any

    if (setting.method !== 'GET') {
      if (setting.contentType === 0) {
        const formData = new FormData()

        Object.entries(setting.data || {}).forEach((key) => {
          formData.append(`${key[0]}`, key[1])
        })

        options.headers = {
          ...options.headers,
        }
        options.body = formData
      } else if (setting.data) {
        options.headers = {
          ...options.headers,
          // 'Content-Type': 'application/json',
        }
        setting.data = setting.data ? setting.data : {}
        options.body = JSON.stringify(setting.data)
      }
    }

    const { data, error } = await useFetch(setting.url, options)

    if (!data.value) {
      const errorData = error.value
      clearNuxtData()

      if (errorData.statusCode === 404) {
        if (errorData.data.message) {
          return {
            success: false,
            status: false,
            code: 102,
            message: errorData.data.message,
            error: errorData,
          }
        } else {
          // ? No encontró el servicio
          return {
            success: false,
            status: false,
            code: 101,
            message: nuxtApp.$i18n.t('store.apiServices.notFound'),
            error: errorData,
          }
        }
      } else if (errorData.data.code === 120) {
        if (errorData.data.message.includes('token')) {
          logout()
        }
        return {
          success: false,
          status: false,
          code: 120,
          message: errorData.data.message,
          error: errorData,
        }
      } else if (errorData.data.message) {
        return {
          success: false,
          status: false,
          code: 102,
          message: errorData.data.message,
          error: errorData,
        }
      } else {
        return {
          success: false,
          status: false,
          code: 101,
          message: nuxtApp.$i18n.t('store.apiServices.generalError'),
          error: errorData,
        }
      }
    }

    return data.value
  } catch (erdataror) {
    throw erdataror
  }
}

export const getHeaders = (type: any) => {
  const config = useRuntimeConfig()
  const accessToken = useCookie('accessToken').value
  const authToken = useCookie('authToken').value
  let headers = {}

  if (type === 'auth') {
    headers = {
      [`X-${config.public.SHORT_NAME.toUpperCase()}-Auth-Token`]:
        authToken || '',
    }
  } else {
    headers = {
      [`X-${config.public.SHORT_NAME.toUpperCase()}-Access-Token`]:
        accessToken || '',
    }
  }

  return headers
}

export const generateAccessToken = async () => {
  const config = useRuntimeConfig()
  const accessToken = useCookie<string>('accessToken')

  try {
    if (!accessToken.value) {
      const shortName = config.public.SHORT_NAME

      const result = await apiServices({
        method: 'GET',
        url: `${shortName}/generate-access-token`,
      })

      if (result.code === 100) {
        accessToken.value = result.data?.accessToken
      }
    }
  } catch (error) {
    console.log(error)
  }

  return accessToken
}

export const setLoginUser = (data: any) => {
  const authToken = useCookie<string>('authToken')
  const userData = useCookie<object>('userData')

  userData.value = data.user
  authToken.value = data.authToken
  useOnboarding().user = data.user
}

export const logout = async () => {
  await useOnboarding().logout()

  setLoginUser({ user: undefined, authToken: undefined })
}
