import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    
    {
      path: '/',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/all-division',
      name: 'alldivision',
      component: () => import('../views/Division/AllDivision.vue')
    },
    {
      path: '/all-district',
      name: 'alldistrict',
      component: () => import('../views/District/AllDistrict.vue')
    },
    {
      path: '/add-division',
      name: 'adddivision',
      component: () => import('../views/Division/AddDivision.vue')
    },
    {
      path: '/edit-division/:id',
      name: 'editdivision',
      component: () => import('../views/Division/EditDivision.vue')
    },
    {
      path: '/all-employee',
      name: 'allemployee',
      component: () => import('../views/Employee/AllEmployee.vue')
    },
    {
      path: '/add-employee',
      name: 'addemployee',
      component: () => import('../views/Employee/AddEmployee.vue')
    }
  ]
})

export default router
