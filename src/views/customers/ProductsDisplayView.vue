<script>
import frontStore from '@/stores/frontStore';
import { mapActions, mapState } from 'pinia';
import ProductListComponent from '@/components/ProductListComponent.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    ProductListComponent,
  },
  watch: {
    $route(n, o) {
      if (n.params.category !== o.params.category) {
        this.getProducts(n.params.category);
      }
    },
  },
  computed: {
    ...mapState(frontStore, ['products', 'filteredProducts', 'currentCategory']),
  },
  methods: {
    ...mapActions(frontStore, ['getProducts']),
  },
  mounted() {
    this.getProducts();
  },
};
</script>
<template>
    <ProductListComponent :products="products"></ProductListComponent>
</template>
