<script setup>
import { ref } from 'vue'
const router = useRouter()
const { t } = useI18n()
const props = defineProps(['user'])
const localePath = useLocalePath()
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

const { handleSubmit, errors, resetForm } = useForm({
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
  formData.password = enc(formData.password)
  formData.iv = formData.password.iv
  formData.password = formData.password.password
  formData.email = props.user.user
  console.log(formData)
  /*  const result = await apiServices({
    method: 'POST',
    url: 'onboarding/update-password',
    data: formData,
    typeHeader: 'auth',
  })

  if (result.status && result.code === 100) {
    router.push(localePath({ path: '/' }))
  } else {
    toast.add({
      severity: 'error',
      summary: 'Error',
      detail: result.message,
      life: 3000,
    })
  } */
})
</script>
<template>
  <form>
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
      type="submit"
      class="mt-6 btn active"
      :label="$t('button.confirm')"
    />
  </form>
</template>
