import {createRouter, createWebHashHistory} 
from 'vue-router'
import Cliente from '../components/Cliente.vue'
import Home from '../components/Home.vue'
import Reparacion from '../components/Reparacion.vue'
import Vehiculo from '../components/Vehiculo.vue'
import NotFound from '../components/NotFound.vue'
import TrabajoPorHacer from '../components/TrabajoPorHacer.vue'

const routes = [
    { path: '/', component: Home },
    { path: '/cliente', component: Cliente },
    { path: '/reparacion', component: Reparacion },
    { path: '/vehiculo', component: Vehiculo },
    { path: '/trabajoporhacer', component: TrabajoPorHacer },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router