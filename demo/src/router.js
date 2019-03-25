import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HelloWorld from './components/helloWorld.vue'
import Amount from './components/Amount.vue'
const router=new Router({
  mode:'history',
  routes:[
    { path: '/', redirect: '/'},
    {'path':'/HelloWorld','name':'HelloWorld',component: HelloWorld},
    {'path':'/Amount','name':'Amount',component: Amount},
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: function () {
        return import(/* webpackChunkName: "about" */ './About.vue')
      }
    }
  ]
})
export default router
