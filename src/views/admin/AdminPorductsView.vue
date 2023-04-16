<script>
import adminStore from '@/stores/adminStore';
import { mapState, mapActions } from 'pinia';
import PaginationComponent from '@/components/PaginationComponent.vue';
import ProductModalComponent from '@/components/ProductModalComponent.vue';

const { VITE_API, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {};
  },
  components: {
    PaginationComponent,
    ProductModalComponent,
  },
  methods: {
    ...mapActions(adminStore, ['getProducts', 'alertMessage', 'toastMessage']),
    openProductModal(product) {
      this.$refs.productModal.openProductModal(product);
    },
    delProduct(productId) {
      this.alertMessage('是否確定刪除商品？')
        .then((result) => {
          if (result.isConfirmed) {
            this.$http.delete(`${VITE_API}api/${VITE_PATH}/admin/product/${productId}`)
              .then(() => {
                this.getProducts();
                this.toastMessage('已成功刪除一筆產品資料');
              })
              .catch(() => {
                this.alertMessage('無法刪除商品');
              });
          }
        });
    },
  },
  computed: {
    ...mapState(adminStore, ['products', 'productsPagination']),
  },
  mounted() {
    this.getProducts(this.$route.params.productpage);
  },
};
</script>
<template>
  <div class="container py-10 md:py-16">
    <ProductModalComponent ref="productModal" />
    <h2 class="titleDash text-h4 text-center text-dark pb-5 mb-7">產品列表</h2>
    <button
      class="self-start mb-8 text-white bg-secondary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-primary font-medium rounded-lg text-sm px-5 py-2.5 text-center "
      type="button" @click="openProductModal">
      新增商品
    </button>
    <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table class="w-full text-sm text-left text-fog-500 ">
        <thead class="font-extrabold text-4.5 text-fog-500 bg-fog-200 whitespace-nowrap">
          <tr>
            <th scope="col" class="px-6 py-3">
              產品編號
            </th>
            <th scope="col" class="px-6 py-3">
              產品名稱
            </th>
            <th scope="col" class="px-6 py-3">
              類別
            </th>
            <th scope="col" class="px-6 py-3">
              原價
            </th>
            <th scope="col" class="px-6 py-3">
              售價
            </th>
            <th scope="col" class="px-6 py-3">
              上架狀態
            </th>
            <th scope="col" class="px-6 py-3">
              編輯
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b hover:bg-fog-100 " v-for="product in products" :key="product.id">
            <td class="px-2 py-4 md:px-6">
              {{ product.id }}
            </td>
            <td class="px-2 py-4 md:px-6">
              {{ product.title }}
            </td>
            <td class="px-2 py-4 text-xs md:px-6 ">
              {{ product.category }}
            </td>
            <td class="px-2 py-4 md:px-6 text-xs">
              NT $ {{ product.origin_price }}
            </td>
            <td class="px-2 py-4 md:px-6 text-xs">
              NT $ {{ product.price }}
            </td>
            <td class="px-2 py-4 md:px-6" :class="{ 'text-highlight border-b-highlight': product.is_enabled }">
              {{ product.is_enabled ? "已上架" : "未上架" }}
            </td>
            <td class="px-2 py-4 text-xs md:px-6">
              <button type="button"
                class="pb-px border-b border-b-secondary hover:text-highlight hover:border-b-highlight"
                @click="openProductModal(product)">
                編輯
              </button> /
              <button type="button"
                class="pb-px border-b border-b-secondary hover:text-highlight hover:border-b-highlight"
                @click="delProduct(product.id)">
                刪除
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <PaginationComponent :pagination="productsPagination" @getpage="getProducts"></PaginationComponent>
    </div>
  </div>
</template>
