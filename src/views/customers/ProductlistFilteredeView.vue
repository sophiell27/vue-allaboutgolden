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
    ...mapState(frontStore, ['products', 'filterProducts']),
  },
  methods: {
    ...mapActions(frontStore, ['getProducts', 'filterProductList', 'fetchData']),
  },
  watch: {
    $route(n) {
      this.filterProductList(n.params.category);
    },
  },
  mounted() {
    this.filterProductList(this.$route.params.category);
  },
};
</script>

<template>
  <ProductListComponent :products="filterProducts"></ProductListComponent>
</template>
