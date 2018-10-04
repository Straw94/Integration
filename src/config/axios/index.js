// axios 全局配置
const config = {
    // 全局配置
    base:{
        baseurl:'http://localhost:9091',
        token:'testtoken'
    },
    // 错误信息
    errmsg:{
        title: '错误',
        message: '操作失败！',
        type: 'error'
    },
    // 加载
    loading:{
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0, 0, 0, 0.7)'
    }
    
}



export default config