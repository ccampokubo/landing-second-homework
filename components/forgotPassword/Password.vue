<script setup>
import { ref } from 'vue'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

const router = useRouter()
const { t } = useI18n()
const props = defineProps(['user'])
const localePath = useLocalePath()

const { handleSubmit, errors, meta } = useForm({
  validationSchema: yup.object({
    password: yup
      .string()
      .required(`${t('rule.validation.require')}`)
      .min(8, `${t('rule.validation.password.min')}`)
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]+$/,
        `${t('rule.validation.password.valid')}`,
      ),
    confirmPassword: yup
      .string()
      .required(`${t('rule.validation.require')}`)
      .oneOf([yup.ref('password')], 'Las contraseñas deben ser iguales'),
  }),
})

// variables
const iconPassword = ref(false)
const iconPasswordConfirm = ref(false)
const { value: password } = useField('password')
const { value: confirmPassword } = useField('confirmPassword')

// method

const onSubmit = handleSubmit(async (values) => {
  const formData = { ...values }
  const encripPass = enc(formData.password)
  formData.password = encripPass.password
  formData.iv = encripPass.iv

  const result = await useOnboarding().updatePassword({
    ...formData,
    pushToken: '',
    version: '1.0.0',
  })

  if (result.status && result.code === 100) {
    showAlert({
      type: 'success',
      message: result.message,
    })
    router.push(localePath({ path: '/' }))
  } else {
    showAlert({
      type: 'error',
      message: result.message,
    })
  }
})
</script>
<template>
  <form @submit.prevent="onSubmit">
    <nuxt-link class="mb-3" :to="localePath({ path: '/' })">
      <img width="35" src="/icons/arrow.svg" alt="volver"
    /></nuxt-link>
    <h1 class="bebasneue-bold mb-0">{{ $t('title.changePassword') }}</h1>
    <p class="mt-1 mb-2">{{ $t('text.changePassword') }}</p>
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
    <span class="general-input solo-login p-input-icon-right mb-1">
      <label for="password">
        <div class="flex align-items-center gap-1">
          <img src="/icons/pass.svg" alt="password" />
          {{ $t('form.password.label') }}
        </div>
      </label>
      <i
        class="cursor-pointer"
        @click="iconPasswordConfirm = !iconPasswordConfirm"
      >
        <img src="/icons/hide.svg" alt="show" />
      </i>
      <InputText
        v-model="confirmPassword"
        :placeholder="$t('form.password.placeholder')"
        :type="iconPasswordConfirm ? 'text' : 'password'"
        :class="{ 'p-invalid': errors['confirmPassword'] }"
        aria-describedby="text-error"
      />

      <small class="p-error" id="text-error">{{
        errors['confirmPassword'] || '&nbsp;'
      }}</small>
    </span>

    <Button
      :type="meta.valid ? 'submit' : 'button'"
      :disabled="!meta.valid"
      class="mt-6 btn"
      :class="{ active: meta.valid }"
      :label="$t('button.confirm')"
    />
  </form>
</template>
