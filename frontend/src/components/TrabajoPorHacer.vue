<template>
  <!-- MUESTRA EL AUTO, LOS REPUESTOS (Y SI ESTAN INSTALADOS O NO), EL ESTADO DEL AUTO EN GENERAL (TODOS EN UN OBJ TRABAJO) -->
  <div>
  <h1>Trabajo por hacer</h1>

    {{ trabajos }}  <br/>
    <!-- REVISAR -> MOSTRAR VARIAS LISTAS 
    HACER CRUD DE CLIENTES
    -->
    <li v-for="trabajo in trabajos" :key="trabajo.id">
            {{ trabajo.vehiculo.patente }} {{ trabajo.estado }}
            <ul v-for="repuesto in trabajo.repuestos" :key="repuesto.codigo"> {{ repuesto.nombre }} 
            </ul>
    </li>
  </div>

</template>

<script>

import trabajoService from "../services/trabajoService.js";

export default {
  
  data() {
    return {
      trabajos: [],
      trabajo: 
      { id: 1, 
        vehiculo: {id:0, patente: "", modelo: ""}, 
        estado: "En proceso",
        repuestos: []
      },    
      vehiculo: {codigo:0, descripcion: ""}
    };
  },
  created: async function () {
    try {
      const rta = await trabajoService.getTrabajos(); 
      this.trabajos = rta.data;
    } catch (error) {
      this.mensajeError = "No se pudo obtener los datos ";
      console.log(error.error);
    }
  },
  methods: {
    
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