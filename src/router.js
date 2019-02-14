import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Login from './views/Login.vue'
import Add from './views/Add.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
    linkActiveClass:'active',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },{
          path: '/add',
          name: 'add',
          component: Add
      },

      {
          path: '/home',
          redirect:'/list',
          name: 'home',
          component: Home,
          children: [{
              path: '/list',
              name: 'list',
              // route level code-splitting
              // this generates a separate chunk (about.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component: () => import(/* webpackChunkName: "list" */ './views/List')
          },{
              path: '/user',
              name: 'user',
              // route level code-splitting
              // this generates a separate chunk (about.[hash].js) for this route
              // which is lazy-loaded when the route is visited.
              component: () => import(/* webpackChunkName: "user" */ './views/User.vue')
          },{
              path: '/info',
              name: 'info',
              component:() => import(/* webpackChunkName: "user" */ './views/Info.vue')
          },]

      }/*,
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/!* webpackChunkName: "about" *!/ './views/About.vue')
    }*/
  ]
})
