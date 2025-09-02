import { createRouter, createWebHistory } from 'vue-router'
import CreateEvent from '@/views/CreateEvent.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/create-event',
      name: 'create-event',
      component: CreateEvent,
    },
  ],
})

export default router
