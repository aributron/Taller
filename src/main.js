import { createApp } from 'vue'
import Taller from './Taller.vue'
import router from './router/router.js'
import { createPinia } from 'pinia'

const app = createApp(Taller); 

app.use(router);

app.use(createPinia())


app.mount('#app');
