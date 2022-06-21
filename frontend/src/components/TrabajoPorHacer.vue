<template>
  <!-- MUESTRA EL AUTO, LOS REPUESTOS (Y SI ESTAN INSTALADOS O NO), EL ESTADO DEL AUTO EN GENERAL (TODOS EN UN OBJ TRABAJO) -->
  <div id = "tab">
  <h1>Trabajos</h1>

      <table class="table table-dark table-striped">
        <thead>
            <tr>
                <th>
                    <p>Patente </p>
                </th>
                <th>
                    <p>Estado</p>
                </th>
                <th>
                    <p>Presupuesto </p>
                </th>
                <th>
                    <p>Cliente </p>
                </th>
                <th> </th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="trabajo in trabajos" :key="trabajo.id">
            
            <td>
               {{ trabajo.vehiculo.patente }} 
            </td>
            <td>
                {{ trabajo.estado }} 
            </td>
            <td>
                ${{ trabajo.total }} 
            </td>
            <td>
                {{ trabajo.vehiculo.clienteId }}
            </td>
            
            <button type="button" class="btn btn-dark" @click="finalizar(trabajo)">Finalizar</button>
          </tr>
         
        </tbody>
      </table>
      
  </div>

</template>

<script>

import trabajoService from "../services/trabajoService.js";

export default {
  
  data() {
    return {
      trabajos: [],
      trabajo: 
      { id: 0, 
        vehiculo: {id:0, patente: "", modelo: "", clienteId: 0}, 
        estado: "En proceso",
        repuestos: [],
        presupuesto: 0,
      },
      cliente: {id: 0, nombre: "", apellido: "", telefono: ""},
      valor: 0
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
        this.agregarVehiculo(copiaVehiculo);

      } catch(error){
        console.log(error);
      }

    },
    mostrarListaFiltrada(listaVehiculos){

      const listaAux = listaVehiculos.filter((a)=>(a.codigo>2));
      return listaAux;
    },
    async getClienteId(){
      
      const cliente = await this.getClienteId(this.trabajo.vehiculo.clienteId);
    
      return cliente;
    },
    async finalizar(trab) {
    
      try {
        const indice = this.trabajos.indexOf(trab);
        
        //await trabajoService.modificarTrabajo(trab.id);
        this.trabajos[indice].estado = "Finalizado";

      } catch (error) {
        this.mensajeError = "No se pudo obtener los datos ";
        console.log(error.error);
      }
    }
    
  }
};
</script>

<style>
  tbody {
            background: #000000;
        }
</style>