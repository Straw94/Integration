import Vue from 'vue'
import Vuex from 'vuex'
import Test from './test'
import Test1 from './test1'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Test,
    Test1
  }
//   strict: debug,
//   plugins: debug ? [createLogger()] : []
})
