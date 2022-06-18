
<template>
    <div>

        <div>
            <input type="text" v-model="pat" />
            <button class="btn btn-outline-success" type="submit" @click="buscarVehiculos(pat)"> Buscar </button> 
            {{ mensajeError }}
            
        </div>

        <div v-if="listaVehiculos.length != 0">

      <table class="table table-dark table-striped">
         <thead>
            <tr>
                <th>
                    <p>Patente </p>
                </th>
                <th>
                    <p>Modelo</p>
                </th>
                <th></th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="vehiculo in listaVehiculos" :key="vehiculo.patente">
            
            <td>
               {{ vehiculo.patente }} 
            </td>
            <td>
                {{ vehiculo.modelo }} 
            </td>
          </tr>
         
        </tbody>
      </table>

        <h2>Lista de repuestos</h2>

     <table class="table table-dark table-striped">
         <thead>
            <tr>
                <th>
                    <p>Precio</p>
                </th>
                <th>
                    <p>Nombre</p>
                </th>
                <th></th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="repuesto in lista" :key="repuesto.codigo">
            
            <td>
               {{ repuesto.precio }} 
            </td>
            <td>
                {{ repuesto.nombre }} 
            </td>
            <button type="button" class="btn btn-dark" @click="agregar(repuesto)">Agregar</button>
          </tr>
         
        </tbody>
      </table>
     <div v-if="listaStore.length != 0">
        <h2>Lista de repuestos a utilizar</h2>
      <table class="table table-dark table-striped">
         <thead>
            <tr>
                <th>
                    <p>Precio</p>
                </th>
                <th>
                    <p>Nombre</p>
                </th>
                <th></th>
            </tr>
        </thead>
        <tbody>
          <tr v-for="repuesto in listaStore" :key="repuesto.codigo">
            
            <td>
               {{ repuesto.precio }} 
            </td>
            <td>
                {{ repuesto.nombre }} 
            </td>
            <button type="button" class="btn btn-dark" @click="eliminar(repuesto)">Eliminar</button>
          </tr>
         
        </tbody>
      </table>
    </div>

          <p> 
              El precio total acumulado es: ${{ precioTotal }}
          </p>    
             Ingresar horas estimadas para el trabajo:
            <br>
            <input type="text" v-model="precioManoDeObra"/>
            <br> 
            <button type="button" class="btn btn-dark" @click="completar"> Dar de alta trabajo </button> 
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
      vehiculo: {id:0, patente: "ABC122", modelo: "Gol", clienteId: 1},
      trabajo: 
      { id: 1, 
        vehiculo: {id:0, patente: "", modelo: "", clienteId: 0}, 
        estado: "En proceso",
        repuestos: [],
        presupuesto: 0
      },   
      mensajeError: "",
      precioTotal: 0,
      precioManoDeObra: 0
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
      this.mensajeError = "No se encontro el vehiculo";
      console.log(error.error);
    }
    },
    completar () {
      try {
        
        const vehiculo = this.listaVehiculos[0];
        const rep = this.listaStore;
        const manoDeObra = this.precioManoDeObra;
        const precioPorHora = this.calcularPorHora(manoDeObra);
        const total = this.precioTotal+=precioPorHora;
        const obj = {id: this.cantTrabajos, vehiculo, estado: "en proceso", rep, total};

        trabajoService.setTrabajo(obj); 
        this.cantTrabajos++;
        const fecha = new Date().toDateString();
        const mensajeRecibo = `Imprimiendo recibo...\n\tFecha: ${fecha} \n\tAuto: ${vehiculo.patente} \n\tPresupuesto total de repuestos: $${this.precioTotal}`;
        alert(mensajeRecibo); 
      } catch (error) {
        this.mensajeError = "No se pudo obtener los datos ";
        console.log(error.error);
      }
    },
    calcularPorHora (num) {
      const PRECIO_HORA = 1000;
      return PRECIO_HORA * num;
    }
  },
};
</script>


