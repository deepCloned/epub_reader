import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: {
        name: 'home'
      }
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/home/index.vue')
    },
    {
      path: '/reader-index/:locationName',
      name: 'readerIndex',
      component: () => import('../views/reader-index/index.vue')
    }
  ]
})

export default router
