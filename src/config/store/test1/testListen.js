import http from '../../../plugin/http/index'


const obj = {
    testListen(){
        return http.get('/api/vuexTest')
    }
}


export default obj