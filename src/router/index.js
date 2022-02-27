import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('../views/FrontView.vue'),
    children: [
      {
        path: 'products',
        name: '產品列表',
        component: () => import('../views/ProductsView.vue'),
        meta: { title: '產品列表' }
      },
      {
        path: 'product/:id',
        component: () => import('../views/ProductView.vue')
      },
      {
        path: 'login',
        component: () => import('../views/LoginView.vue')
      },
      {
        path: 'cart',
        component: () => import('../views/CartView.vue')
      }
    ]
  },
  {
    path: '/admin',
    component: () => import('../views/DashboardView.vue'),
    children: [
      {
        path: '',
        name: '後台產品列表',
        component: () => import('../views/AdminProducts.vue'),
        meta: { title: '後台產品列表' }
      },
      {
        path: 'coupon',
        component: () => import('../views/AdminCoupon.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active'
})

router.beforeEach((to, from, next) => {
  window.document.title = to.meta.title
  next()
})

export default router
