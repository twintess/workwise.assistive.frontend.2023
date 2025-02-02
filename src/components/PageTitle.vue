<template>
    <h1>{{ title }}</h1>
</template>
<script setup>
const props = defineProps({
    title: {
        type: String,
        required: true,
    }
})
</script>
<style scoped>
h1 {
    font-size: 3rem;
}
</style>