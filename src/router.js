import Vue from 'vue'
import Router from 'vue-router'
import Login from './components/Login.vue'
import Home from './components/Home.vue'
// 引入全局样式
import './assets/css/reset.css'

Vue.use(Router)

const roter = new Router({
  routes: [
    // 重定向到LOGIN 访问/的时候
    { path: '/', redirect: '/login' },
    { path: '/login', component: Login },
    { path: '/home', component: Home }
  ]
})
// 全局路由守卫 判断拦截没有token的页面访问需求
roter.beforeEach((to, from, next) => {
  // 方向来访问login的请求
  if (to.path === '/login') return next()
  // 如果没有携带 token 来访问其他需要验证的页面要求 登录
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  // 如果存在身份直接放行
  next()
})
export default roter
