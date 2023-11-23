<template>
  <header
    class="tw-flex tw-justify-between tw-items-center tw-pt-6 tw-px-5 lg:tw-px-12"
  >
    <div class="tw-flex tw-items-center tw-gap-x-4">
      <img
        class="tw-w-[67px] lg:tw-w-[95px]"
        src="/icons/logo_kubo.svg"
        alt="Logo blanco con la palabra kubo"
        title="Kubo"
      />
      <span
        class="tw-flex tw-gap-x-3 tw-border tw-py-[3px] lg:tw-py-[5px] tw-px-[6px] lg:tw-px-3 tw-rounded-[5px] tw-text-[13px] lg:tw-text-base"
      >
        Español
        <img src="/icons/arrow_down.svg" alt="Arrow down icon" />
      </span>
    </div>
    <div class="lg:tw-hidden">
      <img src="/icons/burger.svg" alt="Burger icon" />
    </div>
    <div class="tw-hidden lg:tw-block">
      <ul class="tw-flex tw-gap-x-14">
        <li>Inicio</li>
        <li>Servicios</li>
        <li>Expertos</li>
        <li>Blog</li>
      </ul>
    </div>
    <div class="tw-hidden lg:tw-block">
      <button>Contáctanos</button>
    </div>
  </header>
</template>

<script setup lang="ts"></script>

<style scoped></style>
