<template>
  <body id= "bod">
    
    <div>
        <h2>Alta de vehiculos</h2>
    </div>
        lista de vehiculos:    
        <li v-for="vehiculo in lista" :key="vehiculo.id">
            {{ vehiculo.patente }} {{ vehiculo.modelo }}
            <button type="button" class="btn btn-dark" @click="eliminar(vehiculo.id)"> Eliminar </button>
        </li>
        
          <div class="row g-3 align-items-center">
            <div class="col-auto">
              <label class="col-form-label">Id</label>
            </div>
            <div class="col-auto">
              <input type="text" v-model="vehiculo.id" class="form-control">
            </div>
          </div>

          <div class="row g-3 align-items-center">
            <div class="col-auto">
              <label class="col-form-label">Patente</label>
            </div>
            <div class="col-auto">
              <input type="text" v-model="vehiculo.patente" class="form-control">
            </div>
            <div class="col-auto">
              <span class="form-text">
                Must be 6-7 characters long, without spaces.
              </span>
            </div>
          </div>

          <div class="row g-3 align-items-center">
            <div class="col-auto">
              <label class="col-form-label">Modelo</label>
            </div>
            <div class="col-auto">
              <input type="text" v-model="vehiculo.modelo" class="form-control">
            </div>
          </div>

          <div class="row g-3 align-items-center">
            <div class="col-auto">
              <label class="col-form-label">Id del cliente</label>
            </div>
            <div class="col-auto">
              <input type="text" v-model="vehiculo.clienteId" class="form-control">
            </div>
          </div>      
          <div>
            <button type="button" class="btn btn-dark" @click="agregar"> Agregar vehiculo </button>
          </div>
        {{ mensajeError }}
  </body>
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

<style>
    #bod {
      background-color: lavender;
    }
</style>