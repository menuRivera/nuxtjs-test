<script setup>
const { currentPage } = usePokemons()
</script>

<template>
    <div class="mb-5">
        <h1>Page: {{ currentPage }}</h1>
    </div>
</template>