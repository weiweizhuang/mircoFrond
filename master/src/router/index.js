import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import BBB from "../views/bbb.vue";
import login from "../views/login.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: '/login'
  },
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: "/aaa",
    name: "aaa",
    component: Home
  },
  {
    path: "/bbb",
    name: "bbb",
    component: BBB
  },
  {
    path: "/master",
    name: "home",
    component: Home,
    children:[
      {
        path: "liuceng",
        name: "liuceng",
        component: ()=> import('@/views/liuceng')
      },
      {
        path: "xiaojia",
        name: "xiaojia",
        component: ()=> import('@/views/xiaojiao')
      },
    ]
  }
];

const createRouter = () => new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes
  });

const router = createRouter();

// 重置路由
export function resetRouter() {
const newRouter = createRouter()
router.matcher = newRouter.matcher // reset router
}

export default router;