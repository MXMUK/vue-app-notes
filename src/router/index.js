import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/Home.vue'
import ModalNote from '../views/ModalNote.vue'
import ModalNoteCreate from '../views/ModalNoteCreate.vue'
import ModalNoteDelete from '../views/ModalNoteDelete.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/edit/:id',
      name: 'edit',
      component: ModalNote
    },
    {
      path: '/create',
      name: 'create',
      component: ModalNoteCreate
    },
    {
      path: '/delete/:id',
      name: 'delete',
      component: ModalNoteDelete
    }
  ]
})

export default router
