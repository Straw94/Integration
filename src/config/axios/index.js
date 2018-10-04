// axios 全局配置
const config = {
    // 全局配置
    base:{
        // 全局http请求路径
        baseurl:'http://localhost:3030',
        // token 验证 可根据场景自行配置
        // token:'testtoken'
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
        // 超时时间
        time: 1000,
        // 显示文字
        text: 'Loading',
        // 可查看element-ui api
        spinner: 'el-icon-loading',
        // 背景色
        background: 'rgba(0, 0, 0, 0.7)'
    }
    
}



export default config