import{f as d}from"./frontStore-874515a5.js";import{_ as m,m as _,e as x,r as u,o as a,c as r,f as t,F as c,a as h,b as f,t as n,n as y}from"./index-10c4a326.js";import{P as $}from"./PaginationComponent-bd5bd81c.js";import"./sweetalert2.all-b5a5b749.js";const{VITE_API:b,VITE_PATH:w}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"sophiee22",BASE_URL:"/vue-live-final/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},P={data(){return{orders:[],orderPagination:{}}},computed:{..._(d,["loginStatus"])},components:{PaginationComponent:$},methods:{...x(d,["alertMessage"]),getOrders(o=1){this.$http.get(`${b}api/${w}/orders?page=${o}`).then(e=>{this.orders=e.data.orders,this.orderPagination=e.data.pagination,this.$router.push(`/user/orders/${o}`)}).catch(()=>{})},getFormatDate(o){const e=new Date(o*1e3);return`${e.getDate()}/${e.getMonth()}/${e.getFullYear()}`}},mounted(){console.log(this.$route.params.orderpage),this.getOrders(this.$route.params.orderpage)}},v={class:"container pt-10 md:pt-16"},D=t("h2",{class:"titleDash text-h4 text-center text-dark pb-5 mb-7"},"訂單列表",-1),E={class:"relative overflow-x-auto shadow-md sm:rounded-lg"},S={class:"w-full text-sm text-left text-fog-500"},V=t("thead",{class:"font-extrabold text-4.5 text-fog-500 bg-fog-200 whitespace-nowrap"},[t("tr",null,[t("th",{scope:"col",class:"px-6 py-3"}," 日期 "),t("th",{scope:"col",class:"px-6 py-3"}," 訂單編號 "),t("th",{scope:"col",class:"px-6 py-3"}," 訂單內容 "),t("th",{scope:"col",class:"px-6 py-3"}," 總計 "),t("th",{scope:"col",class:"px-6 py-3"},[t("span",{class:"hidden md:block"},"付款狀態")])])],-1),T={class:"px-2 py-4 md:px-6"},k={class:"px-2 py-4 md:px-6 text-xs whitespace-normal"},A={class:"px-2 py-4 text-xs md:px-6"},I={class:"px-2 py-4 md:px-6 text-xs"};function O(o,e,C,F,i,l){const g=u("PaginationComponent");return a(),r(c,null,[t("div",v,[D,t("div",E,[t("table",S,[V,t("tbody",null,[(a(!0),r(c,null,h(i.orders,s=>(a(),r("tr",{class:"bg-white border-b hover:bg-fog-100",key:s.create_at},[t("td",T,n(l.getFormatDate(s.create_at)),1),t("td",k,n(s.id),1),t("td",A,[(a(!0),r(c,null,h(s.products,p=>(a(),r("p",{key:`item${p.id}`},n(`${p.product.title} x ${p.qty}`),1))),128))]),t("td",I," NT $ "+n(s.total),1),t("td",{class:y(["px-2 py-4 md:px-6 whitespace-nowrap",{"text-highlight border-b-highlight":!s.is_paid}])},n(s.is_paid?"已付款":"未付款"),3)]))),128))])])])]),f(g,{pagination:i.orderPagination,onGetpage:l.getOrders},null,8,["pagination","onGetpage"])],64)}const G=m(P,[["render",O]]);export{G as default};