
<script>
// import  AOS  from 'aos';
import { ScrollTrigger } from 'gsap/all';

import FrontStore from '../stores/FrontStore.js';
import { mapActions, mapState } from 'pinia';
export default {
    methods: {
        ...mapActions(FrontStore, ["getProducts"]),
        gsapAni() {
            const tween1 = this.$gsap.from(".newArrival li:nth-child(odd)", { x: 200 })

        }
    },
    computed: {
        ...mapState(FrontStore, ["products"])
    },
    mounted() {
        // console.log(!this.products.length);
        if (!this.products.length) {
            this.getProducts();
        }
    }

}
</script>

<template>
    <!-- 上架product  -->
<ul class="newArrival grid grid-cols-12 md:gap-x-14 md:mb-6">
    <li class="col-span-12 mb-6 text-center md:col-span-6 lg:col-span-4" data-aos="fade-left"
            v-for=" product in products.slice(products.length - 3)">
           <RouterLink :to="`/products/product/${product.id}`">
            <img :src="product.imageUrl" alt="" class="mb-2 h-[360px] w-full object-cover rounded-lg2 ">
            <div class="min-h-[54px] mb-1 text-4.5">
                <h2> {{ product.title }}</h2>
            </div>
            <p class="text-highlight text-sm font-extrabold">NT$ 790</p>
           </RouterLink>
        </li>
        <!-- <li class="col-span-12 mb-6 text-center md:col-span-6 lg:col-span-4" data-aos="fade-right">
                        <img src="" alt="" class="mb-2 h-[360px] w-full" data-aos="fade-right" >
                        <div class="min-h-[54px] mb-1 text-4.5">
                            <h2>耐咬飛盤 (大) 寵物玩具</h2>
                        </div>
                        <p class="text-highlight text-sm font-extrabold">NT$ 790</p>
                    </li>
                    <li class="col-span-12 mb-6 text-center md:col-span-6 lg:col-span-4 " data-aos="fade-left">
                        <img src="" alt="" class="mb-2 h-[360px] w-full">
                        <div class="min-h-[54px] mb-1 text-4.5">
                            <h2>耐咬飛盤 (大) 寵物玩具</h2>
                </div>
                <p class="text-highlight text-sm font-extrabold">NT$ 790</p>
            </li>
            <li class="col-span-12 mb-6 text-center md:col-span-6 lg:hidden " data-aos="fade-right">
                <img src="" alt="" class="mb-2 h-[360px] w-full">
                        <div class="min-h-[54px] mb-1 text-4.5">
                            <h2>耐咬飛盤 (大) 寵物玩具</h2>
                        </div>
                        <p class="text-highlight text-sm font-extrabold">NT$ 790</p>
                    </li> -->

        <!-- lg:hidden -->

    </ul>
    <RouterLink to="/products" class="flex justify-center" >
        <button type="button" class="btn  flex items-center text-sm md:text-h6 lg:btn-md xl:btn-lg">
            <span class="pl-1 lg:pl-2">看更多產品</span>
        <span class="material-symbols-outlined ml-3 text-base lg:text-2xl">
            chevron_right
        </span>
        </button>
        
    </RouterLink>
    <!-- <RouterLink to="/products/1" class="btn flex items-center text-sm mx-auto md:text-h6 lg:btn-md xl:btn-lg">
        <span class="pl-1 lg:pl-2">看更多產品</span>
        <span class="material-symbols-outlined ml-3 text-base lg:text-2xl">
            chevron_right
        </span>
    </RouterLink> -->

    <!-- <button type="button" class="btn flex items-center text-sm md:text-h6 lg:btn-md xl:btn-lg">
                                                            <span class="pl-1 xl:pl-2">大家都買什麼</span>
                                                            <span class="material-symbols-outlined ml-3 text-base lg:text-2xl">
                                                                chevron_right
                                                            </span>
                                                        </button> -->
    <!-- 最新上架 -->
</template>