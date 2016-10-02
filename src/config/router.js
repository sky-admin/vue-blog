/**
 * Created by lhy95 on 2016/10/2.
 */

import Index from '../components/IndexComponent.vue';
import Login from '../components/LoginComponent.vue';

const routerMap = [
  {
    path: '/',
    component: Index
  },
  {
     path: '/login',
    component: Login
  }
];

module.exports = routerMap
