import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue';
import Menu from '../components/Menu.vue';
import ProductView from '../views/ProductView.vue'; 
import ProductDetailView from '../views/ProductDetailView.vue';
import AddproductView from '../views/AddproductView.vue';




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/menu',
      name: 'menu',
      component: Menu,
      
    },
    {
      path: '/product',
      name: 'product',
      component: ProductView,
    },
    {
      path: '/productDetails',
      name: 'ProductDetails',
      component: ProductDetailView
    },
    {
      path: '/addProduct',
      name: 'addProduct',
      component: AddproductView
    }

    
    
  ]
})

export default router
