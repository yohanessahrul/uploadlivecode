import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Upload from './views/Upload.vue'
import Galery from './views/Galery.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/galery',
      name: 'galery',
      component: Galery
    },
    {
      path: '/upload',
      name: 'upload',
      component: Upload
    }
  ]
})
