<template>
  <div id="root" >
    <!-- 左侧菜单区 -->
    <el-container class="main-container">
        <el-header>
          <router-link to="/h5">H5应用</router-link> | 
          <router-link to="/bbb">master应用B</router-link> |  
          <router-link to="/promanager">promanager</router-link> |
          <router-link to="/master">master</router-link> 
          <!-- <br> -->
          <span @click="goto">返回主应用</span>
        </el-header>
        <el-main> 
          <router-view /> 
          <div id="sub-app-layout" class="app-view-box" v-html="content"></div>
          <div v-if="loading">loading^^^^^^^^^^^^^^^^^^^^</div>
        </el-main>
        <el-footer>Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
// import { routerGo } from '@/lib/js/utils.js'
export default {
  name: "rootView",
  props: {
    loading: Boolean,
    content: String,
    num:Number
  },
  methods: {
    goto(){
      console.log('ffffffffffffff====================')
      // routerGo('/login','/login')
      this.$router.push('/')
    }
  },
};
</script>

<style lang="scss">
html,
body {
  margin: 0;
  padding: 0;
  height: 100%;
}
.main-container  {
  // display: flex;
  width: 100%;
  height: 100%;
}
.el-container {
  height: 100vh;
  .el-header {
    padding:0;
  } 
}

</style>
