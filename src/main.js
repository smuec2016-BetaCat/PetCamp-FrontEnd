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
// import qs from 'qs';
// Vue.prototype.$qs = qs;
axios.defaults.baseURL = "http://itsyuekao.com:5000"
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded'


Vue.use(animated)
Vue.use(Vuelidate)
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
