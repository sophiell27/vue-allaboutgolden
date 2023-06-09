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
      this.alertMessage('是否確定刪除訂單?')
        .then((result) => {
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
  <div class="container pt-10 md:pt-16">
    <OrderComponent ref="orderModal" />
    <h2 class="titleDash text-h4 text-center text-dark pb-5 mb-7">訂單列表</h2>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-fog-500 ">
        <thead class="font-extrabold text-4.5 text-fog-500 bg-fog-200 whitespace-nowrap">
          <tr>
            <th scope="col" class="px-6 py-3">
              日期
            </th>
            <th scope="col" class="px-6 py-3">
              訂單編號
            </th>
            <th scope="col" class="px-6 py-3">
              訂單內容
            </th>
            <th scope="col" class="px-6 py-3">
              總計
            </th>
            <th scope="col" class="px-6 py-3">
              是否付款
            </th>
            <th scope="col" class="px-6 py-3">
              編輯
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b hover:bg-fog-100 " v-for="order in orders" :key="order.create_at">
            <td class="px-2 py-4 md:px-6">
              {{ getFormatDate(order.create_at) }}
            </td>
            <td class="px-2 py-4 md:px-6  text-xs whitespace-normal">
              {{ order.id }}
            </td>
            <td class="px-2 py-4 text-xs md:px-6 ">
              <template v-for="item in order.products " :key="`item${item.id}`">
                <p> {{ `${item.product.title} x ${item.qty}` }}</p>
              </template>
            </td>
            <td class="px-2 py-4 md:px-6 text-xs">
              NT $ {{ order.total }}
            </td>
            <td class="px-2 py-4 md:px-6 whitespace-nowrap"
              :class="{ 'text-highlight border-b-highlight': !order.is_paid }">
              {{ order.is_paid ? "已付款" : "未付款" }}
            </td>
            <td class="px-2 py-4 md:px-6">
              <button type="button"
                class="pb-px border-b border-b-secondary hover:text-highlight hover:border-b-highlight"
                @click="openOrderModal(order)">
                編輯
              </button> /
              <button type="button"
                class="pb-px border-b border-b-secondary hover:text-highlight hover:border-b-highlight"
                @click="delOrder(order.id)">
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <PaginationComponent :pagination="orderPagination" @getpage="getOrders" />
    </div>
  </div>
</template>
