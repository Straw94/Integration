// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import 'element-ui/lib/theme-chalk/index.css'
import router from './config/router'
import store from './config/store'
import Vuex from 'vuex'
import Plugin from './plugin/common'
import ElementUI from 'element-ui'

import ComponentRegister from './config/register'


Vue.use(ElementUI)
Vue.use(Plugin,{Vuex, ComponentRegister})




Vue.config.productionTip = false
/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
