import Vue from 'vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import App from './App.vue'
import router from './router'
import axios from "axios"
axios.defaults.baseURL = "http://itsyuekao.com:5000"
axios.defaults.headers["Content-Type"] = "application/x-www-form-urlencoded"

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
