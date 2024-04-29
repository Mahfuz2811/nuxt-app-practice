<template>
    <div>
        <p>Product details for {{ id }}</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quae, sit architecto eius assumenda deleniti asperiores! Culpa aperiam dolor amet. Laudantium distinctio facere hic mollitia quam magni, adipisci maxime illum.</p>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })
    
    const { id } = useRoute().params
</script>

<style scoped>

</style>