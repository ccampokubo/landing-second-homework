<script setup>
const route = useRoute()
const emit = defineEmits(['change-page'])
defineProps({
  headers: Array,
  fields: Array,
  empty: String,
  loading: Boolean,
  limit: Number,
  pages: Number,
})

// methos
const searchField = (path, data) => {
  return searchItemJson(path, data)
}

const onPage = (event) => {
  emit('change-page', event.page)
}

const getGoTo = (_prop, _item) => {
  let url = ''

  switch (_item.action) {
    case 'detail':
      url = route.path + '/' + _prop.data.id
      break

    default:
      break
  }

  return url
}
</script>

<template>
  <div class="app-container-table">
    <div class="table-project">
      <DataTable :value="fields" responsive-layout="scroll" :loading="loading">
        <Column
          v-for="(item, index) of headers"
          :key="index"
          :header="item.header"
          :header-style="item.headerStyle"
        >
          <template #body="slotProps">
            <nuxt-link
              v-if="item.type === 'principal'"
              :class="'principal-title ' + item.fieldClass"
              :to="getGoTo(slotProps, item)"
              >{{ searchField(item.field, slotProps.data) }}</nuxt-link
            >
            <GeneralTableStatus
              v-else-if="item.type === 'state'"
              :id="slotProps.data.id"
              :status="searchField(item.field, slotProps.data)"
              :service="item.service"
              @reload="$emit('reload')"
            />
            <p v-else :class="item.fieldClass">
              {{ searchField(item.field, slotProps.data) }}
            </p>
          </template>
        </Column>
        <template #loading>
          <p id="loading-text">{{ $t('table.loading') }}</p>
        </template>
        <template #empty>
          <GeneralEmptyTable :message="empty" />
        </template>
      </DataTable>
    </div>
    <Paginator :rows="limit" :total-records="pages" @page="onPage($event)" />
  </div>
</template>
