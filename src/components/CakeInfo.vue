<template>
    <div class="container">
        <div class="back-button">
            <router-link :to="{ name: 'CakesList' }" class="link">&larr; Go back</router-link>
        </div>
        <div v-if="Object.keys(cake).length === 0">
            Loading...
        </div>
        <div v-else class="cake">
            <div class="cake__header">
                <h1>{{ cake.name }}</h1>
                <span class="cake__yum-factor">Yum factor: <yum-factor :rating="cake.yumFactor"></yum-factor></span>
            </div>
            <img :src="cake.imageUrl" alt="">
            <p>{{ cake.comment }}</p>
        </div>
    </div>
</template>

<script>
    import YumFactor from './YumFactor'

    export default {
        components: {
            YumFactor,
        },
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

<style>
    .back-button {
        margin-top: 2rem;
    }

    .cake__header {
        display: flex;
        align-items: center;
    }

    .cake__header h1 {
        flex: 1;
    }

    .cake__yum-factor {
        display: flex;
        align-items: center;
    }
</style>
