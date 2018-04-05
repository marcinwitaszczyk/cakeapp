<template>
    <span class="rating">
        <svg v-for="i in new Array(rating)" fill="#6495ed" height="20" viewBox="0 0 18 18" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z"/><path d="M0 0h18v18H0z" fill="none"/></svg>
        <svg v-for="i in new Array(5 - rating)" fill="#6495ed" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M22 9.24l-7.19-.62L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21 12 17.27 18.18 21l-1.63-7.03L22 9.24zM12 15.4l-3.76 2.27 1-4.28-3.32-2.88 4.38-.38L12 6.1l1.71 4.04 4.38.38-3.32 2.88 1 4.28L12 15.4z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
    </span>
</template>

<script>
    export default {
        props: ['rating'],
    }
</script>

<style>
    .rating {
        display: inline-flex;
        align-items: center;
        margin-left: 1rem;
    }
</style>
