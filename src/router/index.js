import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import MealList from '../views/MealList.vue'
import MealsByLetter from '../views/MealsByLetter.vue'
import MealsByName from '../views/MealsByName.vue'
import MealsByIngredients from '../views/MealsByIngredients.vue'
import DefaultLayout from '../components/DefaultLayout.vue'
import MealsDetail from '../views/MealsDetail.vue'
import GuestLayout from '../components/GuestLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: DefaultLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: Home
        },
        {
          path: '/letter/:letter?',
          name: 'byLetter',
          component: MealsByLetter
        },
        {
          path: '/by-ingredient/:ingredient?',
          name: 'byIngredient',
          component: MealsByIngredients
        },
        {
          path: '/name/:name?',
          name: 'byName',
          component: MealsByName
        },
        {
          path: '/meal/:id',
          name: 'mealDetails',
          component: MealsDetail
        }
      ]
    }
  ]
})

export default router
