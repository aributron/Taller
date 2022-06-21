<template>
  <body>
    
    <div>
      <h2>Alta-baja de clientes</h2>
      <table class="table table-dark table-striped">
         <thead>
            <tr>
                <th>
                    <p>Nombre </p>
                </th>
                <th>
                    <p>Apellido</p>
                </th>
                <th></th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="cliente in lista" :key="cliente.id">
            
            <td>
               {{ cliente.nombre }} 
            </td>
            <td>
                {{ cliente.apellido }} 
            </td>
            <button type="button" class="btn btn-dark" @click="eliminar(cliente.id)">Borrar</button>
          </tr>
         
        </tbody>
      </table>
      <form>

      <div class="row g-3 align-items-center">
        <div class="col-auto">
          <label class="col-form-label">Nombre</label>
        </div>
        <div class="col-auto">
          <input type="text" v-model="cliente.nombre" class="form-control">
        </div>
      </div>
      
      <div class="row g-3 align-items-center">
        <div class="col-auto">
          <label class="col-form-label">Apellido</label>
        </div>
        <div class="col-auto">
          <input type="text" v-model="cliente.apellido" class="form-control">
        </div>
      </div>

      <div class="row g-3 align-items-center">
        <div class="col-auto">
          <label class="col-form-label">Telefono</label>
        </div>
        <div class="col-auto">
          <input type="text" v-model="cliente.telefono" class="form-control">
        </div>
      </div>
      </form>
      <div>
        <button type="button" class="btn btn-dark" @click="agregar">Agregar cliente</button>
      </div> 
        
      {{ mensajeError }}
    </div>

  </body>
</template>

<script>
import clienteService from "../services/clienteService.js";

export default {
  data() {
    return {
      lista: [],      
      cliente: {id: 0, nombre: "", apellido: "", telefono: ""},
      mensajeError: "",
    };
  },
  created: async function () {
    try {
      const rta = await clienteService.getClientes(); 
      this.lista = rta.data;
    } catch (error) {
      this.mensajeError = "No se pudo obtener los datos ";
      console.log(error.error);
    }
  },
  methods: {
    agregar() {
      try {
        this.cliente.id = this.lista.length+1;
        const obj = {...this.cliente};
        clienteService.setCliente(obj); 
        this.lista.push(obj);
        this.$router.push("/vehiculo");
      } catch (error) {
        this.mensajeError = "No se pudo obtener los datos ";
        console.log(error.error);
      }
    },
    eliminar(codigo) {
      try {
        clienteService.deleteCliente(codigo);
        const listaCodigos = this.lista.map( e => { return e.codigo } )
        const indice = listaCodigos.indexOf(codigo)
        this.lista.splice(indice,1);

      } catch (error) {
        this.mensajeError = "No se pudo obtener los datos ";
        console.log(error.error);
      }

    }
  }
}
</script>