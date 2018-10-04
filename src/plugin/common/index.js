import comobj from '../../config/globalFn'
import http from '../http/index'

const configPlugin = {

  install (Vue, options) {
    // if (options && options.sidebarLinks) {
    //   SidebarStore.sidebarLinks = options.sidebarLinks
    // }
    // Vue.mixin({
    //   data () {
    //     return {
    //       sidebarStore: SidebarStore
    //     }
    //   }
    // })

    // 全局组件注册
    options.ComponentRegister.map(val => {
      Vue.component(val.name,val.template)
    })
    // axios
    Vue.prototype.$http = http
    // 通用方法
    Vue.prototype.$comobj = comobj

            
    // const { mapGetters,mapMutations,mapActions,mapState } = options.Vuex
    // Vue.prototype.$mapGetters = mapGetters
    // Vue.prototype.$mapMutations = mapMutations
    // Vue.prototype.$mapActions = mapActions
    // Vue.prototype.$mapState = mapState
    

    // Object.defineProperty(Vue.prototype, '$sidebar', {
    //   get () {
    //     return this.$root.sidebarStore
    //   }
    // })
    // Vue.component('side-bar', Sidebar)
    // Vue.component('sidebar-item', SidebarItem)
  }
}

export default configPlugin
