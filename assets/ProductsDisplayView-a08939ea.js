import{f as r}from"./frontStore-71259e35.js";import{_ as s,m as c,e as a,r as n,o as p,j as m}from"./index-eeac8972.js";import{P as u}from"./ProductListComponent-e21b71b9.js";import"./sweetalert2.all-12acd009.js";const d={data(){return{}},components:{ProductListComponent:u},watch:{$route(t,o){t.params.category!==o.params.category&&this.getProducts(t.params.category)}},computed:{...c(r,["products","filteredProducts","currentCategory"])},methods:{...a(r,["getProducts"])},mounted(){this.getProducts()}};function i(t,o,f,_,P,l){const e=n("ProductListComponent");return p(),m(e,{products:t.products},null,8,["products"])}const $=s(d,[["render",i]]);export{$ as default};