import {defineStore} from 'pinia'

export const useStore = defineStore ('main', {
state: () => {
    return {
      // all these properties will have their type inferred automatically     
      listaVehiculos: [],
      contador: 0
    }
  },
  getters: {
    mostrarVehiculos: (state) => state.listaVehiculos.toString()
  },
  actions: {
    aumentar() {
      this.contador++;
    },
    agregarVehiculo(vehiculo) {
      console.log(vehiculo);
      this.listaVehiculos.push(vehiculo);
    }
  },

})