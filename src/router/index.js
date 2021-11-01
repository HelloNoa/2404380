import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/main'
import Token from '@/components/token'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Main',
      component: Main,
      props: true
    },
    {
      path: '/token/',
      name: 'Token',
      component: Token,
      props: true
    }
  ]
})
