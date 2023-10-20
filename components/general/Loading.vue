<script setup lang="ts">
import { ref } from 'vue'
const loading = useLoading(ref(false))
</script>

<template>
  <div v-if="loading" class="viewLoading">
    <img src="/loading.gif" alt="Cargando" />
    <p>Cargando, por favor espere...</p>
  </div>
</template>
<style lang="scss">
.viewLoading {
  position: fixed;
  z-index: 1010;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
  cursor: default;
  img {
    width: 200px;
  }
  p {
    color: white;
    font-size: 1.1em;
  }
}
</style>
