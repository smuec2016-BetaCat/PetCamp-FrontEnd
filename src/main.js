import Vue from 'vue'
import '../theme/index.css'
import '../theme/display.css'
import ElementUI from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css'
// import 'element-ui/lib/theme-chalk/display.css'
import App from './App.vue'
import router from './router'
import axios from "axios"
import Vuelidate from 'vuelidate'
import animated from 'animate.css'
import global from './global'
import VueIconfont from 'vue-iconfont'
import '../font/iconfont'

axios.defaults.baseURL = "http://192.168.1.114:5000"

Vue.use(VueIconfont,[
    {
        tag:'v-svg-icon',
        prefix:'v-icon',
        type:'svg'
    }
])
Vue.use(animated)
Vue.use(Vuelidate)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$global = global

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
