<template>
    <div class="container">
        <div class="header">
            <h1>Cakes App</h1>
            <router-link :to="{ name: 'AddCake' }" class="link">Add a new cake</router-link>
        </div>
        <div v-if="cakes.length === 0">
            Loading...
        </div>
        <div class="cakes" v-else>
            <div class="cake" v-for="cake in cakes" :key="cake.id" @click="$router.push({ path: `/cakes/${cake.id}` })">
                <h1>{{ cake.name }}</h1>
                <img :src="cake.imageUrl" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                cakes: [],
            }
        },
        mounted() {
            fetch('http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/cakes')
                .then(response => response.json())
                .then(data => this.cakes = data)
        },
    }
</script>
