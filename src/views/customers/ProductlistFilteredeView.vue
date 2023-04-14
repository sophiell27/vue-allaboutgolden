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
    ...mapState(frontStore, ['products', 'filteredProducts']),
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
</template>
