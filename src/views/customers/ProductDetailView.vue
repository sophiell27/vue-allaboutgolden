<script>
import frontStore from '@/stores/frontStore';
import { mapState, mapActions } from 'pinia';
import BreadrumbComponent from '@/components/BreadrumbComponent.vue';
import ProductListComponent from '@/components/ProductListComponent.vue';
import PillBtnComponent from '@/components/PillBtnComponent.vue';

const { VITE_API, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
      product: {},
      tempQty: 1,
    };
  },
  components: {
    BreadrumbComponent,
    ProductListComponent,
    PillBtnComponent,
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
    ...mapActions(frontStore, ['getProducts', 'addCart']),
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
  <div class="container">
    <BreadrumbComponent :tempProduct="product" />
    <div class="flex flex-col mb-12 sm:flex-row" v-if="product">
      <img :src="product.imageUrl" alt="product photo" class="object-cover mb-6 w-full md:w-1/2 md:h-auto md:object-contain">
      <article class="px-4 md:mt-2 md:px-8">
        <h2 class="mb-2 flex flex-col text-lg  text-center md:text-h4 md:mb-6 md:text-start">{{ product.title }} <span
            class="text-base text-highlight md:mt-6">NT${{ product.price }}</span></h2>
        <p class="mb-4 text-sm">{{ product.description }}</p>
        <p class="text-sm mb-4 md:mb-8">{{ product.content }}</p>
        <div class="flex justify-center md:justify-start">
          <button type="button" class="px-2 py-1 rounded-s-md bg-fog-200 hover:bg-primary hover:text-dark"
            @click="tempQty -= 1"> - </button>
          <button type="button" class="text-fog-400 px-4 py-1 bg-fog-200 border-x border-x-fog-300"> {{ tempQty
          }}</button>
          <button type="button" class="px-2 py-1 rounded-e-md bg-fog-200 hover:bg-primary hover:text-dark"
            @click="tempQty += 1"> + </button>
          <button type="button"
            class="bg-secondary py-1 px-4 rounded-md text-white ml-4 flex items-center  hover:bg-primary hover:text-dark" @click.prevent="addCart(product, tempQty)">
            <span class="hidden md:block">加入購物車</span><span class="material-symbols-outlined md:hidden">
              shopping_cart
            </span></button>
        </div>
      </article>
    </div>
    <div class="">
      <h2 class="text-lg titleDash after:mx-0 mb-6 md:text-2xl">相關產品</h2>
      <ProductListComponent :products="getFilterCategoryProducts" />
      <div class="flex justify-center">
      <PillBtnComponent :dynamicPath="'/products'">
        看更多產品
      </PillBtnComponent>
    </div>
    </div>
  </div>
</template>
