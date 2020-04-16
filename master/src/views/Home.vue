<template>
  <div class="home">
        <el-menu
            :default-active="'1'"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#002557"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1"> <router-link to="/master/liuceng">流程申请</router-link> </el-menu-item>
            <el-menu-item index="2"> <router-link to="/master/xiaojia">流程审批</router-link> </el-menu-item>
            <el-menu-item index="3">流程记录</el-menu-item>
            <el-menu-item index="4">模板设置</el-menu-item>
          </el-menu>
            <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
// import { routerGo } from '@/lib/js/utils.js'

export default {
  name: "home",
  components: {
  },
  methods: {
    handleSelect(key,keypath){
      let title = '',href='';
      console.log(key,keypath,title,href)
      // switch (key) {
      //   case '1':
      //     title='liuc'
      //     href='/master/liuceng'
      //     break;
      //   case '2':
      //     title='xiaojia'
      //     href='/master/xiaojia'
      //     break;
      //   default:
      //     title=''
      //     href='/'
      //     break;
      // }
      // this.$router.push(href)
      // routerGo(title,href)
    }
  },
};
</script>