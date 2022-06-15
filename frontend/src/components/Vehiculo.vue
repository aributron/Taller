<template>
    <div>
        <h2>Sistema de Taller - Vehiculo</h2>
        Alta de vehiculo    
        <li v-for="vehiculo in lista" :key="vehiculo.id">
            {{ vehiculo.patente }} {{ vehiculo.modelo }}
            <button @click="eliminar(vehiculo.id)">Eliminar</button>
        </li>
        <div>
        <p>
            Id <input type="text" v-model="vehiculo.id" /> 
            Patente <input type="text" v-model="vehiculo.patente" /> 
            Modelo <input type="text" v-model="vehiculo.modelo" />
            Cliente <input type="text" v-model="vehiculo.clienteId" />
            <button @click="agregar">Agregar vehiculo</button>
        </p>
        </div>
        {{ mensajeError }}
    </div>
</template>

<script>
import vehiculoService from "../services/vehiculoService.js";

export default {
  data() {
    return {
      lista: [],
      vehiculo: { id: 0, patente: "", modelo: "", clienteId: 0},
      mensajeError: "",
    };
  },
  created: async function () {
    try {
      const rta = await vehiculoService.getVehiculos(); 
      this.lista = rta.data;
    } catch (error) {
      this.mensajeError = "No se pudo obtener los datos ";
      console.log(error.error);
    }
  },
  methods: {
    agregar() {
      try {
        const obj = {...this.vehiculo};
        vehiculoService.setVehiculo(obj); 
        this.lista.push(obj);
      } catch (error) {
        this.mensajeError = "No se pudo obtener los datos ";
        console.log(error.error);
      }
    },
    eliminar(codigo) {
      try {
        vehiculoService.deleteVehiculo(codigo);
        const listaCodigos = this.lista.map( e => { return e.codigo } )
        const indice = listaCodigos.indexOf(codigo)
        this.lista.splice(indice,1);

      } catch (error) {
        this.mensajeError = "No se pudo obtener los datos ";
        console.log(error.error);
      }

    }
  },
};
</script>