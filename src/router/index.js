import Vue from 'vue'
import VueRouter from 'vue-router'
// import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  
  // {
  //   path: '/',
  //   name: 'home',
  //   component: HomeView
  // },
  
  {
    path: '/',
    name: 'mainview',
    component: () => import('../views/TabBarVC/MainView.vue')
  },
  {
    path: '/txtdetail',
    name: 'txtdetail',
    component: () => import('../views/TxtDetailVC/TxtDetailView.vue')
  },
  {
    path: '/txtsearch',
    name: 'txtsearch',
    component: () => import('../views/TxtDetailVC/TxtSearchView.vue')
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
    path: '/zbutton',
    name: 'zbutton',
    component: () => import(/* webpackChunkName: "about" */ '../views/ZButton.vue')
  },
  {
    path: '/zcell',
    name: 'zcell',
    component: () => import(/* webpackChunkName: "about" */ '../views/ZCell.vue')
  },
  {
    path: '/zlist',
    name: 'zlist',
    component: () => import('../views/ZList.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
