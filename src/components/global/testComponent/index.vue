<template>
    <div class='component'>Global Component Test!
    	<div>{{ testGetters }}</div>
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed:{
        ...mapGetters({
            testGetters:'testGetters'
        })
    }
}
</script>

<style>
.component {
	height: 200px; 
	width: 80%; 
	background: grey; 
	padding-top: 30px;
	margin: 0 auto;
}
</style>
