import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
  },
  {
    path: '/survey1',
    name: 'Survey1',
    component: () => import('../views/Survey1.vue'),
  },
  {
    path: '/survey2',
    name: 'Survey2',
    component: () => import('../views/Survey2.vue'),
  },
]

const router = new VueRouter({
  routes,
})

export default router
