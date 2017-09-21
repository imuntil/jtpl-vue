import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'

Vue.use(Router)

const router = new Router({
  routes: [
    { path: '/', name: 'home', component: Home },
    { path: '/about', name: 'about', component () { return System.import('@/pages/About') } },
    { path: '/contact', name: 'contact', component () { return System.import('@/pages/Contact') } },
    { path: '/product', name: 'product', component () { return System.import('@/pages/Product') } },
    { path: '/news', name: 'news', component () { return System.import('@/pages/News') } }
  ]
})

router.beforeEach((to, from, next) => {
  router.app.$Progress.start()
  next()
})
router.afterEach(route => {
  router.app.$Progress.finish()
})

export default router
