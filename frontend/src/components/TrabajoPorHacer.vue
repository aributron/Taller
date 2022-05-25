<template>
  <div>Sistema de Taller - Trabajo por hacer</div>

  <div>{{ listaVehiculos }}  <br/>
  {{ mostrarListaFiltrada(listaVehiculos) }}  <br/>
    Codigo <input type="text" v-model="vehiculo.codigo">
    Descripcion <input type="text" v-model="vehiculo.descripcion"> 
    <button @click="agregar">Agregar Vehiculo</button>  
  </div>

</template>

<script>
import { useStore } from "../store/store.js";
import { storeToRefs } from 'pinia'

export default {
  setup() {
    const store = useStore();
    const { contador, listaVehiculos } = storeToRefs(store);
    const { aumentar, agregarVehiculo } = store;
    return {
      // you can return the whole store instance to use it in the template
      store,
      contador,
      aumentar,
      agregarVehiculo,
      listaVehiculos,
      
    };
  },
  data() {
   
    return {
      vehiculo: {codigo:0, descripcion: ""}
    }
  },
  methods: {
    cambio() {
      // console.log('cambio');
      this.aumentar();
    },
    agregar() {
      this.agregarVehiculo({...this.vehiculo}); 
      // this.agregarVehiculo([...this.producto,producto]); 
    },
    mostrarListaFiltrada(listaVehiculos){

      const listaAux = listaVehiculos.filter((a)=>(a.codigo>2));
      return listaAux;
    }
    
  }
};
</script>

<style>
</style>