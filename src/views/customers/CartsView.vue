<script>
import frontStore from '@/stores/frontStore';
import { mapActions, mapState } from 'pinia';
import ProductListComponent from '@/components/ProductListComponent.vue';
import CartsComponent from '@/components/CartsComponent.vue';
import PillBtnComponent from '@/components/PillBtnComponent.vue';

const { VITE_API, VITE_PATH } = import.meta.env;
export default {
  components: {
    ProductListComponent,
    CartsComponent,
    PillBtnComponent,
  },
  computed: {
    ...mapState(frontStore, ['carts', 'cartTotal', 'loginStatus', 'getNewProducts']),
  },
  methods: {
    ...mapActions(frontStore, ['getCarts', 'alertMessage']),
    changeQty(productId, evt) {
      const data = {
        // eslint-disable camelcase
        product_id: productId,
        qty: Number(evt.target.value),
      };
      this.$http.put(`${VITE_API}api/${VITE_PATH}/cart/${productId}`, { data })
        .then(() => {
          // alert('已更改數量');
          this.getCarts();
        })
        .catch(() => {
          this.alertMessage('無法更改數量');
        });
    },
    delCartItem(productId) {
      this.$http.delete(`${VITE_API}api/${VITE_PATH}/cart/${productId}`)
        .then(() => {
          this.getCarts();
        })
        .catch(() => {
          this.alertMessage('無法刪除購物車內容');
        });
    },
  },
  mounted() {
    this.getCarts();
  },
};
</script>
<template>
  <div class="container pt-10 md:pt-16">
    <h2
      class="text-h4 text-center pb-4 mb-20 relative after:content-[''] after:absolute after:-bottom-1  after:left-0 after:right-0 after:mx-auto after:w-8 after:h-1 after:bg-primary">
      購物車
    </h2>
    <p class="text-center text-highlight" v-if="!carts.length">購物車沒有內容！</p>
    <template v-else>
      <CartsComponent />
    </template>
    <div class=" mt-14 lg:mt-20" v-if="$route.fullPath != '/place-order'">
      <h2 class="titleDash text-center mb-6" :class="{' after:mx-0 text-start': carts.length}">繼續選購產品</h2>
      <ProductListComponent :products="getNewProducts" />
      <div class="flex justify-center">
          <PillBtnComponent :dynamicPath="'/products'">
            看更多產品
          </PillBtnComponent>
        </div>
    </div>
  </div>
</template>
