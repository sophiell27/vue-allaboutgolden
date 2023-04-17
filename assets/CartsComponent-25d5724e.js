import{f as h}from"./frontStore-ae4a6155.js";import{m as y,e as b,_ as g,r as f,o,c as a,f as t,F as i,a as k,t as c,i as _,j as w,w as v}from"./index-15e1a064.js";import{_ as C}from"./lodash-7bb46079.js";const{VITE_API:x,VITE_PATH:u}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"sophiee22",BASE_URL:"/vue-live-final/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},T={computed:{...y(h,["carts","cartTotal"])},methods:{...b(h,["getCarts"]),changeQty:C.debounce(function(l,d){const n={product_id:l,qty:Number(d.target.value)};this.$http.put(`${x}api/${u}/cart/${l}`,{data:n}).then(()=>{this.getCarts()}).catch(()=>{})},500),delCartItem(s){this.$http.delete(`${x}api/${u}/cart/${s}`).then(()=>{this.getCarts()}).catch(()=>{})}},mounted(){this.getCarts()}},$={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},E={class:"w-full text-sm text-left text-fog-500"},I=t("thead",{class:"font-extrabold text-4.5 text-fog-500 bg-fog-200 whitespace-nowrap"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3 hidden md:block"}),t("th",{scope:"col",class:"px-6 py-3"}," 產品 "),t("th",{scope:"col",class:"px-6 py-3"}," 價錢 "),t("th",{scope:"col",class:"px-6 py-3"}," 數量 "),t("th",{scope:"col",class:"px-6 py-3"}," 小計 "),t("th",{scope:"col",class:"px-6 py-3"},[t("span",{class:"hidden md:block"},"刪除")])])],-1),N={class:"px-2 py-4 md:px-6 hidden md:block"},V=["src","alt"],A={class:"px-2 py-4 md:px-6"},P={class:"px-2 py-4 text-xs md:px-6"},S={class:"px-2 py-4 md:px-6"},B=["value","onChange"],R={class:"px-2 py-4 md:px-6 whitespace-nowrap text-xs"},D={class:"px-2 py-4 md:px-6"},L=["onClick"],Q={key:0,class:"bg-white border-b hover:bg-fog-100"},q=t("td",{class:"px-2 py-4 md:px-6 hidden md:block"},null,-1),F=t("td",{class:"px-2 py-4 md:px-6 hidden md:block"},null,-1),H=t("td",{class:"px-2 py-4 md:px-6"},"運費",-1),O=t("td",{class:"px-2 py-4 md:px-6"},null,-1),U=t("td",{class:"px-2 py-4 md:px-6"},null,-1),j=t("td",{class:"px-2 py-4 text-xs md:px-6"},"NT $ 500",-1),M=t("td",{class:"px-2 py-4 md:px-6"},null,-1),z=[q,F,H,O,U,j,M],G={class:"font-semibold text-dark dark:text-white"},J=t("td",{class:"px-2 py-4 md:px-6 hidden md:block"},null,-1),K={colspan:"2"},W={key:0},X={key:1},Y=t("td",{class:"px-2 py-3 text-base whitespace-nowrap"},"總計:",-1),Z={class:"px-2 py-3 text-xs whitespace-nowrap md:px-6"},tt=t("button",{type:"button",class:"py-2 px-12 bg-secondary rounded-lg2 text-white flex ml-auto mt-4 hover:bg-primary hover:text-dark"},"結帳",-1);function st(s,l,d,n,et,p){const m=f("RouterLink");return o(),a(i,null,[t("div",$,[t("table",E,[I,t("tbody",null,[(o(!0),a(i,null,k(s.carts,e=>(o(),a("tr",{class:"bg-white border-b hover:bg-fog-100",key:e.id},[t("td",N,[t("img",{src:e.product.imageUrl,alt:e.product.title,class:"w-20"},null,8,V)]),t("td",A,c(e.product.title),1),t("td",P," NT $ "+c(e.product.price),1),t("td",S,[t("span",null,[t("input",{type:"number",min:"1",value:e.qty,class:"text-xs border-none w-20 text-center",onChange:r=>p.changeQty(e.id,r)},null,40,B)])]),t("td",R," NT $ "+c(e.final_total),1),t("td",D,[t("button",{type:"button",class:"px-2 hover:text-highlight",onClick:r=>p.delCartItem(e.id)}," x ",8,L)])]))),128)),s.cartTotal<900?(o(),a("tr",Q,z)):_("",!0)]),t("tfoot",null,[t("tr",G,[J,t("td",K,[s.cartTotal>=900?(o(),a("span",W,"已達免運費門檻")):(o(),a("span",X,"未達免運費門檻"))]),Y,t("td",Z,"NT $ "+c(s.cartTotal>=900?s.cartTotal:s.cartTotal+500),1)])])])]),s.$route.fullPath==="/user/carts"?(o(),w(m,{key:0,to:"/user/placeorder"},{default:v(()=>[tt]),_:1})):_("",!0)],64)}const lt=g(T,[["render",st]]);export{lt as C};
