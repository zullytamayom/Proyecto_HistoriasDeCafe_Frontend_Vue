import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

// 1. Importar el JS de Bootstrap (NECESARIO para que el carrusel se mueva)
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

// 2. Estilos base
import './assets/css/paletaColores.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'


createApp(App).mount('#app')
