import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createPinia } from 'pinia'
import i18n  from '@/i18n'

import './assets/main.css'

// Import Bootstrap and BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

//import * as bootstrap from 'bootstrap'

const app = createApp(App)





app.use(router)
app.use(createPinia())
app.use(i18n)

app.mount('#app')
