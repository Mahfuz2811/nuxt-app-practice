<template>
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="product in products">
                <ProductCard :product="product" />
            </div>
        </div>
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })

    const { data: products } = await useFetch('https://fakestoreapi.com/products')

    useHead({
        title: 'Products Page',
        meta: [
            { name: 'description', content: 'Product description page' }
        ]
    })

</script>

<style scoped>

</style>