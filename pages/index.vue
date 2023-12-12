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
      <div>
        <button class="tw-bg-[#6B1DBE] tw-px-4 tw-py-1 tw-rounded-md">
          Contáctanos
        </button>
      </div>
    </header>
    <section
      class="tw-flex tw-flex-col lg:tw-flex-row tw-justify-between tw-px-6 lg:tw-px-24 tw-pt-[70px] lg:tw-pt-28"
    >
      <div class="tw-w-[276px] lg:tw-w-[345px]">
        <h1 class="tw-text-[28px] lg:tw-text-4xl tw-font-bold">
          Da el primer paso para crear tu app,
          <span class="tw-text-primary">Ellos ya lo hicieron</span>:
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
      <div class="tw-w-full lg:tw-w-[645px] tw-mt-16 lg:tw-mt-0">
        <GeneralFormSuscription />
      </div>
    </section>
    <section class="tw-px-8 lg:tw-px-[173px] tw-pt-[164px]">
      <div class="tw-w-full lg:tw-w-[642px] tw-mx-auto">
        <h1
          class="tw-text-[26px] lg:tw-text-[45px] tw-font-bold tw-text-center"
        >
          Somos Kubo una empresa de desarrollo de software
        </h1>
        <h2
          class="tw-text-[26px] lg:tw-text-[45px] tw-font-bold tw-text-center tw-pt-10 tw-pb-[104px] tw-text-primary"
        >
          ¿Qué ofrecemos?
        </h2>
      </div>
      <div class="tw-flex tw-flex-col tw-gap-y-32 lg:tw-gap-y-[104px]">
        <div
          class="tw-flex tw-flex-col lg:tw-flex-row tw-gap-x-[102px] tw-items-center"
        >
          <div class="tw-flex-none">
            <img
              class="tw-max-w-none tw-w-[325px] lg:tw-w-[347px]"
              src="/img/celular-servicios@2x.png"
              alt=""
            />
          </div>
          <div class="tw-w-[308px] lg:tw-w-[392px]">
            <h1
              class="tw-text-[22px] lg:tw-text-[28px] tw-font-bold tw-py-5 lg:tw-py-0 tw-leading-tight"
            >
              Desarrollo de apps multiplataforma y nativas
            </h1>
            <p class="tw-text-sm lg:tw-text-xl tw-w-[280px] lg:tw-w-[367px]">
              Desarrollamos aplicaciones móviles que generan
              <span class="tw-text-secondary tw-font-semibold"
                >ventajas competitivas en el mercado</span
              >
            </p>
          </div>
        </div>
        <div
          class="tw-flex tw-flex-col lg:tw-flex-row-reverse tw-gap-x-[102px] tw-items-center"
        >
          <div class="tw-flex-none">
            <img
              class="tw-w-[347px]"
              src="/img/lapiz-servicios@2x.png"
              alt=""
            />
          </div>
          <div class="tw-w-full lg:tw-w-[358px]">
            <h1
              class="tw-text-[22px] lg:tw-text-[28px] tw-font-bold tw-py-5 lg:tw-py-0"
            >
              Diseño UX/ UI
            </h1>
            <p class="tw-text-sm lg:tw-text-xl">
              Creamos
              <span class="tw-text-secondary tw-font-semibold"
                >experiencias únicas</span
              >
              para que los usuarios conecten con tu negocio
            </p>
          </div>
        </div>
        <div
          class="tw-flex tw-flex-col lg:tw-flex-row tw-gap-x-[102px] tw-items-center"
        >
          <div class="tw-flex-none">
            <img
              class="tw-w-full lg:tw-w-[347px]"
              src="/img/lupa-servicios@2x.png"
              alt=""
            />
          </div>
          <div class="tw-w-full lg:tw-w-[347px]">
            <h1
              class="tw-text-[22px] lg:tw-text-[28px] tw-font-bold tw-py-5 lg:tw-py-0"
            >
              QA Testing
            </h1>
            <p class="tw-text-sm lg:tw-text-xl">
              Hacemos las pruebas necesarias para que tu producto digital, salga
              con
              <span class="tw-text-secondary tw-font-semibold"
                >los más altos estándares de calidad</span
              >
            </p>
          </div>
        </div>
      </div>
    </section>
    <section>
      <h2
        class="tw-text-[26px] lg:tw-text-[45px] tw-font-bold tw-text-center tw-pt-32 lg:tw-pt-[161px] tw-pb-[104px] tw-text-primary"
      >
        ¿Por qué escoger Kubo?
      </h2>
      <div
        class="tw-flex tw-flex-col lg:tw-flex-row tw-justify-between tw-space-y-32 lg:tw-space-y-0 lg:tw-px-[174px]"
      >
        <div
          v-for="(reason, key) in listReasons"
          :key="key"
          class="tw-flex tw-flex-col tw-items-center"
        >
          <img :class="reason.class" :src="reason.image" alt="Icon" />
          <p
            class="tw-pt-8 tw-text-[22px] lg:tw-text-[28px] tw-text-center"
            :class="[key < 2 ? 'tw-w-[240px]' : 'tw-w-[220px]']"
          >
            {{ reason.text }}
          </p>
        </div>
      </div>
    </section>
    <section>
      <h2
        class="tw-text-[45px] tw-font-medium tw-w-full lg:tw-w-[720px] lg:tw-pt-[156px] tw-text-center tw-mx-auto tw-leading-tight"
      >
        Estos son algunos de los clientes que
        <span class="tw-font-bold">han confiado en nosotros</span>
      </h2>
      <p
        class="tw-text-xl tw-w-full lg:tw-w-[360px] tw-text-center tw-mx-auto tw-pt-6"
      >
        Trabajamos junto a ellos para
      </p>
      <p class="tw-text-xl tw-w-full lg:tw-w-[380px] tw-text-center tw-mx-auto">
        dar vida a sus apps móviles y sitios web.
      </p>
      <p
        class="tw-text-xl tw-w-full lg:tw-w-[420px] tw-text-[#67CEFC] tw-text-center tw-mx-auto tw-font-semibold tw-pb-6"
      >
        ¡Selecciona y descubre quienes nos eligieron!
      </p>
      <div class="tw-flex tw-justify-center lg:tw-gap-x-[122px]">
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
      <div class="tw-flex tw-flex-col tw-items-center tw-px-7 lg:tw-px-0">
        <h2 class="tw-text-[26px] lg:tw-text-[45px] tw-font-bold tw-pb-5">
          Kubo news
        </h2>
        <h3 class="tw-text-sm lg:tw-text-xl tw-font-semibold">
          ¿Qué hay de nuevo?
        </h3>
        <p class="tw-text-center">
          Descubre aquí las últimas maravillas del mundo digital
        </p>
      </div>
      <div
        class="tw-flex tw-flex-col lg:tw-flex-row tw-justify-center tw-gap-y-16 lg:tw-gap-y-0 lg:tw-gap-x-16 tw-pt-[101px] tw-px-6"
      >
        <div
          class="tw-bg-[#151521] tw-w-full lg:tw-w-[578px] tw-h-full lg:tw-h-[384px] tw-p-[38px] tw-rounded-[31px]"
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
          class="tw-bg-[#151521] tw-w-full lg:tw-w-[578px] tw-h-full lg:tw-h-[384px] tw-p-[38px] tw-rounded-[31px]"
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
    <section
      class="tw-flex tw-flex-col lg:tw-flex-row lg:tw-justify-between tw-pt-[160px] lg:tw-pt-[240px] lg:tw-pl-[107px] lg:tw-pr-[85px]"
    >
      <div class="tw-px-8 lg:tw-px-0">
        <h1
          class="tw-text-3xl lg:tw-text-[45px] tw-font-bold tw-text-primary tw-w-[220px] lg:tw-w-[405px] tw-mb-8 tw-leading-tight"
        >
          ¿Listo para dar vida a tu idea?
        </h1>
        <p
          class="tw-font-bold tw-w-[290px] lg:tw-w-[380px] tw-text-[26px] lg:tw-text-[28px] tw-mb-14"
        >
          Creamos apps y damos vida a negocios exitosos
        </p>
        <img
          class="tw-w-[300px] tw-mx-auto lg:tw-ml-0 lg:tw-w-[445px]"
          src="/img/binoculares-servicios@2x.png"
          alt="Icon binoculares"
        />
      </div>
      <div class="tw-w-full lg:tw-w-[645px] tw-px-8 lg:tw-px-0">
        <GeneralFormSuscription />
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
