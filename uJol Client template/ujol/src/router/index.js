//Core imports
import Vue from 'vue'
import Router from 'vue-router'

//Page imports
import Login from '@/components/Login/Login'

//Main Pages
import Main from '@/components/Main/Main';
import Activity from '@/components/Main/Activity/Activity';
import Notifications from '@/components/Main/Notifications/Notifications';
import NewsFeed from '@/components/Main/NewsFeed/NewsFeed';
import Profile from '@/components/Main/Profile/Profile';
import Venues from '@/components/Main/Venues/Venues';
import Friends from '@/components/Main/Friends/Friends';
import Settings from '@/components/Main/Settings/Settings';

Vue.use(Router);

export default new Router({
  routes: [{
    path: '/',
    name: 'Login',
    component: Login
  }, {
    path: '/Main',
    name: 'Main',
    component: Main,
    children: [{
        path: 'Activity',
        components: {
          MainPage: Activity
        }
      },
      {
        path: 'Notifications',
        components: {
          MainPage: Notifications
        }
      },
      {
        path: 'NewsFeed',
        components: {
          MainPage: NewsFeed
        }
      },
      {
        path: 'Profile',
        components: {
          MainPage: Profile
        }
      },
      {
        path: 'Venues',
        components: {
          MainPage: Venues
        }
      },
      {
        path: 'Friends',
        components: {
          MainPage: Friends
        }
      },
      {
        path: 'Settings',
        components: {
          MainPage: Settings
        }
      }
    ]
  }]
})
