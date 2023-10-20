<script setup>
import { ref, watch, onMounted } from 'vue'
const props = defineProps({
  page: {
    type: String,
    required: true,
  },
})

// variables
const title = ref('')
const routePath = ref([])

watch(
  () => props.page,
  (newVal) => {
    routePath.value = validatePage(newVal)
  },
)

onMounted(() => {
  routePath.value = validatePage(props.page)
})

const validatePage = (_page) => {
  let route = []

  // ? Sección para Reportes
  if (_page.includes('dashboard')) {
    route = [{ text: 'Reportes', class: 'principal-title', goTo: '/dashboard' }]
    title.value = 'Reportes'
  }
  // ? Sección para administradores
  else if (_page.includes('administrators')) {
    route = [
      { text: 'Admin', class: 'principal-title', goTo: '/administrators' },
    ]
    title.value = 'Admin'
  }

  // ? Sección por defecto
  else {
    route = [
      {
        text: '404 - Página no encontrada',
        class: 'principal-title',
        goTo: '',
      },
    ]
    title.value = 'Página no encontrada'
  }

  return route
}
</script>

<template>
  <h1 v-show="routePath.length > 0" class="breadcrumb-page">
    <nuxt-link
      v-for="(item, index) in routePath"
      :key="index"
      :class="{ title: true, [item.class]: true }"
      :to="item.goTo"
    >
      <span class="p-mr-2">{{ item.text }}</span>
      <span v-if="index + 1 < routePath.length" class="p-mr-3 div-icon"></span>
    </nuxt-link>
  </h1>
</template>
<style lang="scss">
.breadcrumb-page {
  .title {
    font-size: 1.1em;
    font-weight: bold;
    text-decoration: none;
  }
  .div-icon {
    border-left: 1px solid;
  }
  .principal-title {
    color: #000000 !important;
  }
  .secondary-title {
    color: #c9ad17 !important;
  }
}
</style>
