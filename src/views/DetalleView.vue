<script setup>
import { onMounted, ref } from 'vue';
import { useRoute } from 'vue-router'

const route = useRoute()

console.log(route.params.detalleid)

const personajes = [
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
]
const personaje = ref({})
onMounted(() => {
  console.log('DetalleView montado')
  personaje.value = personajes.find((p) => p.id == route.params.detalleid)
  console.log("personaje", personaje)
})

console.log("personaje fuera", personaje)

</script>

<template>
  <h1>Detalle del personaje {{ $route.params.detalleid }}</h1>
  <p>{{ personaje }}</p>

</template>
