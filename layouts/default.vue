<script setup>
import { ref, watch, onMounted, nextTick } from 'vue'
const { t } = useI18n()
const router = useRouter()
const route = useRoute()
const localePath = useLocalePath()

const userData = useOnboarding().getLoginUser

// variables
const items = ref([
  {
    text: t('menu.report'),
    img: 'ic_reports',
    to: '/dashboard',
  },
  {
    text: t('menu.admin'),
    img: 'ic_admin',
    to: '/administrators',
  },
])
const actualPage = ref('')

const validateRol = (page) => {
  const item = items.value.filter((item) => page.includes(item.to))

  if (item.length > 0) {
    return true
  } else {
    router.push(localePath({ path: items.value[0].to }))
    return false
  }
}

onMounted(() => {
  nextTick(() => {
    if (userData) {
      actualPage.value = route.path
    } else {
      router.push('/')
      // router.push(localePath({ path: '/' }))
    }
  })
})

watch(
  () => route.path,
  (newVal, oldVal) => {
    const route = validateRol(newVal)

    if (route && oldVal !== newVal) {
      actualPage.value = newVal
    }
  },
)
</script>
<template>
  <div class="app-wraper">
    <aside class="menu-aplication">
      <div class="user-information">
        <img src="/icons/ic_logo.svg" alt="logo" />
        <p for="fullname">{{ userData?.fullname }}</p>
      </div>
      <div class="menu-content">
        <nuxt-link
          v-for="(item, index) in items"
          :key="index"
          class="item-menu"
          :to="localePath(item.to)"
        >
          <img :src="`/icons/${item.img}.svg`" :alt="item.text" />
          <span>{{ item.text }}</span>
        </nuxt-link>
      </div>
    </aside>
    <main class="main-application">
      <nav class="nav-application">
        <LayoutsDefaultBreadcrumb :page="actualPage" />
        <div class="flex gap-2"></div>
      </nav>
      <div class="content-application">
        <slot />
      </div>
    </main>
  </div>
</template>
