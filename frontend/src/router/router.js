import {createRouter, createWebHashHistory} 
from 'vue-router'
import Cliente from '../components/Cliente.vue'
import Home from '../components/Home.vue'
import Reparacion from '../components/Reparacion.vue'
import Vehiculo from '../components/Vehiculo.vue'
import NotFound from '../components/NotFound.vue'
import TrabajoPorHacer from '../components/TrabajoPorHacer.vue'
import Login from '../components/Login.vue'
import Logout from '../components/Logout.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/cliente', component: Cliente },
    { path: '/reparacion', component: Reparacion },
    { path: '/vehiculo', component: Vehiculo },
    { path: '/trabajoporhacer', component: TrabajoPorHacer },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
    { path: '/logout', component: Logout, meta : { requiresAuth : true} },
    { path: '/login', component: Login },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

router.beforeEach((to, from, next) => {
    const loggedIn = localStorage.getItem('usuario');
    if ( to.matched.some(record => record.meta.requiresAuth) && !loggedIn ) {
        next('/')
    }
    next()
})

export default router