<template>
<div>
    <h2 v-font-size>Computed Example</h2>
    <p v-custom-size:xlarge>Subtotal: {{ subtotal }}</p>
    <p>VAT: {{ vat }}%</p>
    <p v-custom-font.large.cyan>Total: {{ total }}</p>
    <input type="number" v-model.number="subtotal" placeholder="Enter subtotal" />
    <input type="number" v-model.number="vat" placeholder="Enter VAT percentage" />
</div>
</template>

<script lang="ts" setup>
    import { ref, computed } from 'vue';
    import type { Ref } from 'vue';
    // Import necessary functions from Vue
    // Define the VAT and subtotal as reactive references
    // Use `ref` for simple reactive values and `computed` for derived state
    const vat = ref(21);
    const subtotal: Ref<number> = ref(0);
    const total: Ref<number> = computed(() => {
        return subtotal.value + (subtotal.value * vat.value / 100);
    });
</script>

<style scoped>

</style>