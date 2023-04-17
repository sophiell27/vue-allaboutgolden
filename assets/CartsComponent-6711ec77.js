import{f as r}from"./frontStore-b7d3bfef.js";import{m,e as y,_ as b,r as g,o,c as a,f as t,F as h,a as f,t as c,i,j as k,w}from"./index-8c82039c.js";const{VITE_API:_,VITE_PATH:x}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"sophiee22",BASE_URL:"/vue-live-final/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},v={computed:{...m(r,["carts","cartTotal"])},methods:{...y(r,["getCarts"]),changeQty(s,l){const d={product_id:s,qty:Number(l.target.value)};this.$http.put(`${_}api/${x}/cart/${s}`,{data:d}).then(()=>{this.getCarts()}).catch(()=>{})},delCartItem(s){this.$http.delete(`${_}api/${x}/cart/${s}`).then(()=>{this.getCarts()}).catch(()=>{})}},mounted(){this.getCarts()}},C={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},T={class:"w-full text-sm text-left text-fog-500"},$=t("thead",{class:"font-extrabold text-4.5 text-fog-500 bg-fog-200 whitespace-nowrap"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 hidden md:block"}),t("th",{scope:"col",class:"px-6 py-3"}," 產品 "),t("th",{scope:"col",class:"px-6 py-3"}," 價錢 "),t("th",{scope:"col",class:"px-6 py-3"}," 數量 "),t("th",{scope:"col",class:"px-6 py-3"}," 小計 "),t("th",{scope:"col",class:"px-6 py-3"},[t("span",{class:"hidden md:block"},"刪除")])])],-1),E={class:"px-2 py-4 md:px-6 hidden md:block"},I=["src","alt"],N={class:"px-2 py-4 md:px-6"},V={class:"px-2 py-4 text-xs md:px-6"},A={class:"px-2 py-4 md:px-6"},P=["value","onChange"],S={class:"px-2 py-4 md:px-6 whitespace-nowrap text-xs"},B={class:"px-2 py-4 md:px-6"},R=["onClick"],D={key:0,class:"bg-white border-b hover:bg-fog-100"},L=t("td",{class:"px-2 py-4 md:px-6 hidden md:block"},null,-1),q=t("td",{class:"px-2 py-4 md:px-6 hidden md:block"},null,-1),F=t("td",{class:"px-2 py-4 md:px-6"},"運費",-1),H=t("td",{class:"px-2 py-4 md:px-6"},null,-1),O=t("td",{class:"px-2 py-4 md:px-6"},null,-1),Q=t("td",{class:"px-2 py-4 text-xs md:px-6"},"NT $ 500",-1),U=t("td",{class:"px-2 py-4 md:px-6"},null,-1),j=[L,q,F,H,O,Q,U],M={class:"font-semibold text-dark dark:text-white"},z=t("td",{class:"px-2 py-4 md:px-6 hidden md:block"},null,-1),G={colspan:"2"},J={key:0},K={key:1},W=t("td",{class:"px-2 py-3 text-base whitespace-nowrap"},"總計:",-1),X={class:"px-2 py-3 text-xs whitespace-nowrap md:px-6"},Y=t("button",{type:"button",class:"py-2 px-12 bg-secondary rounded-lg2 text-white flex ml-auto mt-4 hover:bg-primary hover:text-dark"},"結帳",-1);function Z(s,l,d,tt,st,n){const u=g("RouterLink");return o(),a(h,null,[t("div",C,[t("table",T,[$,t("tbody",null,[(o(!0),a(h,null,f(s.carts,e=>(o(),a("tr",{class:"bg-white border-b hover:bg-fog-100",key:e.id},[t("td",E,[t("img",{src:e.product.imageUrl,alt:e.product.title,class:"w-20"},null,8,I)]),t("td",N,c(e.product.title),1),t("td",V," NT $ "+c(e.product.price),1),t("td",A,[t("span",null,[t("input",{type:"number",min:"1",value:e.qty,class:"text-xs border-none w-20 text-center",onChange:p=>n.changeQty(e.id,p)},null,40,P)])]),t("td",S," NT $ "+c(e.final_total),1),t("td",B,[t("button",{type:"button",class:"px-2 hover:text-highlight",onClick:p=>n.delCartItem(e.id)}," x ",8,R)])]))),128)),s.cartTotal<900?(o(),a("tr",D,j)):i("",!0)]),t("tfoot",null,[t("tr",M,[z,t("td",G,[s.cartTotal>=900?(o(),a("span",J,"已達免運費門檻")):(o(),a("span",K,"未達免運費門檻"))]),W,t("td",X,"NT $ "+c(s.cartTotal>=900?s.cartTotal:s.cartTotal+500),1)])])])]),s.$route.fullPath==="/user/carts"?(o(),k(u,{key:0,to:"/user/placeorder"},{default:w(()=>[Y]),_:1})):i("",!0)],64)}const at=b(v,[["render",Z]]);export{at as C};