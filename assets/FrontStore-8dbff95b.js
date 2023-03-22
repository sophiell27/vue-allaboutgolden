import{q as l,s}from"./index-f2bfa011.js";const{VITE_API:r,VITE_PATH:a}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"sophiee22",BASE_URL:"/vue-live-final/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},p=l("FrontStore",{state:()=>({products:[],tempProduct:{},carts:[]}),getters:{cartTotal:({carts:t})=>t.reduce((e,c)=>e+c.final_total,0),cartlength:({carts:t})=>t.length},actions:{getProducts(){s.get(`${r}api/${a}/products/all`).then(t=>{this.products=t.data.products}).catch(t=>{alert("無法取得產品列表")})},getSingleProduct(t){s.get(`${r}api/${a}/product/${t}`).then(e=>{this.tempProduct=e.data.product}).catch(e=>{alert("取得商品資訊發生錯誤"),this.router.push("/products")})},getCarts(){s.get(`${r}api/${a}/cart`).then(t=>{this.carts=t.data.data.carts}).catch(()=>{alert("無法取得產品列表")})},addCart(t,e=1){let c="post",o=`${r}api/${a}/cart`;t.qty&&(c="put",o=`${r}api/${a}/cart/${t.id}`,e+=t.qty);const i={product_id:t.id,qty:e};s[c](o,{data:i}).then(d=>{alert("已加入購物車！"),this.getCarts()}).catch(d=>{alert("加入購物車發生錯誤")})},emptyCart(){s.delete(`${r}api/${a}/carts`).then(t=>{alert("已清空購物車"),console.dir(t),this.getCarts()}).catch(t=>{console.dir(t),alert("無法清空購物車")})}}});export{p as F};
