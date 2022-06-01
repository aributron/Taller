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
    getRepuestos() {
        return apiClient.get('/api/repuestos');
    },
    setRepuesto(repuesto) {
        return apiClient.post('/api/setrepuesto', repuesto);
    },
    deleteRepuesto(codigo) {
        return apiClient.delete('/api/repuesto/' + codigo);
    },
    modificarRepuesto(repuesto) {
        // chequear
        return apiClient.put('/api/setrepuesto', repuesto)
    }
}