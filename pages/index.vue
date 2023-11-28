<template>
  <div>
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
    <section class="tw-flex tw-justify-between tw-px-24 tw-pt-28">
      <div class="tw-w-[345px]">
        <h1 class="tw-text-4xl tw-font-bold">
          Da el primer paso para crear tu app,
          <span>Ellos ya lo hicieron</span>:
        </h1>
        <div
          class="tw-grid tw-grid-cols-2 tw-gap-y-10 tw-items-center tw-pt-16"
        >
          <div
            v-for="(image, index) in listIconsCompanies"
            :key="image.src"
            :class="{ 'tw-justify-self-center': index % 2 !== 0 }"
          >
            <img :src="image.src" alt="" />
          </div>
        </div>
      </div>
      <div class="tw-w-[645px]">
        <form action="" class="tw-grid tw-grid-cols-3 tw-gap-x-10 tw-gap-y-5">
          <div class="tw-col-span-3">
            <input class="tw-w-full" type="text" />
          </div>
          <div class="tw-col-span-3">
            <input class="tw-w-full" type="text" />
          </div>
          <div><input class="tw-w-full" type="text" /></div>
          <div class="tw-col-span-2">
            <input class="tw-w-full" type="text" />
          </div>
        </form>
      </div>
    </section>
    <section class="tw-px-[173px] tw-pt-[164px]">
      <div class="tw-w-[642px] tw-mx-auto">
        <h1 class="tw-text-[45px] tw-font-bold tw-text-center">
          Somos Kubo una empresa de desarrollo de software
        </h1>
        <h2
          class="tw-text-[45px] tw-font-bold tw-text-center tw-pt-10 tw-pb-[104px] tw-text-primary"
        >
          ¿Qué ofrecemos?
        </h2>
      </div>
      <div class="tw-flex tw-flex-col tw-gap-y-[104px]">
        <div class="tw-flex tw-gap-x-[102px] tw-items-center">
          <div class="tw-flex-none">
            <img
              class="tw-w-[347px]"
              src="/img/celular-servicios@2x.png"
              alt=""
            />
          </div>
          <div class="tw-w-[392px]">
            <h1 class="tw-text-[28px] tw-font-bold">
              Desarrollo de apps multiplataforma y nativas
            </h1>
            <p class="tw-text-xl tw-w-[367px]">
              Desarrollamos aplicaciones móviles que generan ventajas
              competitivas en el mercado
            </p>
          </div>
        </div>
        <div
          class="tw-flex tw-flex-row-reverse tw-gap-x-[102px] tw-items-center"
        >
          <div class="tw-flex-none">
            <img
              class="tw-w-[347px]"
              src="/img/lapiz-servicios@2x.png"
              alt=""
            />
          </div>
          <div class="tw-w-[358px]">
            <h1 class="tw-text-[28px] tw-font-bold">Diseño UX/ UI</h1>
            <p class="tw-text-xl">
              Creamos experiencias únicas para que los usuarios conecten con tu
              negocio
            </p>
          </div>
        </div>
        <div class="tw-flex tw-gap-x-[102px] tw-items-center">
          <div class="tw-flex-none">
            <img class="tw-w-[347px]" src="/img/lupa-servicios@2x.png" alt="" />
          </div>
          <div class="tw-w-[347px]">
            <h1 class="tw-text-[28px] tw-font-bold">QA Testing</h1>
            <p class="tw-text-xl">
              Hacemos las pruebas necesarias para que tu producto digital, salga
              con los más altos estándares de calidad
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const listIconsCompanies = [
  {
    src: '/icons/ic_laika.svg',
  },
  {
    src: '/icons/ic_gopass.svg',
  },
  {
    src: '/icons/ic_gane.svg',
  },
  {
    src: '/icons/ic_maxxi_beach.svg',
  },
  {
    src: '/icons/ic_banclic.svg',
  },
  {
    src: '/icons/ic_beri_cool.svg',
  },
]
</script>

<style scoped></style>
