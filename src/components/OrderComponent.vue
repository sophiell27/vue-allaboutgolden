<script>
import _ from 'lodash';
import adminStore from '../stores/adminStore.js';
import { mapActions } from 'pinia';
import { Modal } from 'flowbite';

const { VITE_API, VITE_PATH } = import.meta.env;
export default {
    data() {
        return {
            orderModal: {},
            data: {
                user: {}
            }

        }
    },
    methods: {
        ...mapActions(adminStore, ["getOrders"]),
        openOrderModal(order) {
            this.data =_.cloneDeep(order);
            console.log(this.data);
            this.orderModal.show();
        },
        closeOrderModal() {
            this.orderModal.hide();
            this.data =  {
                user: {}
            };
        },
        changeOrder() {
            if (confirm("是否確定更改訂單資訊？")){
                this.$http.put(`${VITE_API}api/${VITE_PATH}/admin/order/${this.data.id}`,{ data:this.data})
            .then(res => {
                alert("已成功更改訂單資料")
                this.closeOrderModal();
                this.getOrders();
            })
            .catch(err=> {
                alert("更改訂單資料發生錯誤！")
            })
            }
            

        }

    },
    mounted() {
        this.orderModal = new Modal(this.$refs.orderModal);
    }

}
</script>

<template>
    <!-- Main modal -->
    <div class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] md:h-full"
        ref="orderModal">
        <v-form class="relative w-full h-full max-w-2xl md:h-auto" @submit="changeOrder">
            <!-- Modal content -->
            <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
                <!-- Modal header -->
                <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
                    <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                        編輯訂單
                    </h3>
                    <button type="button"
                        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        @click="closeOrderModal">
                        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                clip-rule="evenodd"></path>
                        </svg>
                        <span class="sr-only">Close modal</span>
                    </button>
                </div>
                <!-- Modal body -->
                <div class="grid grid-cols-1 gap-x-8 p-8">
                    <v-form class="container" @submit="changeOrder">

                        <div class="mb-8 md:mb-10">
                            <div class="col-start-3 col-span-8">
                                <h3 class="text-4.5 mb-6"> 訂單資料</h3>
                                <div class="grid grid-cols-2 gap-y-4 md:gap-x-4 md:gap-y-8">
                                    <div class=" col-span-2 md:col-span-1">

                                        <label for="recipient" class="mb-2 block">收貨人：</label>
                                        <v-field type="text" id='recipient'
                                            class="w-full rounded-lg px-4 py-2 border-primary focus:outline-none focus:ring focus:ring-primary focus:border-primary placeholder:text-primary bg-transparent"
                                            placeholder="請輸入收貨人姓名" name="收貨人姓名" rules="required"
                                            v-model="data.user.name"></v-field>
                                        <v-error-message name="收貨人姓名" class="text-highlight"></v-error-message>
                                    </div>
                                    <div class="col-span-2 md:col-span-1">
                                        <label for="recipientPhone" class="mb-2 block">收貨人電話：</label>
                                        <v-field type="tel" id='recipientPhone'
                                            class="w-full rounded-lg px-4 py-2 border-primary focus:outline-none focus:ring focus:ring-primary focus:border-primary placeholder:text-primary bg-transparent"
                                            placeholder="請輸入收貨人電話" name="收貨人電話" rules="required"
                                            v-model="data.user.tel"></v-field>
                                        <v-error-message name="收貨人電話" class="text-highlight"></v-error-message>
                                    </div>
                                    <div class="col-span-2">
                                    <label for="receipientAddr" class="mb-2 block">收貨人地址：</label>
                                    <v-field type="text" id='receipientAddr'
                                        class="w-full rounded-lg px-4 py-2 border-primary focus:outline-none focus:ring focus:ring-primary focus:border-primary placeholder:text-primary bg-transparent"
                                        placeholder="請輸入收貨人地址" name="收貨人地址" rules="required"
                                        v-model="data.user.address"></v-field>
                                    <v-error-message name="收貨人地址" class="text-highlight"></v-error-message>
                                    <!-- <input type="text" class="w-full" rows="2"> -->
                                    </div>
                                    <div class="col-span-2">
                                        <label for="receipientMail" class="mb-2 block">電郵：</label>
                                        <v-field type="email" id='receipientMail'
                                            class="w-full rounded-lg px-4 py-2 border-primary focus:outline-none focus:ring focus:ring-primary focus:border-primary placeholder:text-primary bg-transparent"
                                            placeholder="請輸入電郵" name="電郵" rules="required"
                                            v-model="data.user.email"></v-field>
                                        <v-error-message name="電郵" class="text-highlight"></v-error-message>
                                        <!-- <input type="text" class="w-full" rows="2"> -->
                                    </div>
                                    <div class="col-span-2 md:col-span-1">
                                        <label for="payment" class="mb-2 block">付款方法：</label>
                                        <select id='payment'
                                            class="w-full rounded-lg px-4 py-2 border-primary focus:outline-none focus:ring focus:ring-primary focus:border-primary placeholder:text-primary bg-transparent"
                                            v-model="data.message">
                                            <option value="銀行轉賬" selected>銀行轉賬</option>
                                            <option value="貨到付款">貨到付款</option>
                                        </select>
                                        <!-- <v-error-message name="" class="text-highlight"></v-error-message> -->
                                    </div>
                                    <div class="col-span-2 md:col-span-1">
                                        <label for="couponNum" class="mb-2 block">優惠碼：</label>
                                        <input type="text" id='couponNum'
                                            class="w-full rounded-lg px-4 py-2 border-primary focus:outline-none focus:ring focus:ring-primary focus:border-primary placeholder:text-primary bg-transparent"
                                            placeholder="請輸入優惠碼" />
                                        <!-- <v-error-message name="" class="text-highlight"></v-error-message> -->
                                    </div>
                                    <div class="mb-3 flex items-center">
                                        <input type="checkbox" id='orderPaid'
                                            class="rounded-sm mr-2 ring-2 ring-primary  indeterminate:bg-white indeterminate:ring-offset-primary ring-offset-primary checked:bg-primary focus:outline-none focus:ring focus:ring-primary valid:border-primary "
                                            v-model="data.is_paid" :checked="data.is_paid">
                                        <label for="orderPaid" class=" block">{{data.is_paid? "已付款"  : "未付款"}}</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </v-form>

                </div>
                <!-- Modal footer -->
                <div
                    class="flex justify-end items-center p-6 space-x-2 border-t border-gray-200 rounded-b dark:border-gray-600">
                    <button data-modal-hide="defaultModal" type="button"
                        class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
                        @click="closeOrderModal">取消</button>
                    <button
                        class="text-white bg-secondary hover:bg-primary hover:text-dark focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center ">確定</button>
                </div>
            </div>
        </v-form>
    </div>
</template>