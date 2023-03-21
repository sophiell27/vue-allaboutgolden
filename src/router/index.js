import { createRouter, createWebHashHistory } from "vue-router";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  linkActiveClass: "opacity-70  px-2 rounded-lg  shadow-lg2",
  // linkExactActiveClass: "router-active-underline",
  routes: [
    {
      path: "/",
      component: () => import("../views/FrontLayoutView.vue"),
      children: [
        {
          path: "",
          component: () => import("../views/customers/HomeView.vue"),
        },
        {
          path: "products",
          component: () => import("../views/customers/ProductsView.vue"),
        },
        {
          path: "/products/product/:productid",
          component: () =>
            import("../views/customers/SingleProductView.vue"),
        },
        {
          path: "carts",
          component: ()=>import("../views/customers/CartsView.vue")
        },
        {
          path: "placeorder",
          component: ()=>import("../views/customers/PlaceOrderView.vue")
        },
        {
          path: "orders",
          component: ()=>import("../views/customers/OrdersView.vue")
        },
        {
          path: "aboutUs",
          component: ()=>import("../views/customers/AboutUsView.vue")
        },
        {
          path: "freight&refund",
          component: ()=>import("../views/customers/FreightRefundView.vue")
        },
        {
          path: "ContactUs",
          component: ()=>import("../views/customers/ContactView.vue")
        }
      ],
    },
    {
      path: "/admin",
      component: ()=>import("../views/admin/AdminDashBoard.vue"),
      children: [
        {
          path: "",
        component: ()=>import("../views/admin/AdminOrderView.vue")
        },
        {
          path: "orders",
        component: ()=>import("../views/admin/AdminOrderView.vue")
        },
        {
          path: "orders/:id",
        component: ()=>import("../views/admin/AdminOrderView.vue")
        },
        {
          path: "products",
          redirect: "/admin/products/1",
          component: ()=>import("../views/admin/AdminPorductsView.vue")
        },
        {
          path: "products/:productpage",
          component: ()=>import("../views/admin/AdminPorductsView.vue")
        }
      ]
    },
    {
      path: "/admin/login",
      component: ()=>import("../views/admin/AdminLogin.vue")
    }
  ],
});

export default router;
