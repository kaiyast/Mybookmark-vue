import Vue from 'vue'
import Router from 'vue-router'
import Bookmarker from './bookmarker.vue';
import Home from './index.vue';
import About from './components/About.vue';
import Profile from './components/Profile.vue';
import Signup from './components/Signup.vue';

Vue.use(Router)

export default new Router({
  routes: [{
      path: '',
      component: Home,
      name: 'home'
    },
    {
      path: '*',
      redirect: {
        name: 'home'
      }
    },
    {
      path: '/about',
      component: About,
      name: 'about'
    },
    {
      path: '/signup',
      component: Signup,
      name: 'signup'
    },
    {
      path: '/profile',
      component: Profile,
      name: 'profile',
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '/bookmarker',
      component: Bookmarker,
      name: 'bookmarker',
      meta: {
        requiresAuth: true
      }
    }
  ],
  mode: 'history',
})