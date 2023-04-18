<script>
import frontStore from '@/stores/frontStore';
import { mapState, mapActions } from 'pinia';
import ProductListComponent from '@/components/ProductListComponent.vue';
import PillBtnComponent from '@/components/PillBtnComponent.vue';

const { VITE_API, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      newOrder: {},
    };
  },
  components: {
    ProductListComponent,
    PillBtnComponent,
  },
  computed: {
    ...mapState(frontStore, ['getNewProducts']),
  },
  methods: {
    ...mapActions(frontStore, ['alertMessage', 'getFormatDate', 'getProducts']),
    getOrder(orderId) {
      this.$http(`${VITE_API}api/${VITE_PATH}/order/${orderId}`)
        .then((res) => {
          console.log(res);
          this.newOrder = res.data.order;
        })
        .catch(() => {
          this.alertMessage('無法取得訂單資訊');
        });
    },
  },
  mounted() {
    console.log(this.$route.params.orderid);
    this.getOrder(this.$route.params.orderid);
    this.getProducts();
  },
};
</script>
<template>
  <div class="container pt-10 md:pt-16">
    <h2 class="text-h4 titleDash pb-4 mb-20 md:text-2xl text-center">
      訂單內容
    </h2>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg " v-if="newOrder">
      <table class="text-sm text-left text-gray-500 dark:text-gray-400">
        <tbody>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
              訂單日期：
            </th>
            <td class="px-6 py-4 w-full">
              {{ getFormatDate(newOrder.create_at) }}
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
              訂單編號：
            </th>
            <td class="px-6 py-4">
              {{ newOrder.id }}
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
              收貨人姓名：
            </th>
            <td class="px-6 py-4">
              {{ newOrder?.user?.name }}
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
              收貨人電話：
            </th>
            <td class="px-6 py-4">
              {{ newOrder?.user?.tel }}
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
              收貨人地址：
            </th>
            <td class="px-6 py-4">
              {{ newOrder?.user?.address }}
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
              收貨人電郵：
            </th>
            <td class="px-6 py-4">
              {{ newOrder?.user?.email }}
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
              付款方法：
            </th>
            <td class="px-6 py-4">
              {{ newOrder.message }}
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
              總計：
            </th>
            <td class="px-6 py-4 text-xs md:text-sm">
              NT $ {{ newOrder.total }}
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
              付款狀態：
            </th>
            <td class="px-6 py-4">
              {{ newOrder.is_paid ? "已付款" : "未付款" }}
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700">
            <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
              購買內容：
            </th>
            <td class="px-6 py-4" v-for="item in newOrder.products" :key="item">
              {{ item.qty }} <span>x</span>
              <template v-for="product in item" :key="product.id">
                <span>{{ product.title }} </span>
                <span> {{ product.qty }}</span>
              </template>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-8" v-if="newOrder">
      <table class="text-sm text-gray-500 dark:text-gray-400 w-full  text-center">
        <caption class="p-5 text-lg font-semibold text-center text-gray-900 bg-white dark:text-white dark:bg-gray-800">
          購買內容
        </caption>
        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
              商品名稱
            </th>
            <th scope="col" class="px-6 py-3">
              購買數量
            </th>
            <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
              小計
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="border-b border-gray-200 dark:border-gray-700" v-for="item in newOrder.products" :key="item">
            <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
              {{ item.product.title }}
            </th>
            <td class="px-6 py-4 ">
              {{ item.qty }}
            </td>
            <td class="px-6 py-4 text-xs md:text-sm">
              NT $ {{ item.total }}
            </td>
          </tr>
          <tr class="border-b border-gray-200 dark:border-gray-700" v-if="newOrder.total < 900">
            <th scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
              運費
            </th>
            <td class="px-6 py-4 ">
            </td>
            <td class="px-6 py-4 text-xs md:text-sm">
              NT $ 500
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr class="font-semibold text-dark dark:text-white text-center">
            <td class="px-2 py-4 md:px-6 hidden md:block"></td>
            <td colspan="1"></td>
            <!-- <td></td> -->
            <td class="px-2 py-3 text-base whitespace-nowrap">總計：</td>
            <td class="px-2 py-3 text-xs whitespace-nowrap md:px-6">NT $ {{ newOrder.total }}</td>
          </tr>
        </tfoot>
      </table>
    </div>
    <div class=" mt-14 lg:mt-20">
      <h2 class="text-lg titleDash after:mx-0 mb-6 md:text-xl">繼續選購產品</h2>
      <ProductListComponent :products="getNewProducts" />
      <div class="flex justify-center">
        <PillBtnComponent :dynamicPath="'/products'">
          看更多產品
        </PillBtnComponent>
      </div>
    </div>
  </div>
</template>
