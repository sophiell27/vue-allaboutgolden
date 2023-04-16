import { createRouter, createWebHashHistory } from 'vue-router';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: 'text-highlight',
  // opacity-70  rounded-lg  shadow-lg2
  linkExactActiveClass: 'text-highlight',
  scrollBehavior() {
    // always scroll to top
    return { top: 0 };
  },
  routes: [
    {
      path: '/',
      component: () => import('@/views/FrontLayoutView.vue'),
      children: [
        {
          path: '',
          component: () => import('@/views/customers/HomeView.vue'),
        },
        {
          path: 'products',
          component: () => import('@/views/customers/ProductsView.vue'),
          children: [
            {
              path: '',
              component: () => import('../views/customers/ProductsDisplayView.vue'),
            },
            {
              path: 'category/:category',
              component: () => import('../views/customers/ProductlistFilteredeView.vue'),
            },
          ],
        },
        // single product page
        {
          path: '/products/category/:category/product/:productid',
          component: () => import('../views/customers/ProductDetailView.vue'),
        },
        {
          path: 'aboutUs',
          component: () => import('@/views/customers/AboutUsView.vue'),
        },
        {
          path: 'freight&refund',
          component: () => import('@/views/customers/FreightRefundView.vue'),
        },
        {
          path: 'contactUs',
          component: () => import('@/views/customers/ContactView.vue'),
        },
        {
          path: '/privacy',
          component: () => import('../views/customers/PrivacyView.vue'),
        },
        {
          path: 'register',
          component: () => import('@/views/customers/CustomerRegister.vue'),
        },
        {
          path: 'login',
          component: () => import('@/views/customers/CustomerLogin.vue'),
        },
        {
          path: 'user',
          component: () => import('../views/customers/UserView.vue'),
          children: [
            {
              path: 'carts',
              component: () => import('@/views/customers/CartsView.vue'),
            },
            {
              path: 'placeorder',
              component: () => import('@/views/customers/PlaceOrderView.vue'),
            },
            {
              path: 'orders/1',
              component: () => import('@/views/customers/OrdersView.vue'),
            },
            {
              path: 'orders/:orderpage',
              component: () => import('@/views/customers/OrdersView.vue'),
            },
          ],
        },
      ],
    },
    {
      path: '/admin',
      component: () => import('@/views/admin/AdminDashBoard.vue'),
      children: [
        {
          path: '',
          redirect: '/admin/orders/1',
          // component: () => import('@/views/admin/AdminOrderView.vue'),
        },
        {
          path: 'orders/1',
          component: () => import('@/views/admin/AdminOrderView.vue'),
        },
        {
          path: 'orders/:orderpage',
          component: () => import('@/views/admin/AdminOrderView.vue'),
          // children: [
          //   {
          //     path: ":pathMatch(.*)*",
          //     component:()=>("@/views/NotFound.vue")
          //   },
          // ]
        },
        {
          path: 'products',
          redirect: '/admin/products/1',
          component: () => import('@/views/admin/AdminPorductsView.vue'),
        },
        {
          path: 'products/:productpage',
          component: () => import('@/views/admin/AdminPorductsView.vue'),
        },
      ],
    },
    {
      path: '/admin/login',
      component: () => import('@/views/admin/AdminLogin.vue'),
    },
    {
      path: '/:pathMatch(.*)*',
      // component: ()=> ("@/views/NotFound.vue"),
      redirect: '/',
    },
    {
      path: '/admin/:pathMatch(.*)*',
      redirect: '/admin',
      // component:()=>("@/views/NotFound.vue")
    },
  ],
});

export default router;
