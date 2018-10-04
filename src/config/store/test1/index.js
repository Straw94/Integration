import https from './testListen'


const state = {
  test:'Test/state/testvalue'
}



// getters
const getters = { 
  testGetters: state => state.test
}




// actions
const actions = {
    testActions ({ state, commit }, product) {
        https.testListen().then(res=>{
            console.log(res)
        })
        console.log(state)
        console.log(commit)
        console.log(product)
    }
}



// mutations
const mutations = {
    testMutations (state, status) {
        // state.checkoutStatus = status
        console.log(state)
        console.log(status)
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
