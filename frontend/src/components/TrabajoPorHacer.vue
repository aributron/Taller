<template>
  <!-- MUESTRA EL AUTO, LOS REPUESTOS (Y SI ESTAN INSTALADOS O NO), EL ESTADO DEL AUTO EN GENERAL (TODOS EN UN OBJ TRABAJO) -->
  <div>
  <h1>Sistema de Taller - Trabajo por hacer</h1>

    {{ listaVehiculos }}  <br/>
 
    Codigo <input type="text" v-model="this.vehiculo.codigo"/>
    Descripcion <input type="text" v-model="this.vehiculo.descripcion"/> 
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
    };
  },
  methods: {
    cambio() {
      // console.log('cambio');
      this.aumentar();
    },
    agregar() {
      try {
        const copiaVehiculo = {...this.vehiculo};
        //console.log(copiaVehiculo);
        //this.agregarVehiculo({ ...this.vehiculo });
        this.agregarVehiculo(copiaVehiculo);
      }catch(error){

        console.log(error);
      }
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