<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'

const nuxtApp = useNuxtApp()

const { t } = useI18n()

const emit = defineEmits(['save-image'])
const props = defineProps({
  id: {
    type: String,
    required: false,
    default: 'inputForUploadImage',
  },
  defaultImage: {
    type: String,
    required: false,
    default: '',
  },
  design: {
    type: Object,
    required: false,
    default: () => ({
      width: 230,
      height: 140,
    }),
  },
  measures: {
    type: Object,
    required: false,
    default: () => ({
      validate: false,
      width: 0,
      height: 0,
    }),
  },
  size: {
    type: Object,
    required: false,
    default: () => ({
      validate: true,
      size: 1000000,
      message: '1 MB',
    }),
  },
  extension: {
    type: Object,
    required: false,
    default: () => ({
      validate: true,
      regex: /(.jpg|.jpeg)$/i,
      imageName: '.JPG, .JPEG',
      message:
        'La única extensión permitida para subir la imagen es .jpg o .jpeg',
      input: 'image/jpg',
    }),
  },
  title: {
    type: String,
    required: false,
    default: '',
  },
})

const image = ref('')
const refs = ref(null)

const backgroundColor = computed(() =>
  image.value === ''
    ? 'background-color: white;'
    : 'background-color: transparent;',
)

onMounted(() => {
  image.value = props.defaultImage
})

// methods

const openImage = () => {
  refs.value.click()
}
const fileOnload = (e) => {
  const result = e.target.result
  const element = document.getElementById(`${props.id}-img`)
  element.setAttribute(
    'style',
    'background-image: url("' + result + '");' + backgroundColor.value,
  )
}
const onFilePicked = (e) => {
  // ? Define input
  const fileInput = document.getElementById(props.id)
  console.log(props.id, fileInput)
  // ? Define path file
  const filePath = fileInput.value
  // ? Define extensions
  const allowedExtensions = props.extension.regex

  const file = fileInput.files[0]

  // ? Identify the extension from the file selected
  if (props.extension.validate && !allowedExtensions.exec(filePath)) {
    const element = document.getElementById(`${props.id}-img`)
    element.setAttribute(
      'style',
      'background-image: url("' + image.value + '");' + backgroundColor.value,
    )

    showAlert({
      type: 'error',
      message: t(props.extension.message),
    })
    fileInput.value = ''

    emit('save-image', '')
    return false
  }

  if (props.size.validate && file.size > props.size.size) {
    const element = document.getElementById(`${props.id}-img`)
    element.setAttribute(
      'style',
      'background-image: url("' + image.value + '");' + backgroundColor.value,
    )
    showAlert({
      type: 'error',
      message:
        'El tamaño de la imagen es mayor al permitido (' +
        props.size.message +
        '). Tamaño actual = ' +
        file.size / props.size.size +
        'MB',
    })

    fileInput.value = ''
    emit('save-image', '')
    return false
  } else {
    const self = props

    const img = new Image()
    img.onload = function () {
      if (
        props.measures.validate &&
        (this.width.toFixed(0) !== props.measures.width.toString() ||
          this.height.toFixed(0) !== props.measures.height.toString())
      ) {
        const element = document.getElementById(`${self.id}-img`)
        element.setAttribute(
          'style',
          'background-image: url("' +
            image.value +
            '");' +
            backgroundColor.value,
        )
        showAlert({
          message:
            'Las medidas deben ser: ' +
            self.measures.width +
            ' * ' +
            self.measures.height +
            '. Medidas de tu imagen: ' +
            this.width.toFixed(0) +
            ' * ' +
            this.height.toFixed(0),
        })
        fileInput.value = ''
        emit('save-image', '')
      } else {
        const file = e.target.files[0]
        const imageType = /image.*/

        if (!file.type.match(imageType)) {
          return
        }

        const reader = new FileReader()
        reader.onload = (event) => {
          fileOnload(event)
        }
        reader.readAsDataURL(file)

        image.value = file
        emit('save-image', image.value)
      }
    }
    img.src = URL.createObjectURL(file)
  }
}
</script>
<template>
  <div class="container-file-picker">
    <div
      class="mx-auto imageDiv"
      :style="`width: ${design.width}px; height: ${design.height}px; max-width: ${design.width}px; max-height: ${design.height}px;`"
    >
      <div
        :id="`${id}-img`"
        :style="'background-image: url(' + image + '); ' + backgroundColor"
      />
      <input
        :id="id"
        :ref="(el) => (refs = el)"
        type="file"
        style="display: none"
        :accept="extension.input"
        size="1"
        @change="onFilePicked"
      />
    </div>
    <div class="container-file-picker__text">
      <p v-if="title !== ''" class="title-image">{{ title }}</p>
      <p class="textImage">
        Sube una imagen en <span>{{ extension.imageName }}</span
        >, de tamaño
        <span>{{ measures.width }} x {{ measures.height }} px</span>, evita
        superar el peso de <span>{{ size.message }}</span>
      </p>
      <div class="uploadPhotoButton" @click="openImage">Subir</div>
    </div>
  </div>
</template>
<style lang="scss">
.container-file-picker {
  display: flex;
  .imageDiv {
    position: relative;
    margin-bottom: 20px;
    background-color: #ffffff;
    border: 1px solid #cacccf;
    background-image: url('/img/ic_image.svg');
    background-repeat: no-repeat;
    background-size: 40%;
    background-position: center;
    position: relative;
    border-radius: 5px;
    overflow: hidden;
    [id*='-img'] {
      width: 100%;
      height: 100%;
      background-position: center;
      background-size: contain;
      background-repeat: no-repeat;
    }
  }
  &__text {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .title-image {
    width: 100%;
    font-weight: 600;
    margin-bottom: 0;
  }
  .textImage {
    max-width: 200px;
    margin-top: 5px;
    margin-bottom: 10px;
    font-size: 0.8em;
    color: #a0a4a8;
    span {
      color: #100e0c;
    }
  }
  .uploadPhotoButton {
    font-size: 0.9em;
    color: #000000;
    font-weight: 500;
    background-color: #ffdf32;
    cursor: pointer;
    border-radius: 5px;
    padding: 6px;
    text-align: center;
    width: 126px;
  }
}
</style>
