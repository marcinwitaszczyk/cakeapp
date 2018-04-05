import Vue from 'vue'
import Router from 'vue-router'
import CakesList from '@/components/CakesList'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'CakesList',
            component: CakesList,
        },
    ],
})
