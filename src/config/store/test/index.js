import https from './testListen'
import * as types from '../variable'

const state = {
  test:'Test/state/testvalue'
}



// getters
const getters = { 
  testGetteres: state => state.test
}



// actions
const actions = {
    testActions ({ state, commit }, product) {
        return new Promise ((resolve,reject)=>{
            https.testListen().then(res=>{
                commit(types.TEST_INITDATA,res)
                resolve(res)
            }).catch(err=>{
                reject(err)
            })
        })
    }
}



// mutations
const mutations = {
    [types.TEST_INITDATA] (state, status) {
        state.test = status
    }
}

export default {
    state,
    getters,
    actions,
    mutations
}
