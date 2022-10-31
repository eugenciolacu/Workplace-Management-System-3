import {
  createRouter,
  createWebHistory,
} from 'vue-router';

import AdminPage from '../admin/AdminPage.vue';
import BookingPage from '../booking/BookingPage.vue';
import HomePage from '../home/HomePage.vue';
import LoginPage from '../login/LoginPage.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [{
    path: '/AdminPage',
    name: 'AdminPage',
    component: AdminPage,
  }, {
    path: '/BookingPage',
    name: 'BookingPage',
    component: BookingPage,
  }, {
    path: '/HomePage',
    name: 'HomePage',
    component: HomePage,
  }, {
    path: '/LoginPage',
    name: 'LoginPage',
    component: LoginPage,
  }],
});
