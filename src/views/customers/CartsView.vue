<script>
import frontStore from '@/stores/frontStore';
import { mapActions, mapState } from 'pinia';
import NewProductsComponent from '@/components/NewProductsComponent.vue';
import CartsComponent from '@/components/CartsComponent.vue';

const { VITE_API, VITE_PATH } = import.meta.env;
export default {
  components: {
    NewProductsComponent,
    CartsComponent,
  },
  computed: {
    ...mapState(frontStore, ['carts', 'cartTotal']),
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
  <div class="container">
    <h2
      class="text-h4 text-center pb-4 mb-8 relative after:content-[''] after:absolute after:-bottom-1  after:left-0 after:right-0 after:mx-auto after:w-8 after:h-1 after:bg-primary md:mb-10">
      購物車
    </h2>
    <div class="container ">
      <p class="text-center text-highlight" v-if="!carts.length">購物車沒有內容！</p>
      <template v-else>
        <CartsComponent></CartsComponent>
      </template>
      <div class=" mt-14 lg:mt-20" v-if="$route.fullPath != '/place-order'">
        <p class="text-4.5 text-center mb-6 md:text-start relative after:absolute after:-bottom-1  after:left-0 after:right-0 after:mx-auto after:w-8 after:h-1 after:bg-primary md:after:right-auto">繼續選購產品</p>
        <NewProductsComponent></NewProductsComponent>
      </div>
    </div>
  </div>
</template>
