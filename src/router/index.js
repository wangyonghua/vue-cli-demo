import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import demo from '@/views/Demo'
import listMain from '@/views/ListMain'
import p from '@/views/parent'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/test',
      name: 'demo',
      component: demo
    },
    {
      path: '/list',
      name: 'listMain',
      component: listMain
    },
    {
      path: '/test1',
      name: 'test1',
      component: p
    }
  ]
})
