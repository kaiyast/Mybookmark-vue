import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import firebase from 'firebase'
import {
  firebaseApp,
  db
} from './firebaseConfig'
import router from './router'

Vue.use(VueResource);

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
  var currentUser = firebase.auth().currentUser;

  var requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  console.log('currentUser : ' + currentUser);
  console.log('requiresAuth : ' + requiresAuth);

  if (requiresAuth && !currentUser) {
    console.log('no login');
    next({
      name: 'home'
    });
  }else {
    console.log('Else');
    next();
  }

})

let app;
firebase.auth().onAuthStateChanged(
  user => {
    if (!app) {
      app = new Vue({
        el: '#app',
        router,
        template: '<App/>',
        components: {
          App
        }
      })
    }
  }
)

