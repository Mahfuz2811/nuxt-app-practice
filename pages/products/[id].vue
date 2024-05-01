<template>
    <div>
        <ProductDetails :product="product" />
    </div>
</template>

<script setup>
    definePageMeta({
        layout: 'products'
    })
    
    const { id } = useRoute().params
    const uri = 'https://fakestoreapi.com/products/' + id

    const { data: product } = await useFetch(uri)

    if(!product.value) {
        throw createError({ statusCode: 404, statusMessage: 'Product not found' })
    }

</script>

<style scoped>

</style>