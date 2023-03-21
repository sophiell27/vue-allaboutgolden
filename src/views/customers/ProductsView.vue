<script>
import FrontStore from '../../stores/FrontStore.js';
import { mapActions, mapState } from 'pinia';
// import PaginationComponent from '../../components/PaginationComponent.vue';
export default {
    data() {
        return {
            // size: ""
        }
    },
    components: {
        // PaginationComponent
    },
    computed: {
        ...mapState(FrontStore, ["products"])
    },
    methods: {
        ...mapActions(FrontStore, ["getProducts", "addCart"]),
        // toggleMenu(){
        //     const nav = this.$refs.expendMenu
        //     const attr = "hidden"
        //     nav.classList.contains(attr) ?
        //         nav.classList.remove(attr) :
        //         nav.classList.add(attr)
            
        // }
    },
    mounted() {
        this.getProducts();
    }
}
</script>

<template>
    <div class="container">
        <!-- <div class="px-4 relative"> -->
            <!-- <select name="" id="" class="bg-transparent md:hidden mb-8">
                            <option value="">全部商品</option>
                            <option value="">床上用品</option>
                            <option value="">家居擺設</option>
                            <option value="">衣飾配件</option>
                        </select> -->
            <!-- <RouterLink  to="/products" class="flex items-center text-4.5 mb-6 md:hidden">
                <span class="pl-1 ">全部商品</span> -->
                <!-- <span class="material-symbols-outlined ml-3 text-base lg:text-2xl md:hidden">
                    expand_more
                </span> -->
            <!-- </RouterLink> -->
            <!-- <ul class="hidden absolute top-7 z-10 p-4 text-fog-500 bg-fog-100 rounded-lg2 mb-8
                        md:flex md:bg-transparent md:static" ref="expendMenu">
                <li class="hidden md:block">
                    <RouterLink to="/products" class="py-2 pl-4 pr-2 flex items-center hover:text-highlight md:px-4 ">
                        <span class="pr-4 md:pr-0">
                            全部商品
                        </span>

                        <span class="material-symbols-outlined text-base lg:text-2xl md:hidden">
                            chevron_right
                        </span>
                    </RouterLink>
                </li> -->
                <!-- <li class="">
                    <RouterLink to="/products/category/bedding" href="" class="py-2 pl-4 pr-2 flex items-center hover:text-highlight md:px-4">
                        <span class="pr-4 md:pr-0">
                            床上用品
                        </span>

                        <span class="material-symbols-outlined text-base lg:text-2xl md:hidden">
                            chevron_right
                        </span>
                    </RouterLink>
                </li>
                <li class="">
                    <a href="" class="py-2 pl-4 pr-2 flex items-center hover:text-highlight md:px-4">
                        <span class="pr-4 md:pr-0">
                            家居擺設
                        </span>

                        <span class="material-symbols-outlined text-base lg:text-2xl md:hidden">
                            chevron_right
                        </span>
                    </a>
                </li>
                <li class="">
                    <a href="" class="py-2 pl-4 pr-2 flex items-center hover:text-highlight md:px-4">
                        <span class="pr-4 md:pr-0">
                            衣飾配件
                        </span>

                        <span class="material-symbols-outlined text-base lg:text-2xl md:hidden">
                            chevron_right
                        </span>
                    </a>
                </li> -->
            <!-- </ul> -->
        <!-- </div> -->
        <div class="px-8">
        <ul class="grid grid-cols-2 gap-x-4 gap-y-8
        md:grid-cols-3 
        xl:grid-cols-4" v-if="products">

            <li class="text-center rounded-lg2 hover:shadow-lg2" v-for="product in products" :key="product.id">
                <RouterLink :to="`/products/product/${product.id}`"  class="">
                    <img :src="product.imageUrl" alt="" class="mb-2 h-[250px] md:h-[280px] w-full  object-cover rounded-t-lg">
                <div class="min-h-[54px] mb-1 text-4.5">
                    <h2>{{ product.title }}</h2>
                </div>
                <p class="text-highlight text-sm font-extrabold">NT$ {{ product.price }}</p>
                </RouterLink>
                <!-- <input type="radio" name="size" class="squareBtn text-xs bg-transparent outline outline-secondary mr-2" value="S"> -->
                <!-- <div class="mb-1">
                    <button class="squareBtn text-xs bg-transparent outline outline-secondary mr-2" @click=""> S
                    </button>
                    <button class="squareBtn text-xs bg-transparent outline outline-secondary mr-2"> M </button>
                    <button class="squareBtn text-xs bg-transparent outline outline-secondary">L </button>
                </div> -->
                <button type="button" class="btn rounded-[5px] flex items-center justify-center mx-auto mb-4" @click="addCart(product)">
                    <span class="material-symbols-outlined leading-none ">
                        shopping_cart
                    </span>
                </button>
                </li>
                <!-- <li class="text-center">
                    *product pic*
                    <img src="#" alt="" class="mb-2 h-[360px]">
                    <div class="min-h-[54px] mb-1 text-4.5">
                        <h2>耐咬飛盤 (大) 寵物玩具</h2>
                    </div>
                    <p class="text-highlight text-sm font-extrabold">NT$ 790</p>
                </li>
                <li class="text-center">
                    *product pic*
                    <img src="#" alt="" class="mb-2 h-[360px]">
                    <div class="min-h-[54px] mb-1 text-4.5">
                        <h2>耐咬飛盤 (大) 寵物玩具</h2>
                    </div>
                    <p class="text-highlight text-sm font-extrabold">NT$ 790</p>
                </li>
                <li class="text-center">
                    *product pic*
                    <img src="#" alt="" class="mb-2 h-[360px]">
                    <div class="min-h-[54px] mb-1 text-4.5">
                        <h2>耐咬飛盤 (大) 寵物玩具</h2>
                    </div>
                    <p class="text-highlight text-sm font-extrabold">NT$ 790</p>
                </li> -->
            </ul>
            <!-- <PaginationComponent :pagination="productsPagination"></PaginationComponent> -->
        </div>
    </div>
</template>