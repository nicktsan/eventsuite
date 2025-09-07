import { createRouter, createWebHistory } from 'vue-router'
import CreateEvent from '@/views/CreateEvent.vue'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/create-event',
      name: 'create-event',
      component: CreateEvent,
    },
  ],
})

export default router
