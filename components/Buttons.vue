<script setup>
const { increment, decrement } = useCounter()
</script>
<template>
    <div>
        <button class="btn btn-outline-primary" @click="decrement()">Decrementar</button>
        <button class="btn btn-outline-primary ms-2" @click="increment(5)">Incrementar por 5</button>
        <button class="btn btn-outline-primary ms-2" @click="increment()">Incrementar</button>
    </div>
</template>