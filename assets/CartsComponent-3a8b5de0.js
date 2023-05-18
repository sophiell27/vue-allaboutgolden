import{f as i}from"./frontStore-71259e35.js";import{m as y,e as g,_ as b,r as f,o,c as a,f as t,F as _,a as k,t as c,i as l,j as w,w as T}from"./index-eeac8972.js";import{_ as v}from"./lodash-23d6340e.js";const{VITE_API:x,VITE_PATH:u}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"sophiee22",BASE_URL:"/vue-allaboutgolden/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},C={computed:{...y(i,["carts","cartTotal"])},methods:{...g(i,["getCarts","toastMessge","alertMessage"]),changeQty:v.debounce(function(d,n){const p={product_id:d,qty:Number(n.target.value)};this.$http.put(`${x}api/${u}/cart/${d}`,{data:p}).then(()=>{this.toastMessge("已更改數量"),this.getCarts()}).catch(()=>{this.alertMessage("無法更改數量")})},500),delCartItem(s){this.$http.delete(`${x}api/${u}/cart/${s}`).then(()=>{this.getCarts(),setTimeout(()=>{this.toastMessge("成功刪除購物車內容")})}).catch(()=>{this.alertMessage("無法刪除購物車內容")})}},mounted(){this.getCarts()}},$={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},E={class:"w-full text-sm text-left text-fog-500"},I=t("thead",{class:"font-extrabold text-4.5 text-center text-fog-500 bg-fog-200 whitespace-nowrap"},[t("tr",null,[t("th",{scope:"col",class:"md:px-6 py-3 hidden md:block"}),t("th",{scope:"col",class:"md:px-6 py-3"}," 產品 "),t("th",{scope:"col",class:"md:px-6 py-3"}," 價錢 "),t("th",{scope:"col",class:"md:px-6 py-3"}," 數量 "),t("th",{scope:"col",class:"md:px-6 py-3"}," 小計 "),t("th",{scope:"col",class:"md:px-6 py-3"},[t("span",{class:"hidden md:block"},"刪除")])])],-1),M={class:"px-2 py-4 md:md:px-6 hidden md:block"},N=["src","alt"],V={class:"px-2 py-4 md:px-6"},A={class:"px-2 py-4 text-xs md:px-6 whitespace-nowrap"},P={class:"px-2 py-4 md:px-6"},S=["value","onChange"],B={class:"px-2 py-4 md:px-6 whitespace-nowrap text-xs"},R={class:"px-2 mpy-4 md:px-6"},D=["onClick"],L={key:0,class:"bg-white border-b hover:bg-fog-100 text-center"},Q=t("td",{class:"px-2 py-4 md:px-6 hidden md:block"},null,-1),q=t("td",{class:"px-2 py-4 md:px-6 hidden md:block"},null,-1),F=t("td",{class:"px-2 py-4 md:px-6"},"運費",-1),H=t("td",{class:"px-2 py-4 md:px-6"},null,-1),O=t("td",{class:"px-2 py-4 md:px-6"},null,-1),U=t("td",{class:"px-2 py-4 text-xs md:px-6"},"NT $ 500",-1),j=t("td",{class:"px-2 py-4 md:px-6"},null,-1),z=[Q,q,F,H,O,U,j],G={class:"font-semibold text-dark dark:text-white text-center"},J=t("td",{class:"px-2 py-4 md:px-6 hidden md:block"},null,-1),K={colspan:"2"},W={key:0},X={key:1},Y=t("td",{class:"px-2 py-3 text-base whitespace-nowrap"},"總計：",-1),Z={key:0,class:"px-2 py-3 text-xs whitespace-nowrap md:px-6"},tt=t("button",{type:"button",class:"py-2 px-12 bg-secondary rounded-lg2 text-white flex ml-auto mt-4 hover:bg-primary hover:text-dark"},"結帳",-1);function st(s,d,n,p,et,r){const m=f("RouterLink");return o(),a(_,null,[t("div",$,[t("table",E,[I,t("tbody",null,[(o(!0),a(_,null,k(s.carts,e=>(o(),a("tr",{class:"bg-white border-b hover:bg-fog-100 text-center",key:e.id},[t("td",M,[t("img",{src:e.product.imageUrl,alt:e.product.title,class:"w-20"},null,8,N)]),t("td",V,c(e.product.title),1),t("td",A," NT $ "+c(e.product.price),1),t("td",P,[t("span",null,[t("input",{type:"number",min:"1",max:"30",value:e.qty,class:"text-xs border-none md:w-20 text-center",onChange:h=>r.changeQty(e.id,h)},null,40,S)])]),t("td",B," NT $ "+c(e.final_total),1),t("td",R,[t("button",{type:"button",class:"px-2 hover:text-highlight",onClick:h=>r.delCartItem(e.id)}," x ",8,D)])]))),128)),s.cartTotal<900&&s.cartTotal>0?(o(),a("tr",L,z)):l("",!0)]),t("tfoot",null,[t("tr",G,[J,t("td",K,[s.cartTotal>=900?(o(),a("span",W,"已達免運費門檻")):(o(),a("span",X,"未達免運費門檻"))]),Y,s.cartTotal?(o(),a("td",Z,"NT $ "+c(s.cartTotal>=900?s.cartTotal:s.cartTotal+500),1)):l("",!0)])])])]),s.$route.fullPath==="/user/carts"?(o(),w(m,{key:0,to:"/user/placeorder"},{default:T(()=>[tt]),_:1})):l("",!0)],64)}const dt=b(C,[["render",st]]);export{dt as C};