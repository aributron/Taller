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
    getClientes() {
        return apiClient.get('/api/clientes');
    },
    getCliente(id) {
        return apiClient.get('/api/clientes/:id');
    },
    setCliente(cliente) {
        return apiClient.post('/api/setcliente', cliente);
    },
    deleteCliente(id) {
        return apiClient.delete('/api/clientes/' + id);
    },
    /*modificarCliente(cliente) {
        // chequear
        return apiClient.put('/api/setcliente', cliente)
    }*/
}