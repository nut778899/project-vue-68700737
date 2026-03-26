import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/contact.vue')
  },
   {
    path: '/product_api',
    name: 'product_api',
    component: () => import('../views/Product_api.vue')
  },
  {
    path: '/product_list',
    name: 'product_list',
    component: () => import('../views/Product _list.vue')
  },
  {
    path: '/gold',
    name: 'gold',
    component: () => import('../views/Gold.vue')
  },
  {
    path: '/show_customer',
    name: 'show_customer',
    component: () => import('../views/Show_Customer.vue')
  },
   {
    path: '/show_employees',
    name: 'show_employees',
    component: () => import('../views/show_employees.vue')
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/Register.vue')
  },
   {
    path: '/add_employees',
    name: 'add_employees',
    component: () => import('../views/Add_employees.vue')
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
