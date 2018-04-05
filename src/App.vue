<template>
    <div id="app">
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        name: 'app'
    }
</script>

<style>
    * {
        font-family: 'Montserrat', Arial, sans-serif;
    }

    .container {
        margin: 0 auto;
        max-width: 800px;
    }

    .cake {
        padding: 3rem;
    }

    .cake img {
        width: 100%;
    }

    .header {
        display: flex;
        justify-content: space-between;
        margin: 2rem 0;
    }

    .header h1 {
        margin: 0;
    }

    a.link {
        color: cornflowerblue;
        text-decoration: none;
        font-weight: 700;
        border: 1px solid cornflowerblue;
        padding: .5rem 1rem;
        border-radius: 5rem;
        width: 9rem;
        text-align: center;
    }
</style>
