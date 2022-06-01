
<template>
    <div>

        <h2>Lista de repuestos</h2>
        <li v-for="repuesto in lista" :key="repuesto.codigo">
            {{ repuesto.precio }} {{ repuesto.nombre }}
            <button @click="agregar(repuesto)">Agregar</button>
        </li>
        {{ mensajeError }}

        <h2>Repuestos a utilizar</h2>
        <li v-for="repuesto in listaStore" :key="repuesto.codigo">
            {{ repuesto.precio }} {{ repuesto.nombre }}
            <button @click="eliminar(repuesto)">Eliminar</button>
        </li>
        <br>
        <p> 
            El precio total acumulado es: ${{ precioTotal }}
        </p>    
    </div>
</template>

<script>
import repuestoService from "../services/repuestoService.js";

export default {
  data() {
    return {
      lista: [],
      listaStore: [],
      repuesto: { codigo: 0, nombre: "", precio: 0 },
      mensajeError: "",
      precioTotal: 0
    };
  },
  created: async function () {
    try {
      const rta = await repuestoService.getRepuestos(); 
      this.lista = rta.data;
    } catch (error) {
      this.mensajeError = "No se pudo obtener los datos ";
      console.log(error.error);
    }
  },
  methods: {
    agregar(obj) {
      try {
        this.listaStore.push(obj);
        this.calcular(obj.precio);
      } catch (error) {
        this.mensajeError = "No se pudo obtener los datos ";
        console.log(error.error);
      }
    },
    calcular(num) {
        this.precioTotal+= num;
    },
    eliminar(obj) {
      try {
        const indice = this.listaStore.indexOf(obj)
        this.listaStore.splice(indice, 1);
        this.calcular(-obj.precio);

      } catch (error) {
        this.mensajeError = "No se pudo obtener los datos ";
        console.log(error.error);
      }

    }
    
  },
};
</script>


