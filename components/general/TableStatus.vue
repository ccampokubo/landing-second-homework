<script setup>
import { ref, toRef } from 'vue'
const emit = defineEmits(['reload'])
const { t } = useI18n()
const props = defineProps({
  id: {
    type: String | Number,
    required: true,
  },
  status: String,
  service: String,
})
const loading = useLoading(ref(false))
const idRef = toRef(props, 'id')
const menu = ref()

const items = ref([
  {
    label: t('table.state.active'),
    command: () => {
      save('active')
    },
  },
  {
    label: t('table.state.inactive'),
    command: () => {
      save('inactive')
    },
  },
])

const toggle = (event) => {
  menu.value.toggle(event)
}

const save = async (state) => {
  loading.value = true

  const result = await apiServices({
    url: props.service + props.id,
    method: 'PUT',
  })

  if (result.status && result.code === 100) {
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

  emit('reload')
  loading.value = false
}
</script>
<template>
  <div class="content-state-selector">
    <div
      :class="{ 'state-selector': true, [status]: true }"
      aria-haspopup="true"
      aria-controls="overlay_menu"
      @click="toggle"
    >
      <span>{{
        status === 'active'
          ? $t('table.state.active')
          : $t('table.state.inactive')
      }}</span>
    </div>
    <Menu :id="id" ref="menu" :model="items" :popup="true" append-to="body" />
  </div>
</template>

<style lang="scss">
.content-state-selector {
  position: relative;
  .state-selector {
    padding: 6px 10px;
    cursor: pointer;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 120px;
    span {
      padding-left: 10px;
    }
    &.active {
      background-color: #dffce4;
      color: #02b723;
      span {
        color: #02b723;
      }
    }
    &.inactive {
      background-color: #fcdfe1;
      color: #e30000;
      span {
        color: #e30000;
      }
    }
  }
  .p-menu {
    top: 42px !important;
    left: 0 !important;
    width: 120px;
  }
}
</style>
