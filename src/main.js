// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'
import FastClick from 'fastclick'

import router from './router'
import App from './App'
import store from './store'

import 'animate.css'

Vue.config.productionTip = false
Vue.use(VueProgressBar)

FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
