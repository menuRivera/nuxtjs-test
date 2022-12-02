<script setup>
const { nextPage, prevPage } = usePokemons()
</script>
<template>
    <div class="mb-3">
        <button class="btn btn-outline-primary" @click="prevPage()">Previous page</button>
        <button class="btn btn-outline-primary ms-2" @click="nextPage()">Next page</button>
    </div>
</template>