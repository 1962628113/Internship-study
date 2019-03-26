import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import Amount from './components/Amount.vue'

const student = {
  template: '<div>' +
    '用户{{$route.params.id}}' +
    '<br/>路径：{{$route.path}}' +
    '<br/>{{$route.params}}' +
    '<br/>{{$route.query}}' +
    '<br/>{{$route.hash}}' +
    '<br/>完整的路径{{$route.fullPath}}' +
    '<br>路由名称：{{$route.name}}' +
    '<br/>正在重定向的路由名称：{{$route.redirectedFrom}}' +
    '</div>'
}
const User = {
  props: ['id'],
  template: '<div>user:{{ id}}</div>'
}
const Sidebar={
  props: ['id'],
  template: '<div>Sidebar:{{id}}</div>'
}
const SearchUser={
  props: ['id'],
  template: '<div>SearchUser:{{id}}</div>'
}
const router = new Router({
  mode: 'history',
  routes: [
    {path: '/student/:id', name: 'student', component: student},
    // {path:'/user/:id',name:'User',component: User},
        {
      path: '/user/:id',
      components: { default: User },
      props: { default: true}
    },
    // { path: '/search', component: SearchUser, props: (route) => ({ query: route.query.q })},
    {path: '/', redirect: '/about'},
    {'path': '/Amount', 'name': 'Amount', component: Amount},
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


