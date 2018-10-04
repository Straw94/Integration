<template>
<div>
    <el-card style='width: 80%; margin: 0 auto;' class="box-card">
        <div slot="header" class="clearfix">
            <span>全局插件方法</span>
        </div>
        <el-button @click='commonPlugin'>click</el-button>
        <div style='margin: 20px auto;'>
            {{ globalFn }}
        </div>
    </el-card>
    <el-card style='width: 80%; margin: 20px auto;' class="box-card">
        <div slot="header" class="clearfix">
            <span>Vuex</span>
        </div>
        <div style='margin: 10px;'>
            <el-button>{{ testGetters }}</el-button>
        </div>
        <div style='margin: 10px;'>
            <el-button @click='state'>{{ stateCommit }}</el-button>
        </div>
        <div style='margin: 10px;'>
            <el-button @click='actions'>ActionsChange</el-button>
        </div>
    </el-card>


    <test-com></test-com>
</div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
    data(){
        return {
            globalFn: 'globalFn',
            msg:111
        }
    },
    methods:{
        actions(){
            this.$store.dispatch('testActions','actions-data')
        },

        state(){
            this.$store.commit('mutationsTest');
        },

        commonPlugin(){
            this.globalFn = this.$comobj.fnTest('commonPlugin');
        }
    },
    mounted(){
        this.$http.get('/api/httpGetTest').then(res=>{
            console.log(res)
        })
    },
    computed:{
        ...mapGetters({
            testGetters:'testGetters',
            stateCommit: "stateCommit"
        })
    }
}
</script>

