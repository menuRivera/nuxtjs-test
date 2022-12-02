<script setup>
const pokeStore = usePokeStore()


</script>
<template>
    <div>
        <div v-for="pokemon in pokeStore.pokemons" :key="pokemon.name">{{ pokemon.name }}
        </div>
    </div>
</template>