<script>
import adminStore from '@/stores/adminStore';
import { mapActions, mapState } from 'pinia';
import PaginationComponent from '@/components/PaginationComponent.vue';
import OrderComponent from '@/components/OrderComponent.vue';

const { VITE_API, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(adminStore, ['orders', 'orderPagination']),
  },
  components: {
    PaginationComponent,
    OrderComponent,
  },
  methods: {
    ...mapActions(adminStore, ['getOrders', 'toastMessage', 'alertMessage']),
    getFormatDate(stamp) {
      const newStamp = new Date(stamp * 1000);
      return `${newStamp.getDate()}/${newStamp.getMonth()}/${newStamp.getFullYear()}`;
    },
    openOrderModal(order) {
      this.$refs.orderModal.openOrderModal(order);
    },
    delOrder(orderId) {
      this.$swal.fire({
        text: '是否確定刪除訂單 ?',
        confirmButtonText: '確定',
      }).then((result) => {
        if (result.isConfirmed) {
          this.$http.delete(`${VITE_API}api/${VITE_PATH}/admin/order/${orderId}`)
            .then(() => {
              this.getOrders();
              this.toastMessage('成功刪除一筆訂單');
            })
            .catch(() => {
              this.alertMessage('無法刪除一筆訂單');
            });
        }
      });
    },
  },
  mounted() {
    this.getOrders(this.$route.params.orderpage);
  },
};
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
          <td :class="{ 'text-highlight border-b-highlight': !order.is_paid }">
            {{ order.is_paid ? "已付款" : "未付款" }}
          </td>
          <td class="py-2">
            <button type="button" class="pb-px border-b border-b-secondary hover:text-highlight hover:border-b-highlight"
              @click="openOrderModal(order)">
              編輯
            </button> /
            <button type="button" class="pb-px border-b border-b-secondary hover:text-highlight hover:border-b-highlight"
              @click="delOrder(order.id)">
              刪除
            </button>
          </td>
        </tr>
      </tbody>
    </table>
    <PaginationComponent :pagination="orderPagination" @getpage="getOrders"></PaginationComponent>
  </div>
</template>
