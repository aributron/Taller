// EXPRESS  ->   ESCUCHANDO EN PUERTO 8080   
// EXPONE UNA API PARA ESCUCHAR

//  AXIOS CONSULTA A EXPRESS
//

import axios from 'axios'

// https://jsonplaceholder.typicode.com/posts

const apiClient = axios.create({
    baseURL: 'http://localhost:3001',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getVehiculos() {
        return apiClient.get('/api/vehiculos');
    },
    getVehiculosPorPatente(patente) {
        return apiClient.get('/api/vehiculos/:patente');
    },
    setVehiculo(vehiculo) {
        return apiClient.post('/api/setvehiculo', vehiculo);
    },
    deleteVehiculo(codigo) {
        return apiClient.delete('/api/vehiculos/:codigo');
    },
    modificarVehiculo(vehiculo) {
        // chequear
        return apiClient.put('/api/setvehiculo', vehiculo)
    }
}