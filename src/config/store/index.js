import Vue from 'vue'
import Vuex from 'vuex'
import Test1 from './test1'
import Test2 from './test2'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Test1,
    
    // 只是提供参考范例、 再项目中并未使用
    Test2
  }
})
