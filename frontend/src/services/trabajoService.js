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
    getTrabajos() {
        return apiClient.get('/api/trabajos');
    },
    setTrabajo(trabajo) {
        return apiClient.post('/api/settrabajo', trabajo);
    },
    deleteTrabajo(id) {
        return apiClient.delete('/api/trabajo/' + id);
    },
    modificarTrabajo(trabajo) {
        // chequear
        return apiClient.put('/api/settrabajo', trabajo)
    }
}