<template>
    <div>
        <router-link :to="{ name: 'CakesList' }">Go back</router-link>
        <div v-if="Object.keys(cake).length === 0">
            Loading...
        </div>
        <div v-else>
            <h1>{{ cake.name }}</h1>
            <span>{{ cake.yumFactor }}/5</span>
            <img :src="cake.imageUrl" alt="">
            <p>{{ cake.comment }}</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                cake: {},
            }
        },
        mounted() {
            const id = this.$route.params.id

            fetch(`http://ec2-52-209-201-89.eu-west-1.compute.amazonaws.com:5000/api/cakes/${id}`)
                .then(response => response.json())
                .then(data => this.cake = data)
        },
    }
</script>
