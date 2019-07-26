/* eslint-disable import/no-duplicates */
import Vue from 'vue'
import { Button, Form, FormItem, Input, Message } from 'element-ui'
// 绑定在Vue的全局上

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.prototype.$message = Message
