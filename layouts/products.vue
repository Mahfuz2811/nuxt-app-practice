<template>
    <div>
        <header>
            <nav>
                <NuxtLink to="/products">Nuxt App</NuxtLink>
            </nav>
        </header>

        <!-- page content -->
        <div>
            <slot />   
        </div>
        <footer>
            <ul>
                <li><NuxtLink to="/">Home</NuxtLink></li>
                <li><NuxtLink to="/about">About</NuxtLink></li>
                <li><NuxtLink to="/products">Products</NuxtLink></li>
            </ul>
        </footer>
    </div>
</template>

<script setup>

</script>

<style scoped>
    .router-link-exact-active {
        color: green;
    }
</style>