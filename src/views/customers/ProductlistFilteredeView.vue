<script>
import frontStore from '@/stores/frontStore';
import { mapState, mapActions } from 'pinia';
import ProductListComponent from '@/components/ProductListComponent.vue';
import PillBtnComponent from '@/components/PillBtnComponent.vue';

export default {
  data() {
    return {};
  },
  components: {
    ProductListComponent,
    PillBtnComponent,
  },
  computed: {
    ...mapState(frontStore, ['products', 'filteredProducts', 'getNewProducts']),
  },
  methods: {
    ...mapActions(frontStore, ['getProducts']),
  },
  watch: {
    $route(n) {
      this.getProducts(n.params.category);
    },
  },
  mounted() {
    this.getProducts(this.$route.params.category);
  },
};
</script>

<template>
  <ProductListComponent :products="filteredProducts"></ProductListComponent>
  <div class="" v-if="!filteredProducts.length">
    <p class="text-highlight text-center mb-20">正在努力上架新品了～～</p>
    <h2 class="titleDash text-h4 text-center text-dark pb-5 mb-4">
      先看看其他商品</h2>
    <ProductListComponent :products="getNewProducts"></ProductListComponent>
    <div class="flex justify-center">
      <PillBtnComponent :dynamicPath="'/products'">
        看更多產品
      </PillBtnComponent>
    </div>
  </div>
</template>
