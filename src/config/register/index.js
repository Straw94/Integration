import testCom from '../../components/global/testComponent/index'

const commonList = {
    testCom
}

// 注册通用组件
let register = [];
for(let item in commonList) {
    register.push({
        name: item,
        template: commonList[item]
    })
}

export default register