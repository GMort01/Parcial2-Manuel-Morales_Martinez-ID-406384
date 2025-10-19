import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AllPostsView from '../views/AllPostsView.vue'
import CategoriesView from '../views/CategoriesView.vue'
import WallView from '../views/WallView.vue'
import PhotosView from '../views/PhotosView.vue'
import BoxesView from '../views/BoxesView.vue'
import FeaturedView from '../views/FeaturedView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/posts', component: AllPostsView },
  { path: '/categorias', component: CategoriesView },
  { path: '/muro', component: WallView },
  { path: '/fotos', component: PhotosView },
  { path: '/boxes', component: BoxesView },
  { path: '/destacados', component: FeaturedView },
  { path: '/acerca', component: AboutView },
  { path: '/contacto', component: ContactView }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
