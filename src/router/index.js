import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/common/Home'
import Center from '@/components/Center'
import Page1 from '@/components/Page1'
import Page2 from '@/components/Page2'
import Page3 from '@/components/Page3'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      hidden:true,//是否隐藏
      children:[]
    },
    {
      path: '/',
      component: Home,
      name: '',
      leaf:true,//是否只有一个节点
      children:[
        {
          path: '/Center',
          name: '处理中心',
          component: Center
        }
      ]
    },
    {
      path:"/",
      component: Home,
      name:"我的工作台",
      leaf:false,
      children:[
        {
          path: '/Page1',
          name: '管理1',
          component: Page1
        },
        {
          path: '/Page2',
          name: '管理2',
          component: Page2
        },
        {
          path: '/Page3',
          name: '管理3',
          component: Page3
        }
      ]
    }
  ]
})
