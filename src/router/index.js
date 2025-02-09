import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import IntroductionView from '../views/IntroductionView.vue'
import TeamView from '../views/TeamView.vue'
import DesignView from '../designs/Design1View.vue'
import ToWechat from '../designs/toWeChat.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/portfolio',
    name: 'portfolio',
    component: PortfolioView
  },
  {
    path: '/introduction',
    name: 'introduction',
    component: IntroductionView
  },
  {
    path: '/team',
    name: 'team',
    component: TeamView
  },
  {
    path: '/designview',
    name: 'designview',
    component: DesignView
  },
  {
    path: '/toWechat',
    name: 'toWechat',
    component: ToWechat
  }
]

const router = new VueRouter({
  routes
})

export default router
