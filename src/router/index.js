import Vue from 'vue'
import Router from 'vue-router'
import CakesList from '@/components/CakesList'
import AddCake from '@/components/AddCake'
import CakeInfo from '@/components/CakeInfo'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'CakesList',
            component: CakesList,
        },
        {
            path: '/add',
            name: 'AddCake',
            component: AddCake,
        },
        {
            path: '/cakes/:id',
            name: 'CakeInfo',
            component: CakeInfo,
        },
    ],
})
