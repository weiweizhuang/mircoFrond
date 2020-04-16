
import Home from '@/views/Home'
const routes = [
    {
      path: "/",
      name: "tag",
      component: () => import('@/views/tagPage/index')
    },
    {
      path: "/home",
      name: "home",
      component: Home
    },
    {
      path: "/xiaojia",
      name: "xiaojia",
      component: () => import('@/views/xiaojia')
    },
  ];
  
  export default routes