import { createApp } from 'vue'
import {faker} from 'faker'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLightbulb, faHouse, faWallet, faLock, faLaptop, faDownload, faPhone, faPhoneAlt, faArrowDown, faArrowRightToBracket, faNetworkWired, faDiagramProject, faPoundSign, faBars } from '@fortawesome/free-solid-svg-icons'
import { faBell, faEye } from '@fortawesome/free-regular-svg-icons'
import store from './store'

import  './assets/css/main.css'
import  './assets/js/main.js'
import App from './App.vue'
import router from './router'


library.add(faHouse, faLightbulb, faBell, faWallet, faLock, faLaptop, faDownload, faPhone, faPhoneAlt, faArrowDown, faArrowRightToBracket, faNetworkWired, faDiagramProject, faPoundSign, faEye, faBars)

createApp(App)
.use(router)
.use(store)
.use(faker)
.component('fa', FontAwesomeIcon)
.mount('#app')
