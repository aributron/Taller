<script setup>
import Home from './components/Home.vue'
import Reparacion from './components/Reparacion.vue'

</script>

<template>
<div>
  
  <p>
    
     <router-link to="/">Go to Home</router-link>|
    <router-link to="/cliente">Cliente</router-link>|
    <router-link to="/reparacion">Reparacion</router-link>|
    <router-link to="/vehiculo">Vehiculo </router-link>|
    <router-link to="/trabajoporhacer">Trabajo por hacer </router-link>|  
  </p>

    <router-view></router-view>

</div>
</template>

<style>
@import './assets/base.css';
</style>
