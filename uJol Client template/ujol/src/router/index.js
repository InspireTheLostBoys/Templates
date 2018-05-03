import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

import Router from 'vue-router';
import Login from '@/components/Login';
import Main from '@/components/Main';
import Activity from '@/components/Activity/Activity';
import Profile from '@/components/Profile/Profile';
import Notifications from '@/components/Notifications/Notifications';

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [{
    path: '/',
    component: Login
  }, {
    path: '/Login',
    component: Login
  }, {
    path: '/Main',
    component: Main,
    children: [{
      path: 'Activity',
      components: {
        MainPage: Activity
      }
    }, {
      path: 'Profile',
      components: {
        MainPage: Profile
      }
    }, {
      path: 'Notifications',
      components: {
        MainPage: Notifications
      }
    }]
  }]
})
