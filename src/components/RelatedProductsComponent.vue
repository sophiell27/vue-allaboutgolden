
<script>
// import  AOS  from 'aos';
// import { ScrollTrigger } from 'gsap/all';

// import FrontStore from '../stores/frontStore.js';
// import { mapActions, mapState } from 'pinia';
// import { RouterLink } from 'vue-router';
export default {
    data(){
        return {

        }
    },
    // components: {
    //     RouterLink,
    // },
    methods: {
        // ...mapActions(FrontStore, ["getProducts"]),
        gsapAni() {
            const tween1 = this.$gsap.from(".newArrival li:nth-child(odd)", { x: 200 })

        }
    },
    computed: {
        // ...mapState(FrontStore, ["products"])
    },
    mounted() {
        // this.gsapAni();
        // if (!this.products.length) {
        //     this.getProducts();
        // }
    },
    props:["products"]

}
</script>

<template>
    <!-- 上架product  -->
<ul class="newArrival grid grid-cols-12 md:gap-x-14 md:mb-6">
    <!-- 87% 91% 98% 100% -->
    <li class="col-span-12 mb-6 text-center overflow-hidden group hover:shadow-lg2 rounded-tl-[7%] rounded-tr-[15%] rounded-bl-[5%] rounded-br-[10%] odd:rounded-br-[7%] odd:rounded-bl-[15%] odd:rounded-tr-[5%] odd:rounded-tl-[10%] md:last:hidden md:col-span-6 lg:col-span-4 lg:last:block" data-aos="fade-left"
            v-for=" product in products.slice(products.length - 3)">
            <!-- path: "/products/category/:category/product/:productid", -->
           <RouterLink :to="`/products/category/${product.category}/product/${product.id}`">
            <img :src="product.imageUrl" alt="" class="mb-2 h-[360px] w-full object-cover rounded-lg2  ">
            <div class="min-h-[54px] mb-1 text-4.5">
                <h2> {{ product.title }}</h2>
            </div>
            <p class="text-highlight text-sm font-extrabold">NT$ 790</p>
           </RouterLink>
        </li>

    </ul>
    <RouterLink to="/products" class="flex justify-center" >
        <button type="button" class="btn  flex items-center text-sm md:text-h6 lg:btn-md xl:btn-lg">
            <span class="pl-1 lg:pl-2">看更多產品</span>
        <span class="material-symbols-outlined ml-3 text-base lg:text-2xl">
            chevron_right
        </span>
        </button>
        
    </RouterLink>
</template>