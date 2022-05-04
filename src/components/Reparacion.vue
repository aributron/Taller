
<template>
    <div>
        <h2>Esta es la reparacion</h2>
        
    </div>
</template>

<script>
import Vehiculo from '../components/Vehiculo.vue'
export default {
    components: {Vehiculo},
    data() {
        return {
           
            estado : 
            [{nombre:"En proceso"}, {nombre:"Terminado"}, 
            {nombre:"Stand by"}],
            horasEstimadas : 2,
            repuestos :
            [{nombre: "Correa de distribucion", precio: 2000},
            {nombre: "Filtro de aire", precio: 1000},
            {nombre: "Bomba de agua", precio: 1500}],
            
        }
    },
    methods: {
        calcularPrecio() {
            console.log('Aca se calcula el precio');
        }
    }
    
}

</script>


