<script setup lang="ts">
const router = useRouter()
const localePath = useLocalePath()
defineProps({
  dialog: {
    type: Boolean,
    required: true,
  },
})
const emit = defineEmits(['logout'])
const closeModal = () => {
  emit('closeModal')
}
const logoutUser = async () => {
  await logout()

  router.push(localePath('/'))
}
</script>

<template>
  <Dialog
    id="logout-modal"
    :visible.sync="dialog"
    :style="{ width: '366px' }"
    :modal="true"
    :closable="false"
  >
    <div class="confirmation-content">
      <img src="/img/icons/ic_logout_modal.svg" />
      <div>
        <h2>{{ $t('title.logout') }}</h2>
        <p>{{ $t('text.logout') }}</p>
      </div>
    </div>
    <template #footer>
      <Button
        class="button-modal modal__no"
        :label="$t('button.cancel')"
        @click="closeModal"
      />
      <Button
        class="button-modal modal__yes"
        :label="$t('button.logout')"
        autofocus
        @click="logoutUser"
      />
    </template>
  </Dialog>
</template>

<style lang="scss">
#logout-modal {
  border-radius: 13px !important;
  .confirmation-content {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  h2 {
    color: #182a48;
    font-size: 16px !important;
    margin: 0;
    font-family: 'OpenSans-Bold';
  }
  img {
    margin: 0 40px 20px 0px;
  }
  p {
    margin: 0;
    color: #18233a;
    font-size: 15px !important;
  }

  .p-dialog-header {
    border-top-right-radius: 11px !important;
    border-top-left-radius: 11px !important;
    padding: 10px;
  }
  .p-dialog-footer {
    border-bottom-right-radius: 11px !important;
    border-bottom-left-radius: 11px !important;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;

    button {
      margin: 0 !important;
    }
  }

  .p-dialog-content {
    padding: 0 1.5rem 0rem 1.5rem;
  }

  .button-modal {
    color: white;
    padding: 12px 43px;
    border-radius: 5px;
    width: 100%;
    span {
      font-family: 'OpenSans-Bold' !important;
    }
    &.modal__no {
      background: rgba(153, 153, 153, 0.2) !important;
      border-radius: 0px 0px 0px 11px;
      border: none;
      span {
        color: #666666;
      }
    }
    &.modal__yes {
      background: #ec8490 0% 0% no-repeat padding-box;
      border-radius: 0px 0px 11px 0px;
      border: none;
    }
  }
}
.p-dialog-mask.p-component-overlay {
  background-color: rgba(15, 27, 46, 1);
}
</style>
