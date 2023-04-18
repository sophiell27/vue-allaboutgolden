import{f as c}from"./frontStore-2dce3aff.js";import{_ as u,m as _,e as C,r as s,o as e,c as o,j as f,f as a,n as g,b as i,w as P,i as x,d as $}from"./index-80710afd.js";import{P as V}from"./ProductListComponent-e0064bc2.js";import{C as v}from"./CartsComponent-8b5a9ef0.js";import{P as B}from"./PillBtnComponent-a648ab56.js";import"./sweetalert2.all-6569a39d.js";import"./lodash-d951d0ef.js";const{VITE_API:l,VITE_PATH:m}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"sophiee22",BASE_URL:"/vue-live-final/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},E={components:{ProductListComponent:V,CartsComponent:v,PillBtnComponent:B},computed:{..._(c,["carts","cartTotal","loginStatus","getNewProducts"])},methods:{...C(c,["getCarts","getProducts","alertMessage"]),changeQty(t,r){const n={product_id:t,qty:Number(r.target.value)};this.$http.put(`${l}api/${m}/cart/${t}`,{data:n}).then(()=>{this.getCarts()}).catch(()=>{this.alertMessage("無法更改數量")})},delCartItem(t){this.$http.delete(`${l}api/${m}/cart/${t}`).then(()=>{this.getCarts()}).catch(()=>{this.alertMessage("無法刪除購物車內容")})}},mounted(){this.getCarts(),this.getProducts()}},T={class:"container pt-10 md:pt-16"},y=a("h2",{class:"text-h4 titleDash pb-4 mb-20 md:text-2xl text-center"}," 購物車 ",-1),N={key:0,class:"text-center text-highlight"},k={key:2,class:"mt-14 lg:mt-20"},A={class:"flex justify-center"};function I(t,r,n,S,b,w){const p=s("CartsComponent"),d=s("ProductListComponent"),h=s("PillBtnComponent");return e(),o("div",T,[y,t.carts.length?(e(),f(p,{key:1})):(e(),o("p",N,"購物車沒有內容！")),t.$route.fullPath!="/place-order"?(e(),o("div",k,[a("h2",{class:g(["text-lg titleDash after:mx-0 mb-6 md:text-xl",{" after:mx-0 text-start":t.carts.length}])},"繼續選購產品",2),i(d,{products:t.getNewProducts},null,8,["products"]),a("div",A,[i(h,{dynamicPath:"/products"},{default:P(()=>[$(" 看更多產品 ")]),_:1})])])):x("",!0)])}const q=u(E,[["render",I]]);export{q as default};
