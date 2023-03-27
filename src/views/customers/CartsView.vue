<script>
import frontStore from "../../stores/frontStore.js";
import { mapActions, mapState } from "pinia";
import NewProductsComponent from "../../components/NewProductsComponent.vue";
import CartsComponent from "../../components/CartsComponent.vue";
const { VITE_API, VITE_PATH } = import.meta.env;
export default {
    components: {
        NewProductsComponent,
        CartsComponent
    },
    computed: {
        ...mapState(frontStore, ["carts", "cartTotal"])
    },
    methods: {
        ...mapActions(frontStore, ["getCarts"]),
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
            <template v-else>
                <CartsComponent></CartsComponent>
            </template>

        
            
            <!-- <div class="flex justify-between "> -->
                <!-- <RouterLink to="/products" class="py-2 px-12 bg-secondary rounded-lg2 text-white">繼續購物</RouterLink> -->
                
            <!-- </div> -->
            <div class=" mt-14 lg:mt-20" v-if="$route.fullPath != '/place-order'">
                <p class="text-4.5 text-center mb-6 md:text-start relative after:absolute after:-bottom-1  after:left-0 after:right-0 after:mx-auto after:w-8 after:h-1 after:bg-primary 
            md:after:right-auto">繼續選購產品</p>
                <NewProductsComponent></NewProductsComponent>
            </div>
        </div>

    </div>
</template>