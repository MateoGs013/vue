<script setup>

const personajes = [
  {
    id: 1,
    nombre: 'Personaje 1',
    descripcion: 'Descripción del personaje 1',
  },
  {
    id: 2,
    nombre: 'Personaje 2',
    descripcion: 'Descripción del personaje 2',
  },
  {
    id: 3,
    nombre: 'Personaje 3',
    descripcion: 'Descripción del personaje 3',
  },
]

const click = (nombre) => {
  console.log(`Hola ${nombre}`)
}

</script>

<template>
  <div>
    <h1>Personajes</h1>
    <ul>
      <li v-for="personaje in personajes" :key="personaje.id">
        <h2 @click="click(personaje.nombre)">{{ personaje.nombre }}</h2>
        <p>{{ personaje.descripcion }}</p>
      </li>
    </ul>
  </div>
</template>
<style scoped>
</style>
