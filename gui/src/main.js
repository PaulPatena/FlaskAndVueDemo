// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import lodash from 'lodash'

import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css' // Ensure you are using css-loader

import App from './components/App'

import axios from 'axios'
const axiosInstance = axios.create({
  baseURL: `http://${location.hostname}:4000`
})

Vue.prototype.$http = axiosInstance

Object.defineProperty(Vue.prototype, '$lodash', {value: lodash})

Vue.config.productionTip = false

Vue.use(Vuetify, {
  theme: {
    primary: '#0858ad',
    secondary: '#8DA0FC',
    accent: '#ED1B2F',
    error: '#F36F21',
    info: '#33A3DC',
    success: '#9FD645',
    warning: '#FAA519',
    warm_grey: '#E8E8E9'
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
