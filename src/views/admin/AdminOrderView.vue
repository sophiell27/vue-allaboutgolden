<script>
import adminStore from '../../stores/adminStore.js';
import { mapActions, mapState } from 'pinia';
import PaginationComponent from '../../components/PaginationComponent.vue';
import OrderComponent from '../../components/OrderComponent.vue';
import MyLoader from '../../components/MyLoader.vue';
const { VITE_API, VITE_PATH } = import.meta.env;
export default {
    data() {
        return {
            // orders: [],
            // orderPagination: {},
        }
    },
    computed: {
        ...mapState(adminStore, ["orders", "orderPagination"])
    },
    components:{
        PaginationComponent,
        OrderComponent,
        MyLoader
    },
    methods: {
        ...mapActions(adminStore, ["getOrders"]),
        getFormatDate(stamp){
            const newStamp =  new Date(stamp *1000)
            return `${newStamp.getDate()}/${newStamp.getMonth()}/${newStamp.getFullYear()}`
        },
        openOrderModal(order){
            // .openProductModal();
            this.$refs.orderModal.openOrderModal(order);
        },
        delOrder(orderId){
            if (confirm("是否確定刪除訂單？")){
                this.$http.delete(`${VITE_API}api/${VITE_PATH}/admin/order/${orderId}`)
            .then(()=> {
                this.getOrders();
                alert("已成功刪除一筆訂單");
            })
            .catch(()=> {
                alert("無法刪除一筆訂單");
            })
            }
            
           
        }
    },
    mounted(){
        this.getOrders(this.$route.params.orderpage);
    }
}
</script>

<template>
    <div class="container flex flex-col h-full" v-if="orders">
        <OrderComponent ref="orderModal"></OrderComponent>
        <h1 class="text-h4 text-center mb-8">訂單列表</h1>
        <table class="w-full mb-auto" v-if="orders">
            <thead class="border-b border-b-secondary">
                <tr>
                    <th>日期</th>
                    <th>訂單編號</th>
                    <th>訂單內容</th>
                    <th>總計</th>
                    <th>是否付款</th>
                    <th>編輯</th>
                </tr>
            </thead>
            <tbody class="text-center mb-2">
                <tr v-for="order in orders" :key="order.create_at">
                    <td>{{ getFormatDate(order.create_at) }}</td>
                    <td>{{ order.id }}</td>
                    <td>
                        <template v-for="item in order.products " :key="`item${item.id}`">
                           <p> {{ `${item.product.title} x ${item.qty}` }}</p>

                        </template>
                        </td>
                    <td>NT$ {{ order.total }}</td>
                    <!-- <td >
                    <button type="button" :class="{'text-highlight border-b-highlight': !order.is_paid}" class="border-b border-b-secondary hover:text-highlight hover:border-b-highlight">
                        {{ order.is_paid? "已付款" : "未付款" }}
                    </button></td> -->
                    <td  :class="{'text-highlight border-b-highlight': !order.is_paid}">
                    <!-- <button  class="border-b border-b-secondary hover:text-highlight hover:border-b-highlight">
                       
                    </button> -->
                    {{ order.is_paid? "已付款" : "未付款" }}
                </td>
                    <td class="py-2">
                        <button type="button" class="pb-px border-b border-b-secondary hover:text-highlight hover:border-b-highlight" @click="openOrderModal(order)">
                            編輯
                        </button> / 
                        <button  type="button"  class="pb-px border-b border-b-secondary hover:text-highlight hover:border-b-highlight" @click="delOrder(order.id)">
                            刪除
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
        <!-- <div class="" v-if="orders">
            {{ orders }}
        </div> -->
        <PaginationComponent :pagination="orderPagination" @getpage="getOrders"></PaginationComponent>
        <!-- <div class="flex items-end justify-center mt-auto w-full">
            <PaginationComponent :pagination="orderPagination"></PaginationComponent>
        </div> -->
    </div>
</template>