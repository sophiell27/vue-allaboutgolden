import{q as C,s as n,m as T,a as b,_ as P,r as y,o as d,c as i,b as e,F as E,i as I,t as u,j as g,d as v,w as V}from"./index-f2bfa011.js";import{N as A}from"./NewProductsComponent-edde8553.js";const{VITE_API:r,VITE_PATH:l}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"sophiee22",BASE_URL:"/vue-live-final/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},m=C("FrontStore",{state:()=>({products:[],tempProduct:{},carts:[]}),getters:{cartTotal:({carts:t})=>t.reduce((s,o)=>s+o.final_total,0),cartlength:({carts:t})=>t.length},actions:{getProducts(){n.get(`${r}api/${l}/products/all`).then(t=>{this.products=t.data.products}).catch(t=>{alert("無法取得產品列表")})},getSingleProduct(t){n.get(`${r}api/${l}/product/${t}`).then(s=>{this.tempProduct=s.data.product}).catch(s=>{alert("取得商品資訊發生錯誤"),this.router.push("/products")})},getCarts(){n.get(`${r}api/${l}/cart`).then(t=>{this.carts=t.data.data.carts}).catch(()=>{alert("無法取得產品列表")})},addCart(t,s=1){let o="post",c=`${r}api/${l}/cart`;t.qty&&(o="put",c=`${r}api/${l}/cart/${t.id}`,s+=t.qty);const p={product_id:t.id,qty:s};n[o](c,{data:p}).then(h=>{alert("已加入購物車！"),this.getCarts()}).catch(h=>{alert("加入購物車發生錯誤")})},emptyCart(){n.delete(`${r}api/${l}/carts`).then(t=>{alert("已清空購物車"),console.dir(t),this.getCarts()}).catch(t=>{console.dir(t),alert("無法清空購物車")})}}}),{VITE_API:$,VITE_PATH:f}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"sophiee22",BASE_URL:"/vue-live-final/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},S={components:{NewProductsComponent:A},computed:{...T(m,["carts","cartTotal"])},methods:{...b(m,["getCarts"]),changeQty(t,s){console.log(s.target.value);const o={product_id:t,qty:Number(s.target.value)};console.log(o),this.$http.put(`${$}api/${f}/cart/${t}`,{data:o}).then(c=>{alert("已更改數量"),this.getCarts()}).catch(c=>{alert("無法更改數量")})},delCartItem(t){this.$http.delete(`${$}api/${f}/cart/${t}`).then(()=>{this.getCarts()}).catch(()=>{alert("無法刪除購物車內容")})}},mounted(){this.getCarts()}},k={class:"w-full text-center mb-6"},N=e("thead",null,[e("tr",{class:"font-extrabold text-4.5"},[e("th"),e("th",null,"產品"),e("th",null,"價錢"),e("th",null,"數量"),e("th",null,"小計"),e("th",null,"刪除")])],-1),w={class:"lg:w-24 lg:h-24"},R=["src","alt"],D={class:"text-xs"},B={class:"text-xs"},H=["value","onChange"],L={class:"text-xs"},q=["onClick"],O={class:"border-t border-t-fog-500 border-spacing-1"},F={class:""},U={colspan:"3",class:"text-end"},M={key:0,class:"inline-block px-2 bg-fog-200"},Q=e("td",{class:""},"總計:",-1),j={key:0,colspan:"5"},z=e("button",{type:"button",class:"py-2 px-12 bg-secondary rounded-lg2 text-white flex ml-auto mt-4 hover:bg-primary hover:text-dark"},"結帳",-1);function G(t,s,o,c,p,h){const x=y("RouterLink");return d(),i("table",k,[N,e("tbody",null,[(d(!0),i(E,null,I(t.carts,a=>(d(),i("tr",null,[e("td",w,[e("img",{src:a.product.imageUrl,alt:a.product.title},null,8,R)]),e("td",null,u(a.product.title),1),e("td",D,"NT $ "+u(a.product.price),1),e("td",B,[e("input",{type:"number",min:"1",value:a.qty,class:"w-8 pl-1 text-center border-none bg-fog-100 rounded-md md:mx-1 md:py-1 md:w-20 md:pl-2 md:bg-fog-200",onChange:_=>h.changeQty(a.id,_)},null,40,H)]),e("td",L,"NT $ "+u(a.final_total),1),e("td",null,[e("button",{type:"button",class:"hover:text-highlight",onClick:_=>h.delCartItem(a.id)}," x ",8,q)])]))),256))]),e("tfoot",O,[e("tr",F,[e("td",U,[t.cartTotal>=900?(d(),i("p",M,"已達免運費門檻")):g("",!0)]),Q,e("td",null,"NT$ "+u(t.cartTotal),1)]),e("tr",null,[t.$route.fullPath!="/placeorder"?(d(),i("td",j,[v(x,{to:"/placeorder"},{default:V(()=>[z]),_:1})])):g("",!0)])])])}const W=P(S,[["render",G]]);export{W as C,m as f};
