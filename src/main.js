import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'

import routerMap from './config/router';

Vue.use(VueRouter);

const router = new VueRouter({
  routes: routerMap
});

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
});
