<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'
definePageMeta({ layout: 'login' })

const step = ref('email')
const data = ref({})

onMounted(() => {
  nextTick(() => {
    setLoginUser({ user: undefined, authToken: undefined })
  })
})

const change = (event: any) => {
  data.value = { ...event.data, ...data.value }
  step.value = event.change
}
</script>
<template>
  <div class="card-login h-auto">
    <div class="card h-auto">
      <ForgotPasswordFormEmail v-if="step === 'email'" @change="change" />
      <ForgotPasswordValidateCode
        v-if="step === 'validateCode'"
        :user="data"
        @change="change"
      />
      <ForgotPassword v-if="step === 'changePassword'" />
    </div>
  </div>
</template>
