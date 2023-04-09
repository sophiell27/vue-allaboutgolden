<script> 
import frontStore from '../stores/frontStore.js';
import { mapActions, mapState } from 'pinia';
import NewProductsComponent from './NewProductsComponent.vue';

export default {
    data() {
        return {
        }
    },
    props: ["products"],
    components: {
        NewProductsComponent
    },
    computed: {
    },
    methods: {
    ...mapActions(frontStore, ["getProducts", "addCart"]),
    },
    mounted() {
    },
}
</script>

<template>
    <div class="sm:px-8">
        <div class="" v-if="!products.length">
            <p class="text-center text-highlight">正在努力上架新品了～</p>
            <div class=" mt-14 lg:mt-20">
                <RouterLink to="/products">
                    <button type="button" class="text-4.5 text-center mb-6 hover:opacity-70 md:text-start relative after:absolute after:-bottom-1  after:left-0 after:right-0 after:mx-auto  after:h-1 after:bg-primary 
            md:after:right-auto ">先看看其他商品</button>
                </RouterLink>
              
                <NewProductsComponent></NewProductsComponent>
            </div>
        </div>

        <ul class="grid grid-cols-2 gap-x-4 gap-y-8
        md:grid-cols-3 
        xl:grid-cols-4" v-else>

            <li class="text-center rounded-lg2 hover:shadow-lg2" v-for="product in products" :key="`filter${product.id}`">
                <!-- "/products/category/:category/product/:productid" -->
                <RouterLink :to="`/products/category/${product.category}/product/${product.id}`"  class="">
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
            </ul>
            <!-- <PaginationComponent :pagination="productsPagination"></PaginationComponent> -->
        </div>
</template>