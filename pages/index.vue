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
    <section>
      <h2
        class="tw-text-[45px] tw-font-bold tw-text-center tw-pt-10 tw-pb-[104px] tw-text-primary"
      >
        ¿Por qué escoger Kubo?
      </h2>
      <div class="tw-flex tw-justify-between tw-px-[174px]">
        <div
          v-for="(reason, key) in listReasons"
          :key="key"
          class="tw-flex tw-flex-col tw-items-center"
        >
          <img :class="reason.class" :src="reason.image" alt="Icon" />
          <p
            class="tw-pt-8 tw-text-[28px] tw-text-center"
            :class="[key < 2 ? 'tw-w-[240px]' : 'tw-w-[220px]']"
          >
            {{ reason.text }}
          </p>
        </div>
      </div>
    </section>
    <section>
      <h2
        class="tw-text-[45px] tw-font-medium tw-w-[720px] tw-text-center tw-mx-auto"
      >
        Estos son algunos de los clientes que
        <span class="tw-font-bold">han confiado en nosotros</span>
      </h2>
      <p class="tw-text-xl tw-w-[360px] tw-text-center tw-mx-auto tw-pt-6">
        Trabajamos junto a ellos para
      </p>
      <p class="tw-text-xl tw-w-[380px] tw-text-center tw-mx-auto">
        dar vida a sus apps móviles y sitios web.
      </p>
      <p
        class="tw-text-xl tw-w-[420px] tw-text-[#67CEFC] tw-text-center tw-mx-auto tw-font-semibold tw-pb-6"
      >
        ¡Selecciona y descubre quienes nos eligieron!
      </p>
      <div class="tw-flex tw-justify-center tw-gap-x-[122px]">
        <div>
          <label class="tw-text-xl tw-text-primary tw-font-medium">
            <input id="companies" type="radio" name="companies" />
            Empresas
          </label>
        </div>
        <div>
          <label class="tw-text-xl tw-text-primary tw-font-medium">
            <input id="startups" type="radio" name="startups" />
            Startups
          </label>
        </div>
        <div>
          <label class="tw-text-xl tw-text-primary tw-font-medium">
            <input id="goverment" type="radio" name="goverment" />
            Gobierno
          </label>
        </div>
      </div>
      <div
        class="tw-flex tw-justify-between tw-items-center tw-px-[74px] tw-pt-[126px] tw-pb-[280px]"
      >
        <div v-for="(logo, key) in listLogoCompanies" :key="key">
          <img :class="logo.class" :src="logo.src" alt="Logo" />
        </div>
      </div>
    </section>
    <section>
      <div class="tw-flex tw-flex-col tw-items-center">
        <h2 class="tw-text-[45px] tw-font-bold tw-pb-5">Kubo news</h2>
        <h3 class="tw-text-xl tw-font-semibold">¿Qué hay de nuevo?</h3>
        <p class="">Descubre aquí las últimas maravillas del mundo digital</p>
      </div>
      <div class="tw-flex tw-px-[74px] tw-gap-x-16 tw-pt-[101px]">
        <div
          class="tw-bg-[#151521] tw-w-[578px] tw-h-[384px] tw-p-[38px] tw-rounded-[31px]"
        >
          <h2 class="tw-text-2xl tw-font-bold tw-w-[80%]">
            Los Avances de la Inteligencia Artificial
          </h2>
          <p class="tw-pt-5 tw-pb-[72px] tw-w-[90%]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <button>Entérate</button>
        </div>
        <div
          class="tw-bg-[#151521] tw-w-[578px] tw-h-[384px] tw-p-[38px] tw-rounded-[31px]"
        >
          <h2 class="tw-text-2xl tw-font-bold tw-w-[80%]">
            Los Avances de la Inteligencia Artificial
          </h2>
          <p class="tw-pt-5 tw-pb-[72px] tw-w-[90%]">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <button>Entérate</button>
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

const listReasons = [
  {
    text: 'Más de 15 años de experiencia',
    image: '/img/gorro-expertos@2x.png',
    class: 'tw-h-[235px]',
  },
  {
    text: '150 proyectos realizados',
    image: '/img/medalla-expertos@2x.png',
    class: 'tw-h-[235px]',
  },
  {
    text: 'Modelos de pago especiales',
    image: '/img/pagos-expertos@2x.png',
    class: 'tw-h-[228px]',
  },
]

const listLogoCompanies = [
  {
    src: '/img/KPMG@2x.png',
    class: 'tw-w-[221px]',
  },
  {
    src: '/img/Herbalife@2x.png',
    class: 'tw-w-[176px]',
  },
  {
    src: '/img/Sura@2x.png',
    class: 'tw-w-[221px]',
  },
  {
    src: '/img/Bayer@2x.png',
    class: 'tw-w-[144px]',
  },
]
</script>

<style scoped></style>
