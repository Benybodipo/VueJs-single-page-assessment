import { createApp } from 'vue'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faLightbulb, faHouse, faWallet, faLock, faLaptop, faDownload, faPhone, faPhoneAlt, faArrowDown, faArrowRightToBracket, faNetworkWired, faDiagramProject, faPoundSign } from '@fortawesome/free-solid-svg-icons'
import { faBell } from '@fortawesome/free-regular-svg-icons'

import  './assets/css/main.css'
import App from './App.vue'


library.add(faHouse, faLightbulb, faBell, faWallet, faLock, faLaptop, faDownload, faPhone, faPhoneAlt, faArrowDown, faArrowRightToBracket, faNetworkWired, faDiagramProject, faPoundSign, )


createApp(App)
.component('fa', FontAwesomeIcon)
.mount('#app')
