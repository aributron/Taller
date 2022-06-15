<template>

    <div>
    <h2>ABM Clientes</h2>
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
            <button @click="eliminar(cliente.id)">Borrar</button>
          </tr>
         
        </tbody>
      </table>

        <p>
            Id <input type="text" v-model="cliente.id" /> 
            Nombre <input type="text" v-model="cliente.nombre" /> 
            Apellido <input type="text" v-model="cliente.apellido" /> 
            Telefono <input type="text" v-model="cliente.telefono" /> 
            <button @click="agregar">Agregar cliente</button>
        </p>
        {{ mensajeError }}
    </div>

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
        const obj = {...this.cliente};
        clienteService.setCliente(obj); 
        this.lista.push(obj);
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