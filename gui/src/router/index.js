import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/Home'
import Demo from '@/components/Demo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', name: 'Home', components: {default: Home}
    },
    {
      path: '/Demo', name: 'Demo', components: {default: Demo}
    },
    { path: '*', redirect: '/' }
  ]
  // mode: 'history'
})
