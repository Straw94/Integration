import https from './testListen'


const state = {
  test:'BeforeHtppState',
  stateCommit: 'stateCommitBefore'
}



// getters
const getters = { 
  testGetters: state => state.test,
  stateCommit: state => state.stateCommit
}




// actions
const actions = {
    testActions ({ state, commit }, product) {
        https.testListen().then(res=>{
            commit('testMutations', res.data.data)
        })
    }
}



// mutations
const mutations = {
    // Mutations 的函数名区分推荐  ------- https://vuex.vuejs.org/guide/mutations.html
    testMutations (state, status) {
        state.test = `author: ${status.author}  age: ${status.age}  message: ${status.msg}`
    },

    mutationsTest (state, status) {
        state.stateCommit = state.stateCommit == 'stateCommitChange' ? 'stateCommitBefore' : 'stateCommitChange'
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
