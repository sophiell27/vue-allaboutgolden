<script>
import FrontStore from '../../stores/FrontStore.js';
import { mapState, mapActions } from 'pinia';
export default {
    data(){
        return {
            product:{},
            tempQty:1
        }
    },
    computed: {
        ...mapState(FrontStore, ["products", "tempProduct"])
    },
    methods: {
        ...mapActions(FrontStore, ["getSingleProduct", "addCart"])
    },
    mounted(){
        this.getSingleProduct(this.$route.params.productid);
    }
}
</script>

<template>
    <div class="container">
        <div class="mb-6 flex items-center">
            <RouterLink to="/products" class="flex items-center text-4.5 ">
                <span class="pl-1 lg:pl-2">全部商品</span>
                <span class="material-symbols-outlined pl-3 text-base lg:text-2xl">
                    chevron_right
                </span>
            </RouterLink>
            <button class="flex items-center text-4.5 ">
                <span class="pl-1 lg:pl-2">{{ tempProduct.category}}</span>
                <span class="material-symbols-outlined pl-3 text-base lg:text-2xl">
                    chevron_right
                </span>
            </button>
            <p class="text-4.5 pl-2">{{ tempProduct.title}}</p>
        </div>
        <div class="grid grid-cols-12 gap-x-6">
            <img :src="tempProduct.imageUrl" :alt="tempProduct.title" class="col-span-12  mb-6 rounded-lg2 shadow-lg2 md:col-span-4 md:mb-0">
            <div class="col-span-12 md:col-span-8 ">
                <h2 class="text-h4 pb-4 mb-4 md:mb-6">
                    {{tempProduct.title}}</h2>
                <!-- <h2 class="text-4.5 mb-6 md:text-h2 "></h2> -->
                <p class="mb-1 text-base">
                    {{ tempProduct.description}}
                </p>
                <p class="mb-4">
                    {{ tempProduct.content}}
                </p>
                <p class="mb-4">售價：NT${{ tempProduct.price }}</p>
                <table class="table-auto mb-4">
                    <tbody>
                        <tr>
                            <!-- <td class="text-end">
                                <label for="" class=" mb-4">
                                    選擇尺寸：
                                </label>
                            </td> -->
                            <!-- <td>
                                <input type="radio" name="size"
                                    class="appearance-none w-6 h-6 cursor-pointer mr-4 relative after:absolute after:content-['S'] after:squareBtn after:bg-transparent after:border after:border-secondary after:w-6 after:h-6 after:flex after:items-center after:justify-center after:font-primary">
                                <input type="radio" name="size" class="appearance-none  w-6 h-6 cursor-pointer relative after:absolute after:content-['M'] after:squareBtn after:bg-transparent after:w-6 after:h-6 after:flex after:items-center after:justify-center after:font-primary
                           after:bg-fog-200 after:px-2 after:py-1 after:rounded-md">
                            </td> -->
                        </tr>

                        <tr class="text-end">
                            <td>
                                <label for="" class="">數量：</label>

                            </td>
                            <td>
                                <button type="button" class="bg-fog-200 px-2 py-1 rounded-md" @click="tempQty-=1"> - </button>
                                <input type="number"
                                    class="w-20 px-2 text-center bg-fog-200 py-1 mx-1 rounded-md border-none" v-model.number="tempQty" min="1">
                                <button type="button" class="bg-fog-200 px-2 py-1 rounded-md" @click="tempQty+=1"> + </button>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <button type="button" class="btn rounded-lg mr-4 hover:bg-primary hover:text-dark hover:shadow-lg2" @click="addCart(tempProduct, tempQty)"> 加入購物車</button>
                <!-- <button type="button" class="btn rounded-lg "> 直接購買</button> -->

            </div>

        </div>

    </div>
</template>