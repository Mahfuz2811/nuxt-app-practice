<template>
    <div>
        

        <h2>About</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ullam sunt minus consectetur sequi dignissimos reiciendis numquam temporibus, mollitia velit.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ullam sunt minus consectetur sequi dignissimos reiciendis numquam temporibus, mollitia velit.</p>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>

    // const { data } = useFetch('/api/about?name=Mahfuz', {
    //     method: 'POST',
    //     body: { age: 30 }
    // })

    const { data } = await useFetch('/api/currency/GBP')

</script>

<style scoped>
    h2 {
        margin-bottom: 20px;
        font-size: 36px;
    }
    p {
        margin: 20px 0;
    }
</style>