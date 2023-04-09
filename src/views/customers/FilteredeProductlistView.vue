<script>
import ProductListComponent from '../../components/ProductListComponent.vue';
import frontStore from '../../stores/frontStore.js';
import { mapState, mapActions } from 'pinia';
export default {
  data() {
    return {
    };
  },
  components: {
    ProductListComponent,
  },
  computed: {
    ...mapState(frontStore, ["products", "filterProducts"])
  },
  methods: {
    ...mapActions(frontStore, ["getProducts", "filterProductList", "fetchData"]),
  },
  watch: {
    $route(n, o) {
      this.filterProductList(n.params.category);
    }
  },
  mounted() {
    this.filterProductList(this.$route.params.category);
  }
}
</script>

<template>
  <ProductListComponent :products="filterProducts"></ProductListComponent>
</template>