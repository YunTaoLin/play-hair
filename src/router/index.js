import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'home',
        component: Home
    },
    {
        path: '/serve',
        name: 'serve',
        component: () =>
            import ('../views/Serve.vue')
    },
    {
        path: '/popularCut',
        name: 'popularCut',
        component: () =>
            import ('../views/Popular.vue')
    },
    {
        path: '/location',
        name: 'location',
        component: () =>
            import ('../views/Location.vue')
    },
    {
        path: '/reservation',
        name: 'reservation',
        component: () =>
            import ('../views/Reservation.vue')
    },


]

const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router