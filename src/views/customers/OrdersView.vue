<script>
import frontStore from '@/stores/frontStore';
import { mapActions } from 'pinia';
import PaginationComponent from '@/components/PaginationComponent.vue';

const { VITE_API, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      orders: [],
      orderPagination: {},
    };
  },
  components: {
    PaginationComponent,
  },
  methods: {
    ...mapActions(frontStore, ['alertMessage']),
    getOrders(page = 1) {
      this.$http.get(`${VITE_API}api/${VITE_PATH}/orders?page=${page}`)
        .then((res) => {
          this.orders = res.data.orders;
          this.orderPagination = res.data.pagination;
          this.$router.push(`/user/orders/${page}`);
        })
        .catch(() => {
          this.alertMessage('無法取得訂單列表');
        });
    },
    getFormatDate(stamp) {
      const newStamp = new Date(stamp * 1000);
      return `${newStamp.getDate()}/${newStamp.getMonth() + 1}/${newStamp.getFullYear()}`;
    },
  },
  mounted() {
    this.getOrders(this.$route.params.orderpage);
  },
};
</script>

<template>
  <div class="container pt-10 md:pt-16">
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
              <span class="hidden md:block">付款狀態</span>
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
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <PaginationComponent :pagination="orderPagination" @getpage="getOrders" />
</template>
