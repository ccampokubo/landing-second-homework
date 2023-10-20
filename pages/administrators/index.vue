<script setup>
import { ref, onMounted, nextTick } from 'vue'
const { t } = useI18n()

// variables
const table = ref({
  headers: [
    {
      field: 'fullname',
      header: t('table.admin.name'),
    },
    {
      field: 'email',
      header: t('table.admin.email'),
    },
    {
      type: 'state',
      service: 'admin/update/',
      field: 'options.status',
      header: t('table.state.title'),
    },
  ],
  fields: [],
  empty: '',
  loading: false,
  limit: 0,
  pages: 0,
})

const form = ref({
  limit: 10,
  offset: 0,
  filter: '',
})

onMounted(() => {
  nextTick(async () => {
    await init()
  })
})

// methods
const init = async () => {
  await getList()
}

const changePage = async (page) => {
  form.value.offset = page
  await getList()
}

const getList = async () => {
  table.value.loading = true
  table.value.fields = []
  table.value.pages = 0
  table.value.limit = form.value.limit

  const result = await apiServices({
    method: 'POST',
    url: 'admin/list',
    data: form.value,
  })

  if (result.status && result.code === 100) {
    table.value.fields = result.data.admin
    table.value.pages = result.data.totalPages
  } else {
    table.value.empty = result.message
  }

  table.value.loading = false
}
</script>
<template>
  <section class="content-page">
    <GeneralTable
      :headers="table.headers"
      :fields="table.fields"
      :empty="table.empty"
      :loading="table.loading"
      :limit="table.limit"
      :pages="table.pages"
      @change-page="changePage"
      @reload="getList"
    />
  </section>
</template>
