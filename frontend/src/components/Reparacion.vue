
<template>
    <div>

        <div>
            <input type="text" v-model="pat" />
            <button @click="buscarVehiculos(pat)"> Buscar </button> 
        </div>

        <li v-for="vehiculo in listaVehiculos" :key="vehiculo.patente">
            {{ vehiculo.patente }} {{ vehiculo.modelo }}
        </li>
          {{ mensajeError }}

        <div v-if="listaVehiculos.length != 0">

          <h2>Lista de repuestos</h2>
          <li v-for="repuesto in lista" :key="repuesto.codigo">
              {{ repuesto.precio }} {{ repuesto.nombre }}
              <button @click="agregar(repuesto)">Agregar</button>
          </li>

           <h2>Repuestos a utilizar</h2>
            <li v-for="repuesto in listaStore" :key="repuesto.codigo">
              {{ repuesto.precio }} {{ repuesto.nombre }}
              <button @click="eliminar(repuesto)">Eliminar</button>
            </li>
          <p> 
              El precio total acumulado es: ${{ precioTotal }}
          </p>    

            <button @click="completar"> Dar de alta trabajo </button> 

        </div>
        <br>
    </div>
</template>

<script>
import repuestoService from "../services/repuestoService.js";
import vehiculoService from "../services/vehiculoService.js";
import trabajoService from "../services/trabajoService.js";

export default {
  data() {
    return {
      lista: [],
      listaVehiculos: [],
      cantTrabajos: 0,
      repuesto: { codigo: 0, nombre: "", precio: 0 },
      listaStore: [],
      vehiculo: {id:0, patente: "ABC122", modelo: "Gol"},
      trabajo: 
      { id: 1, 
        vehiculo: {id:0, patente: "", modelo: ""}, 
        estado: "En proceso",
        repuestos: []
      },   
      mensajeError: "",
      precioTotal: 0,
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

    },
    async buscarVehiculos(pat) {
     try {
      const rta = await vehiculoService.getVehiculos();
      
      this.listaVehiculos = rta.data.filter( e => e.patente == pat );
      
    } catch (error) {
      this.mensajeError = "No se encontró el vehiculo";
      console.log(error.error);
    }
    },
    completar () {
      try {
        
        const vehiculo = this.listaVehiculos[0];
        const rep = this.listaStore;
        const obj = {id: this.cantTrabajos, vehiculo, estado: "en proceso", rep};

        trabajoService.setTrabajo(obj); 
        this.cantTrabajos++;
        const fecha = new Date().toDateString();
        const mensajeRecibo = `Imprimiendo recibo...\n\tFecha: ${fecha} \n\tAuto: ${vehiculo.patente} \n\tPresupuesto total de repuestos: $${this.precioTotal}`;
        alert(mensajeRecibo); 
      } catch (error) {
        this.mensajeError = "No se pudo obtener los datos ";
        console.log(error.error);
      }
    }
  },
};
</script>


