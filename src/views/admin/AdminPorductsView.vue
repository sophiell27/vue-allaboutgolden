<script>
import axios from 'axios';
import adminStore from '../../stores/adminStore.js';
import { mapState, mapActions } from 'pinia';
import PaginationComponent from '../../components/PaginationComponent.vue';
import ProductModalComponent from "../../components/ProductModalComponent.vue";
const { VITE_API, VITE_PATH } = import.meta.env;
export default {
    data() {
        return {
            // products: [],
            // productsPagination: {},
        }
    },
    components: {
        PaginationComponent,
        ProductModalComponent,

    },
    methods: {
        ...mapActions(adminStore, ["getProducts"]),
        openProductModal(product){
            // .openProductModal();
            this.$refs.productModal.openProductModal(product);
        },
        delProduct(productId){
            if (confirm("是否確定刪除商品？")){
                this.$http.delete(`${VITE_API}api/${VITE_PATH}/admin/product/${productId}`)
                .then(()=> {
                    this.getProducts();
                    // console.log(this.$router.params.productpage);
                })
                .catch(()=> {
                    alert("無法刪除商品")
                })
            }
        },
        // changeStatus(){
        //     if (confirm("是否確定更改上架狀態？")){
        //         this.temp.is_enabled = !this.temp.is_enabled;
        //     }
        //     this.editProduct();
        // },
    },
    computed: {
        ...mapState(adminStore, ["products", "productsPagination"])
    },
    mounted() {
        this.getProducts();
        
    }
}
</script>
<template>
    <div class="container flex flex-col h-full">
        <!-- Modal toggle -->

        <ProductModalComponent ref="productModal"></ProductModalComponent>
        <h1 class="text-h4 text-center mb-8">產品列表</h1>
        
        <button 
            class="self-start mb-8 text-white bg-secondary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center "
            type="button" @click="openProductModal">
            新增商品
        </button>
        <table class=" w-full mb-auto" v-if="products">
            <thead class="border-b border-b-secondary">
                <tr>
                    <th class="w-20">產品編號</th>
                    <th>產品名稱</th>
                    <th>類別</th>
                    <th>原價</th>
                    <th>售價</th>
                    <th>上架狀態</th>
                    <th>編輯</th>
                </tr>
            </thead>
            <tbody>
                <tr class="text-center my-2 hover:bg-fog-200" v-for="product in products">
                    <td class="text-xs py-2">{{ product.id }}</td>
                    <td class="py-2">{{ product.title }}</td>
                    <td class="py-2">{{ product.category }}</td>
                    <td class="py-2 text-sm">
                        NT${{ product.origin_price }}
                    </td>
                    <td class="py-2 text-sm">NT${{ product.price }}</td>

                    <td class="py-2" :class="{ 'text-highlight border-b-highlight': product.is_enabled }">
                        {{ product.is_enabled ? "已上架" : "未上架" }}
                        <!-- <button type="button"
                            class="pb-px border-b border-b-secondary hover:text-highlight hover:border-b-highlight"
                            :class="{ 'text-highlight border-b-highlight': product.is_enabled }">
                            {{ product.is_enabled ? "已上架" : "未上架" }}
                        </button> -->
                    </td>
                    <td>
                        <button type="button" class="pb-px border-b border-b-secondary hover:text-highlight hover:border-b-highlight" @click="openProductModal(product)">
                            編輯
                        </button> / 
                        <button type="button" class="pb-px border-b border-b-secondary hover:text-highlight hover:border-b-highlight" @click="delProduct(product.id)">
                            刪除
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <PaginationComponent :pagination="productsPagination" @getpage="getProducts"></PaginationComponent>

</div></template>