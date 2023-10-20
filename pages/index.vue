<script setup lang="ts">
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

const store = useOnboarding()
const { t } = useI18n()
const localePath = useLocalePath()
const router = useRouter()

const loading = useLoading(ref(false))

definePageMeta({ layout: 'login' })

const { handleSubmit, errors, meta } = useForm({
  validationSchema: yup.object({
    email: yup
      .string()
      .required(`${t('rule.validation.require')}`)
      .email(`${t('rule.validation.email')}`),
    password: yup.string().required(`${t('rule.validation.require')}`),
  }),
})

// define variable
const { value: email } = useField('email')
const { value: password } = useField('password')
const iconPassword = ref(false)

// methods
const onSubmit = handleSubmit(async (values) => {
  loading.value = true
  const formData = { ...values }
  formData.password = enc(formData.password)
  formData.iv = formData.password.iv
  formData.password = formData.password.password
  formData.platform = 'backoffice'
  formData.version = '1.0.0'
  formData.pushToken = '0'
  formData.type = 'lc'

  const result = await store.login(formData)

  if (result.status && result.code === 100) {
    router.push(localePath({ path: '/dashboard' }))
  } else {
    showAlert({
      type: 'success',
      message: result.message,
    })
  }

  loading.value = false
})
</script>
<template>
  <div class="card-login">
    <div class="card">
      <form @submit.prevent="onSubmit">
        <nuxt-link class="mb-3" :to="localePath({ path: '/' })">
          <img width="35" src="/icons/arrow.svg" alt="volver"
        /></nuxt-link>
        <img width="214" src="/img/logo_login.svg" alt="logo" />
        <h1 class="bebasneue-bold mb-0">{{ $t('title.welcome') }}</h1>
        <p class="mt-1 mb-2">{{ $t('text.login') }}</p>

        <span class="general-input solo-login">
          <label for="email">
            <div class="flex align-items-center gap-1">
              <img src="/icons/email.svg" alt="email" />
              {{ $t('form.email.label') }}
            </div>
          </label>
          <InputText
            v-model="email"
            :placeholder="$t('form.email.placeholder')"
            type="email"
            :class="{ 'p-invalid': errors['email'] }"
            aria-describedby="text-error"
          />
          <small class="p-error" id="text-error">{{
            errors['email'] || '&nbsp;'
          }}</small>
        </span>
        <span class="general-input solo-login p-input-icon-right mb-1">
          <label for="password">
            <div class="flex align-items-center gap-1">
              <img src="/icons/pass.svg" alt="password" />
              {{ $t('form.password.label') }}
            </div>
          </label>
          <i class="cursor-pointer" @click="iconPassword = !iconPassword">
            <img src="/icons/hide.svg" alt="show" />
          </i>
          <InputText
            v-model="password"
            :placeholder="$t('form.password.placeholder')"
            :type="iconPassword ? 'text' : 'password'"
            :class="{ 'p-invalid': errors['password'] }"
            aria-describedby="text-error"
          />

          <small class="p-error" id="text-error">{{
            errors['password'] || '&nbsp;'
          }}</small>
        </span>

        <nuxt-link
          class="forgotPassword"
          :to="localePath({ path: 'forgot-password' })"
          >{{ $t('button.forgotPassword') }}</nuxt-link
        >
        <Button
          :type="meta.valid ? 'submit' : 'button'"
          :disabled="!meta.valid"
          class="mt-6 btn"
          :class="{ active: meta.valid }"
          :label="$t('button.login')"
        />
      </form>
    </div>
  </div>
</template>
