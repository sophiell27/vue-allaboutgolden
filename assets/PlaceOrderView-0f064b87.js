import{f as p}from"./frontStore-2dce3aff.js";import{_,m as b,e as x,r,o as m,j as y,w as u,f as e,b as o,g as v,s as V,c as C,n as k,i as w,d as n}from"./index-80710afd.js";import{C as M}from"./CartsComponent-8b5a9ef0.js";import"./sweetalert2.all-6569a39d.js";import"./lodash-d951d0ef.js";const{VITE_API:S,VITE_PATH:A}={VITE_API:"https://vue3-course-api.hexschool.io/v2/",VITE_PATH:"sophiee22",BASE_URL:"/vue-live-final/",MODE:"production",DEV:!1,PROD:!0,SSR:!1},E={data(){return{data:{user:{},message:"銀行轉賬"}}},components:{CartsComponent:M},computed:{...b(p,["carts","loginStatus"])},methods:{...x(p,["getCarts","alertMessage","toastMessge"]),placeOrder(){this.carts.length||this.alertMessage("購物車沒有內容，無法送出訂單").then(l=>{l.isConfirmed&&this.$router.push("/products")}),this.$http.post(`${S}api/${A}/order`,{data:this.data}).then(l=>{this.toastMessge("已送出訂單"),this.data={user:{}},this.getCarts(),this.$router.push(`/user/order/${l.data.orderId}`)}).catch(()=>{this.alertMessage("無法送出訂單")})},checkCart(){this.carts.length===0&&this.alertMessage("購物車沒有內容，請先選擇商品").then(l=>{l.isConfirmed&&this.$router.push("/products")})}}},P=e("h2",{class:"text-h4 text-center pb-4 mb-8 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:right-0 after:mx-auto after:w-8 after:h-1 after:bg-primary md:mb-10"}," 結賬 ",-1),B={class:"grid grid-cols-12"},I={class:"col-span-12 md:col-start-2 md:col-span-10 mb-8 md:mb-10"},T=e("h3",{class:"text-4.5 mb-6"}," 請填寫訂單資料",-1),U={class:"text-fog-500 grid grid-cols-2 gap-y-4 md:gap-x-4 md:gap-y-8"},O={class:"col-span-2 md:col-span-1"},R=e("label",{for:"recipient",class:"mb-2 block"},[n("收貨人："),e("span",{class:"ml-1 text-highlight"},"*")],-1),q={class:"col-span-2 md:col-span-1"},D=e("label",{for:"recipientPhone",class:"mb-2 block"},[n("收貨人電話："),e("span",{class:"ml-1 text-highlight"},"*")],-1),N={class:"col-span-2"},L=e("label",{for:"receipientAddr",class:"mb-2 block"},[n("收貨人地址："),e("span",{class:"ml-1 text-highlight"},"*")],-1),j={class:"col-span-2 md:col-span-1"},H=e("label",{for:"receipientMail",class:"mb-2 block"},[n("電郵："),e("span",{class:"ml-1 text-highlight"},"*")],-1),z={class:"col-span-2 md:col-span-1"},F=e("label",{for:"payment",class:"mb-2 block"},[n("付款方法："),e("span",{class:"ml-1 text-highlight"},"*")],-1),G=e("option",{value:"銀行轉賬",select:"selected"},"銀行轉賬",-1),J=e("option",{value:"貨到付款"},"貨到付款",-1),K=[G,J],Q={key:0,class:"col-span-12 md:col-start-2 md:col-span-10 py-8"},W={class:"flex items-center justify-between mt-8 md:pt-11 md:mt-10"},X=e("button",{type:"button",class:"flex items-center text-4.5"},[e("span",{class:"material-symbols-outlined pl-3 text-base lg:text-2xl"}," chevron_left "),e("span",{class:"pl-1 lg:pl-2"},"回到購物車")],-1),Y=e("span",{class:"pl-1 xl:pl-2"},"碓認送出訂單",-1),Z=e("span",{class:"material-symbols-outlined ml-3 text-base lg:text-2xl"}," chevron_right ",-1),$=[Y,Z];function ee(l,t,te,se,s,d){const i=r("v-field"),c=r("v-error-message"),h=r("CartsComponent"),f=r("RouterLink"),g=r("v-form");return m(),y(g,{class:"container",onSubmit:d.placeOrder,onClick:d.checkCart},{default:u(()=>[P,e("div",B,[e("div",I,[T,e("div",U,[e("div",O,[R,o(i,{type:"text",id:"recipient",class:"w-full rounded-lg px-4 py-2 border-fog-500 focus:outline-none focus:ring focus:ring-primary focus:border-primary placeholder:text-fog-500 bg-transparent",placeholder:"請輸入收貨人姓名",name:"收貨人姓名",rules:"required",modelValue:s.data.user.name,"onUpdate:modelValue":t[0]||(t[0]=a=>s.data.user.name=a)},null,8,["modelValue"]),o(c,{name:"收貨人姓名",class:"text-highlight"})]),e("div",q,[D,o(i,{type:"tel",id:"recipientPhone",class:"w-full rounded-lg px-4 py-2 border-fog-500 focus:outline-none focus:ring focus:ring-primary focus:border-primary placeholder:text-fog-500 bg-transparent",placeholder:"請輸入收貨人電話",name:"收貨人電話",rules:"required",modelValue:s.data.user.tel,"onUpdate:modelValue":t[1]||(t[1]=a=>s.data.user.tel=a)},null,8,["modelValue"]),o(c,{name:"收貨人電話",class:"text-highlight"})]),e("div",N,[L,o(i,{type:"text",id:"receipientAddr",class:"w-full rounded-lg px-4 py-2 border-fog-500 focus:outline-none focus:ring focus:ring-primary focus:border-primary placeholder:text-fog-500 bg-transparent",placeholder:"請輸入收貨人地址",name:"收貨人地址",rules:"required",modelValue:s.data.user.address,"onUpdate:modelValue":t[2]||(t[2]=a=>s.data.user.address=a)},null,8,["modelValue"]),o(c,{name:"收貨人地址",class:"text-highlight"})]),e("div",j,[H,o(i,{type:"email",id:"receipientMail",class:"w-full rounded-lg px-4 py-2 border-fog-500 focus:outline-none focus:ring focus:ring-primary focus:border-primary placeholder:text-fog-500 bg-transparent",placeholder:"請輸入電郵",name:"電郵",rules:"required",modelValue:s.data.user.email,"onUpdate:modelValue":t[3]||(t[3]=a=>s.data.user.email=a)},null,8,["modelValue"]),o(c,{name:"電郵",class:"text-highlight"})]),e("div",z,[F,v(e("select",{id:"payment",class:"w-full rounded-lg px-4 py-2 border-fog-500 focus:outline-none focus:ring focus:ring-primary focus:border-primary placeholder:text-fog-500 bg-transparent","onUpdate:modelValue":t[4]||(t[4]=a=>s.data.message=a)},K,512),[[V,s.data.message]])])])]),l.carts?(m(),C("div",Q,[o(h),e("div",W,[o(f,{to:"/user/carts"},{default:u(()=>[X]),_:1}),e("button",{class:k(["pillBtn flex items-center text-sm md:text-h6 lg:pillBtn-lg",{"disabled opacity-50 cursor-default":!l.carts.length}])},$,2)])])):w("",!0)])]),_:1},8,["onSubmit","onClick"])}const ie=_(E,[["render",ee]]);export{ie as default};
