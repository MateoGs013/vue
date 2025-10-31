<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()

const personaje = ref(null);

onMounted(() => {
  fetch('https://hp-api.onrender.com/api/characters')
    .then((res) => res.json())
    .then((characters) => {

      personaje.value = characters.find(
        (char) => char.id === route.params.detalleid
      );
    });
})

</script>

<template>
  <h1>Detalle del personaje {{ $route.params.detalleid }}</h1>
  <div v-if="personaje">
    <p><strong>Nombre:</strong> {{ personaje.name }}</p>
    <p><strong>Casa:</strong> {{ personaje.house }}</p>
    <p><strong>Género:</strong> {{ personaje.gender }}</p>
  </div>
  <div v-else>
    <p>Cargando personaje...</p>
  </div>

  <RouterLink to="/listado">Volver al listado</RouterLink>
</template>
