<template>
    <div>Hola Prueba</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'CycleOption',
    created() {
        // Initialization logic can go here
        console.log('CycleOption component created');
    },
    mounted() {
        // Code to run when the component is mounted
        console.log('CycleOption component mounted');
    },
    updated() {
        // Code to run when the component is updated
        console.log('CycleOption component updated');
    },
    unmounted() {
        // Cleanup code when the component is unmounted
        console.log('CycleOption component unmounted');
    },
});
</script>

<style scoped></style>