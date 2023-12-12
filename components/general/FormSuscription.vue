<template>
  <form
    action=""
    class="tw-grid tw-grid-cols-4 lg:tw-grid-cols-3 tw-gap-2 lg:tw-gap-x-10 tw-gap-y-5"
  >
    <div class="tw-col-span-4 lg:tw-col-span-3">
      <label class="tw-text-xs">Nombre*</label>
      <input class="tw-w-full tw-mt-4" type="text" />
    </div>
    <div class="tw-col-span-4 lg:tw-col-span-3">
      <label class="tw-text-xs">Apellido*</label>
      <input class="tw-w-full tw-mt-4" type="text" />
    </div>
    <div class="tw-col-span-2 lg:tw-col-span-1">
      <label class="tw-text-xs">País</label>
      <Dropdown class="tw-w-full tw-mt-4" />
    </div>
    <div class="tw-col-span-2">
      <label class="tw-text-xs">Número de teléfono</label>
      <input class="tw-w-full tw-mt-4" type="text" />
    </div>
    <div class="tw-col-span-2">
      <button class="tw-bg-secondary tw-px-5 tw-py-2 tw-rounded-lg">
        Enviar
      </button>
    </div>
  </form>
</template>
<style lang="scss" scoped>
input {
  border-radius: 10px;
  padding: 11.5px 0px;
}
</style>
