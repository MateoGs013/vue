import { createRouter, createWebHistory} from 'vue-router'

const routes = [
  {path : '/', component: () => import('../views/HomeView.vue')},
  {path : '/listado', component: () => import('../views/ListadoView.vue')},
  {path : '/detalle/:detalleid', component: () => import('../views/DetalleView.vue')},
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
