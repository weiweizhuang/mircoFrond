<template>
    <div>
        <span @click="goto">我是B</span>
    </div>
</template>
<script>
import { routerGo } from '@/lib/js/utils.js'
export default {
    methods:{
        goto(){
            routerGo('h5', '/h5')
        }
    }
}
</script>