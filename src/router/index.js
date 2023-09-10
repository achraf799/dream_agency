import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // { path: '/', component: Home },
  // { path: '/about', component: AboutUs },
  // { path: '/services', component: Services },
  // { path: '/contact', component: ContactUs },

  {
    path: '/about',
    name: 'about',
    component: () => import( '../components/AboutUs.vue')
  },
];

const router = new VueRouter({
  routes
})

export default router
