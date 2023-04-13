<script>
import frontStore from '@/stores/frontStore';
import { mapState, mapActions } from 'pinia';
import BreadrumbComponent from '@/components/BreadrumbComponent.vue';
import ProductListComponent from '@/components/ProductListComponent.vue';

const { VITE_API, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      // isLoading: false,
      // fullPage: true,
      product: {},
      tempQty: 1,
    };
  },
  components: {
    BreadrumbComponent,
    ProductListComponent,
  },
  computed: {
    ...mapState(frontStore, ['getFilterCategoryProducts']),
  },
  watch: {
    tempQty(n) {
      if (n > 10) {
        this.tempQty = 10;
      } else if (n <= 0) {
        this.tempQty = 1;
      }
    },
    $route(n) {
      const { productid } = n.params;
      if (productid) {
        this.getProductDetail(productid);
      }
    },
    mounted() {
      this.getProductDetail(this.$route.params.productid);
    },
  },
  methods: {
    ...mapActions(frontStore, ['getProducts']),
    getProductDetail(productId) {
      this.isLoading = true;
      this.$http.get(`${VITE_API}api/${VITE_PATH}/product/${productId}`)
        .then((res) => {
          this.isLoading = false;
          this.product = res.data.product;
        })
        .catch((err) => {
          this.isLoading = false;
          this.alertMessage('取得商品資訊發生錯誤!');
          this.$router.push('/products');
          return err;
        });
    },
  },
  mounted() {
    const { productid, category } = this.$route.params;
    this.getProductDetail(productid);
    this.getProducts(category);
  },
};
</script>

<template>
  <!-- <loading v-model:active="isLoading" :is-full-page="fullPage" /> -->
  <div class="container">
    <BreadrumbComponent :product="product"></BreadrumbComponent>
    <div class="flex flex-col mb-12">
      <img :src="product.imageUrl" alt="product photo" class="object-contain mb-6">
      <article class="px-4 text-center">
        <h2 class="text-h4 mb-2 flex items-center justify-center">{{ product.title }} <span
            class="text-base ml-4 text-highlight">NT${{ product.price }}</span></h2>
        <p class="mb-4">{{ product.description }}</p>
        <p class="text-sm mb-4">{{ product.content }}</p>
        <div class="flex justify-center">
          <button type="button" class="px-2 py-1 rounded-s-md bg-fog-200 hover:bg-primary hover:text-dark"
            @click="tempQty -= 1"> - </button>
          <button type="button" class="text-fog-400 px-4 py-1 bg-fog-200 border-x border-x-fog-300"> {{ tempQty
          }}</button>
          <button type="button" class="px-2 py-1 rounded-e-md bg-fog-200 hover:bg-primary hover:text-dark"
            @click="tempQty += 1"> + </button>
          <button type="button"
            class="bg-secondary py-2 px-4 rounded-md text-white ml-4 hover:bg-primary hover:text-dark"> 加入購物車 </button>
        </div>
      </article>
    </div>
    <div class="">
      <h2 class="titleDash after:mx-0 mb-6 ">相關產品</h2>
      <ProductListComponent :products="getFilterCategoryProducts"></ProductListComponent>
    </div>
  </div>
</template>
