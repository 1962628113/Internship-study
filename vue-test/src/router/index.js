import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import hello from '@/components/hello'
import mycomponent from '@/components/mycomponent'
import increment from '@/components/increment'
import computedNumber from '@/components/computed'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/increment'
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/hello',
      name: 'hello',
      component: hello
    },
    {
      path: '/mycomponent',
      name: 'mycomponent',
      component: mycomponent
    },
    {
      path: '/increment',
      name: 'increment',
      component: increment
    },
    {
      path: '/computed',
      name: 'computedNumber',
      component: computedNumber
    }
  ]
})
