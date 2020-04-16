import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.config.productionTip = false;
Vue.use(ElementUI)
import {
    registerMicroApps, // 注册子应用
    runAfterFirstMounted, // 第一个子应用装载完毕
    // setDefaultMountApp, // 设置默认装载子应用
    start // 启动
} from "qiankun";

/**
 * 主应用公共资源下发子应用
 */
import Lib from '@/lib/js/index'

let msg = {
    utils:Lib, // 主应用读出工具类
}
let app = null;
/**
 * 渲染函数
 * appContent 子应用html
* loading 如果主应用设置loading效果，可不要
*/
function render({ appContent, loading } = {}) {
  if (!app) {
      app = new Vue({
          el: "#container",
          router,
          // store,
          data() {
              return {
                  content: appContent,
                  loading
              };
          },
          render(h) {
              return h(App, {
                  props: {
                  content: this.content,
                  loading: this.loading,
                  num:1000000
                  }
              });
          }
      });
  } else {
      app.content = appContent;
      app.loading = loading;
  }
}

/**
* 路由监听
* @param {*} routerPrefix 前缀
*/
function genActiveRule(routerPrefix) {
  return location => location.pathname.startsWith(routerPrefix);
}

// 调用渲染主应用
render();
// 注册子应用
registerMicroApps(
  [
      {
          name: "vue-promanager",
          entry: "http://hexo.zweiwei.cn",
          render,
          activeRule: genActiveRule("/promanager"),
          props:{...msg}
      },
      {
          name: "vue-h5",
          entry: "//localhost:9772",
          render,
          activeRule: genActiveRule("/h5")
      },
  ],
  {
      beforeLoad: [ 
          app => {
              console.log("before load", app);
          }
      ], // 挂载前回调
      beforeMount: [
          app => {
              console.log("before mount", app);
          }
      ], // 挂载后回调
      afterUnmount: [
          app => {
              console.log("after unload", app);
          }
      ] // 卸载后回调
  }
)

// 设置默认子应用,参数与注册子应用时genActiveRule("/aaa")函数内的参数一致
// setDefaultMountApp("/promanager");

// 第一个子应用加载完毕回调
runAfterFirstMounted(()=>{});

// 启动微服务
start();
