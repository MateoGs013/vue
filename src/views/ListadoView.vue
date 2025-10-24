<script setup>
import { onMounted, ref } from 'vue';
const personajes = ref([]);
onMounted(() => {
  fetch('https://hp-api.onrender.com/api/characters')
    .then((res) => res.json())
    .then((characters) => {
      personajes.value = characters
    });
})
/* const personajes = [
  {
    id: 1,
    nombre: 'Homero Simpson',
    descripcion: 'Descripción del personaje 1',
  },
  {
    id: 2,
    nombre: 'Marge Simpson',
    descripcion: 'Descripción del personaje 2',
  },
  {
    id: 3,
    nombre: 'Bart Simpson',
    descripcion: 'Descripción del personaje 3',
  },
  {
    id: 4,
    nombre: 'Lisa Simpson',
    descripcion: 'Descripción del personaje 3',
  },
] */
</script>

<template>
  <!-- <h1>Listado</h1>
  <ul>
    <li v-for="personaje in personajes">
      <h2>{{ personaje.nombre }}</h2>
      <p>{{ personaje.descripcion }}</p>
      <RouterLink :to="`/detalle/${personaje.id}`">Ver</RouterLink>
    </li>
  </ul> -->

  <ul>
    <li v-for="personaje in personajes">
      <h2>{{ personaje.name }}</h2>
      <RouterLink :to="`/detalle/${personaje.id}`">Ver</RouterLink>
    </li>
  </ul>
</template>
