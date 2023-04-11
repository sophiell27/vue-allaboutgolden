<script>
import frontStore from '@/stores/frontStore';
import { mapState, mapActions } from 'pinia';
import ProductListComponent from '@/components/ProductListComponent.vue';

export default {
  data() {
    return {};
  },
  components: {
    ProductListComponent,
  },
  computed: {
    ...mapState(frontStore, ['products']),
  },
  methods: {
    ...mapActions(frontStore, ['filterProductList']),
    ...mapActions(frontStore, ['getProducts', 'filterProductList', 'fetchData']),
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<template>
  <ProductListComponent :products="products"></ProductListComponent>
</template>
