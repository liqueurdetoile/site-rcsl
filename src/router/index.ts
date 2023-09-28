import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/mentions-legales',
      name: 'mentions-legales',
      component: () => import('../views/MentionsLegalesView.vue')
    },
    {
      path: '/retransmissions-coupe-du-monde-rugby-2023',
      name: 'cdmr-2023',
      component: () => import('../views/Wrc2023View.vue')
    }
  ]
})

export default router
