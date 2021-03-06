import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './plugins/element.js'
// 全局导入 axios
import axios from 'axios'
Vue.prototype.$axios = axios
// 设置请求的根路径
axios.defaults.baseURL = 'http://127.0.0.1:8888/api/private/v1/'
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
