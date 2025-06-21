<template>
    <div></div>
</template>

<script lang="ts" setup>
import { onMounted, onUpdated, onUnmounted } from 'vue';

onMounted(() => {
    console.log('CycleComposition component mounted');
});
onUpdated(() => {
    console.log('CycleComposition component updated');
});
onUnmounted(() => {
    console.log('CycleComposition component unmounted');
});
</script>

<style scoped></style>