<template>
<div>
    <el-button @click='commonPlugin'>全局插件方法</el-button>
    <el-button>{{ testGetters }}</el-button>
    <el-button>Vuex</el-button>
    <el-button @click='state'>testState</el-button>
    <el-button @click='actions'>testActions</el-button>
    <test-com></test-com>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        return {
            msg:111
        }
    },
    methods:{
        actions(){
            this.$store.dispatch('testActions','actions-data')
        },

        state(){
            console.log(this.$store.state.Test)
        },

        commonPlugin(){
            this.$comobj.fnTest('commonPlugin')
        }
    },
    mounted(){
        this.$http.get('/test/exception',{params:{username:23123}}).then(res=>{
            console.log(res)
        })
    },
    computed:{
        ...mapGetters({
            testGetters:'testGetters'
        })
    }
}
</script>

