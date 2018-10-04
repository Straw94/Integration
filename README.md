# vue-integration

> vue-cli + elementui + axios</br>
  大型项目架构</br>
  包括axios相关错误处理</br>
  elementUI http请求loading</br>
  全局组件注册</br>
  Vuex使用示例</br>
  全局方法封装等...

# 目录结构

> build && config</br>
>> vue-cli 相关build配置文件
>
> node-server</br>
>> node服务 主要测试axios 的http请求封装
>
> src</br>
>> assets 放置一些图片或者css文件 不做演示
>>
>> components 组件
>>
>> config 全局配置
>>> axios --- axios一些简单配置
>>>
>>> globalFn --- 全局方法（尽量遵从函数式编程思想）
>>>
>>> register --- 全局组件注册
>>>
>>> router   --- 路由配置
>>>
>>> store    --- vuex 配置
>
> pages
>> pages目录 可以做业务模块划分
>
> plugin
>> common
>>> 通过vue.install 添加vue原型属性
>>
>> http
>>> axios 配置



## Setup
``` bash
## Setup
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# install node dependencies
cd node-server
npm install
node index.js

## Build Setup

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
