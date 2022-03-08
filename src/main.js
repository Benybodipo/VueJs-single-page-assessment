import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLightbulb, faHouse, faWallet, faLock, faLaptop, faDownload, faPhone, faPhoneAlt, faArrowDown, faArrowRightToBracket, faNetworkWired, faDiagramProject, faPoundSign } from '@fortawesome/free-solid-svg-icons'
import { faBell, faEye } from '@fortawesome/free-regular-svg-icons'

import  './assets/css/main.css'
import  './assets/js/main.js'
import App from './App.vue'
import router from './router'


library.add(faHouse, faLightbulb, faBell, faWallet, faLock, faLaptop, faDownload, faPhone, faPhoneAlt, faArrowDown, faArrowRightToBracket, faNetworkWired, faDiagramProject, faPoundSign, faEye)


createApp(App)
.use(router)
.component('fa', FontAwesomeIcon)
.mount('#app')
