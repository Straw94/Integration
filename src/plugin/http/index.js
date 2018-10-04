import axios from 'axios'
import { Loading, Notification } from 'element-ui'
// axios 配置
import configs from '../../config/axios'

axios.defaults.baseURL = configs.base.baseurl
axios.defaults.headers.common['Authorization'] = configs.base.token
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'


let loadId = ''
let loadingClose = ''



// 添加请求拦截器
axios.interceptors.request.use((config) => {
    loadId = setTimeout(()=>{
        loadingClose = Loading.service(configs.loading)
    },5000)
    return config;
  }, (error) => {
    loadClose()
    clearTimeout(loadId)
    notiMsg()
    return Promise.reject(error);
  });



// 添加响应拦截器
axios.interceptors.response.use((response) => {
    if(!response.data.status) notiMsg(response.data)
    clearTimeout(loadId)
    return response;
  }, (error) => {
    loadClose()
    clearTimeout(loadId)
    notiMsg()
    return Promise.reject(error);
});


// 关闭对话框
function loadClose(){
    try {
        loadingClose.close()
    } catch(err){

    }
}

// 错误信息
function notiMsg(data){
    if (!data) {
        Notification(configs.errmsg)
    } else {
        Notification(Object.assign(configs.errmsg, { message: data.message }))
    }
}


export default axios