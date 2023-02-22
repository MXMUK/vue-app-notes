import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',

      component: () => import('../components/Home.vue')
    },
    {
      path: '/edit/:id',
      name: 'edit',

      component: () => import('../views/ModalNote.vue')
    },
    {
      path: '/create',
      name: 'create',

      component: () => import('../views/ModalNoteCreate.vue')
    },
    {
      path: '/delete/:id',
      name: 'delete',

      component: () => import('../views/ModalNoteDelete.vue')
    }
  ]
})

export default router
