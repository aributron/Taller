
<template>
  <div>
    <div id = "banner2">
      <router-link to="/">Go to Home</router-link>|
          <div v-if="!estaLogeado">
              <router-link to="/login">Login</router-link> |
          </div>
          <div v-if="estaLogeado">
              <div class="cab_nav">              
                  <router-link to="/cliente">Cliente</router-link>|
                  <router-link to="/reparacion">Reparacion</router-link>|
                  <router-link to="/vehiculo">Vehiculo </router-link>|
                  <router-link to="/trabajoporhacer">Trabajo por hacer </router-link>| 
                  <router-link to="/logout">Logout</router-link>                   
              </div>  
          </div>
      <router-view></router-view>
    </div>

  </div>
</template>

<script>
import Home from './components/Home.vue'
import Reparacion from './components/Reparacion.vue'
import { usuarioStore } from "../src/store/usuario.js";
import { storeToRefs } from "pinia";

export default {
  setup() {
    const store = usuarioStore();
    const { usuario, estaLogeado } = storeToRefs(store);
    return {
      store,
      usuario,
      estaLogeado,
    };
  },
  data() {
    return {
    };
  },
  methods: {
  },
};
</script>


<style>

#pepe {
  background: #000000
}
#banner2{

    background-color: rgb(38, 116, 3);
  
    background-size: cover;
  
    color: rgb(255, 255, 255);
  
}


</style>
