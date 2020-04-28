import Vue from 'vue'
import VueRouter from 'vue-router'
import Store from '../store/index'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/admin',
    name: 'Home',
    component: () => import('../views/Home'),
    beforeEnter: AuthGuard
  },
  {
    path: '/admin/signin',
    name: 'SignIn',
    component: () => import('../views/SignIn'),
    beforeEnter: RedirectFromSignIn
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

function AuthGuard(from, to, next) {
  if(Store.getters.getUserToken) {
    next();
  }
  else {
    next('/admin/signin');
  }
}

function RedirectFromSignIn(from, to, next) {
  if(Store.getters.getUserToken) {
    next('/admin');
  }
  else {
    next();
  }
}

export default router
