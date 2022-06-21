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
      
          <div>
            <button type="button" class="btn btn-dark" @click="agregar"> Agregar vehiculo </button>
          </div>
        {{ mensajeError }}
  </body>
</template>

<script>
import vehiculoService from "../services/vehiculoService.js";
import clienteService from "../services/clienteService.js";

export default {
  data() {
    return {
      lista: [],
      vehiculo: { id: 0, patente: "", modelo: "", clienteId: 0},
      mensajeError: "",
      listaClientes: []
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
    async agregar() {
      try {
        const patente = await vehiculoService.getVehiculosPorPatente(this.vehiculo.patente);
        const pat = this.vehiculo.patente;
        if (patente.data.length == 0 &&
            (pat.length == 6 ||
            pat.length == 7 ) &&
            this.vehiculo.modelo.length != 0) {

          this.vehiculo.id = this.lista.length+1;
          this.vehiculo.clienteId = await this.getClienteId();
          console.log(this.vehiculo.clienteId);
          const obj = {...this.vehiculo};
          vehiculoService.setVehiculo(obj); 
          this.lista.push(obj);
        } else {
          this.mensajeError = "Patente existente o dato inválido";
        }
      } catch (error) {
        this.mensajeError = "Patente existente o dato inválido";
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

    },
    async getClienteId() {
      const rta = await clienteService.getClientes();
      
      const clientes = rta.data;
      const id = clientes[clientes.length-1].id;
      return id;
    }
  },
};
</script>

<style>
    #bod {
      background-color: lavender;
      padding: 20px;
    }
</style>
  
  