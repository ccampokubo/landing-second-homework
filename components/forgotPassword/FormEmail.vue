<script setup>
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

const emit = defineEmits(['change'])

const { t } = useI18n()
const localePath = useLocalePath()

const { handleSubmit, errors, meta } = useForm({
  validationSchema: yup.object({
    user: yup
      .string()
      .required(`${t('rule.validation.require')}`)
      .email(`${t('rule.validation.email')}`),
  }),
})

// define variable
const { value: user } = useField('user')

// methods
const onSubmit = handleSubmit(async (values) => {
  const result = await useOnboarding().passwordRecovery(values)

  if (result.status && result.code === 100) {
    emit('change', { data: values, change: 'validateCode' })
    showAlert({
      type: 'success',
      message: result.message,
    })
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
    <h1 class="bebasneue-bold mb-0">{{ $t('title.forgotPassword') }}</h1>
    <p class="mt-1 mb-2">{{ $t('text.forgotPassword') }}</p>

    <span class="general-input solo-login">
      <label for="email">
        <div class="flex align-items-center gap-1">
          <img src="/icons/email.svg" alt="email" />
          {{ $t('form.email.label') }}
        </div>
      </label>
      <InputText
        v-model="user"
        :placeholder="$t('form.email.placeholder')"
        type="email"
        :class="{ 'p-invalid': errors['user'] }"
        aria-describedby="text-error"
      />
      <small class="p-error" id="text-error">{{
        errors['user'] || '&nbsp;'
      }}</small>
    </span>

    <Button
      :type="meta.valid ? 'submit' : 'button'"
      :disabled="!meta.valid"
      class="mt-4 btn"
      :class="{ active: meta.valid }"
      :label="$t('button.sendCode')"
    />
  </form>
</template>
