<script>

import PaginationComponent from '../../components/PaginationComponent.vue';
const { VITE_API, VITE_PATH } = import.meta.env;
export default {
    data() {
        return {
            orders: [],
            orderPagination: {},
        }
    },
    components:{
        PaginationComponent
    },
    methods: {
        getOrders(page=1) {
            this.$http.get(`${VITE_API}api/${VITE_PATH}/orders?page=${page}`)
            .then(res => {
                this.orders = res.data.orders
                this.orderPagination = res.data.pagination
                // console.log(this.orders);
            })
            .catch(err => {
                console.log("無法取得訂單列表");
            })

        },
        getFormatDate(stamp){
            const newStamp =  new Date(stamp *1000)
            return `${newStamp.getDate()}/${newStamp.getMonth()}/${newStamp.getFullYear()}`
        },
        getOrderPorduct(){

        }
    },
    mounted(){
        this.getOrders();
    }
}
</script>

<template>
    <div class="container flex flex-col h-full">
        <h1 class="text-h4 text-center mb-8">訂單列表</h1>
        <table class="w-full mb-auto" v-if="orders">
            <thead class="border-b border-b-secondary">
                <tr>
                    <th>日期</th>
                    <th>訂單編號</th>
                    <th>訂單內容</th>
                    <th>總計</th>
                    <th>付款狀態</th>
                    <!-- <th>編輯</th> -->
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
                    <td  :class="{'text-highlight border-b-highlight': !order.is_paid}">
                    <!-- <button  class="border-b border-b-secondary hover:text-highlight hover:border-b-highlight">
                       
                    </button> -->
                    {{ order.is_paid? "已付款" : "未付款" }}
                </td>
                    <!-- <td class="py-2">
                        <button type="button" class="pb-px border-b border-b-secondary hover:text-highlight hover:border-b-highlight">
                            編輯
                        </button> / 
                        <button class="pb-px border-b border-b-secondary hover:text-highlight hover:border-b-highlight">
                            刪除
                        </button>
                    </td> -->
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