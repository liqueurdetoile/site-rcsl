import './assets/main.css'

import { createApp } from 'vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faTrophy, faFilePdf, faTv, faIdBadge } from '@fortawesome/free-solid-svg-icons'

library.add(faFacebook, faTrophy, faFilePdf, faTv, faIdBadge)

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)
app.component('FontAwesomeIcon', FontAwesomeIcon)
app.mount('#app')
