<script>
import FrontStore from "../../stores/FrontStore.js";
import { mapActions, mapState } from "pinia";
import NewProductsComponent from "../../components/NewProductsComponent.vue";
const { VITE_API, VITE_PATH } = import.meta.env;
export default {
    components: {
        NewProductsComponent
    },
    computed: {
        ...mapState(FrontStore, ["carts", "cartTotal"])
    },
    methods: {
        ...mapActions(FrontStore, ["getCarts"]),
        changeQty(product_id, evt) {
            console.log(evt.target.value);
            const data = {
                product_id,
                qty: Number(evt.target.value)
            };
            console.log(data);
            this.$http.put(`${VITE_API}api/${VITE_PATH}/cart/${product_id}`, { data })
                .then(res => {
                    alert("已更改數量")
                    this.getCarts();
                })
                .catch(err => {
                    alert("無法更改數量")
                })
        },
        delCartItem(product_id){
            this.$http.delete(`${VITE_API}api/${VITE_PATH}/cart/${product_id}`)
            .then(()=> {
                this.getCarts();
            })
            .catch(()=> {
                alert("無法刪除購物車內容")
            })
        }
    },
    mounted() {
        this.getCarts();
    }
}
</script>
<template>
    <div class="container">
        <h2
            class="text-h4 text-center pb-4 mb-8 relative after:content-[''] after:absolute after:-bottom-1  after:left-0 after:right-0 after:mx-auto after:w-8 after:h-1 after:bg-primary md:mb-10">
            購物車
        </h2>
        <div class="container " >
            <p class="text-center text-highlight" v-if="!carts.length">購物車沒有內容！</p>
        <table class="w-full  text-center mb-6" v-else>

                <thead>
                    <tr class="font-extrabold text-4.5">
                        <th></th>
                        <th>產品</th>
                        <th>價錢</th>
                        <th>數量</th>
                        <th>小計</th>
                        <th>刪除</th>
                    </tr>
                </thead>
                <tbody>
                    
                    <tr v-for="item in carts">
                        <td class=" lg:w-24 lg:h-24">
                            <img :src="item.product.imageUrl" :alt="item.product.title">
                        </td>
                        <td>
                            {{ item.product.title }}
                        </td>
                        <td class="text-xs">NT $ {{ item.product.price }}</td>
                        <td class="text-xs">
                            <!-- <button type="button" class="px-1 py-1 rounded-md md:px-2  md:bg-fog-200 "> - </button> -->
                            <input type="number" min="1" :value="item.qty" class="w-8 pl-1 text-center border-none bg-fog-100  rounded-md 
                                md:mx-1 md:py-1 md:w-20 md:pl-2  md:bg-fog-200 " @change="(evt) => changeQty(item.id, evt)">
                            <!-- <button type="button" class="px-1 py-1 rounded-md md:px-2  md:bg-fog-200 "> + </button> -->

                        </td>

                        <td class="text-xs">NT $ {{ item.final_total }}</td>
                        <td> <button type="button" class="hover:text-highlight" @click="delCartItem(item.id)">
                            x
                        </button></td>
                    </tr>
                </tbody>
                <tfoot class="border-t border-t-fog-500 border-spacing-1">
                    <tr class="">
                        <!-- <td></td>
                            <td></td> -->
                        <td colspan="3" class="text-end ">
                            <p class="inline-block px-2 bg-fog-200 " v-if="cartTotal >= 900">已達免運費門檻</p>
                        </td>
                        <td class="">總計:</td>
                        <td>NT$ {{ cartTotal }}</td>
                    </tr>
                    <tr >
                        <td colspan="5" >
                            <RouterLink to="/placeorder">
                                <button  type="button" class="py-2 px-12 bg-secondary rounded-lg2 text-white flex ml-auto mt-4 hover:bg-primary hover:text-dark ">結帳</button>
                            </RouterLink>
                           
                        </td>
                    </tr>
                </tfoot>
            </table>
            
            <!-- <div class="flex justify-between "> -->
                <!-- <RouterLink to="/products" class="py-2 px-12 bg-secondary rounded-lg2 text-white">繼續購物</RouterLink> -->
                
            <!-- </div> -->
            <div class=" mt-14 lg:mt-20 ">
                <p class="text-4.5 text-center mb-6 md:text-start relative after:absolute after:-bottom-1  after:left-0 after:right-0 after:mx-auto after:w-8 after:h-1 after:bg-primary 
            md:after:right-auto">繼續選購產品</p>
                <NewProductsComponent></NewProductsComponent>
            </div>
        </div>

    </div>
</template>