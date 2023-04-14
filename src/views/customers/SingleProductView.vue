<script>
import frontStore from '@/stores/frontStore';
import { mapState, mapActions } from 'pinia';
import BreadrumbComponent from '@/components/BreadrumbComponent.vue';
import ProductListComponent from '@/components/ProductListComponent.vue';

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
  },
  computed: {
    ...mapState(frontStore, ['products', 'tempProduct', 'getFilterCategoryProducts']),
  },
  methods: {
    ...mapActions(frontStore, ['getSingleProduct', 'addCart', 'getProducts']),
  },
  mounted() {
    this.getProducts(this.$route.params.category);
    this.getSingleProduct(this.$route.params.productid);
  },
  watch: {
    $route(n, o) {
      const { productid } = n.params;
      if (productid) {
        if (n.params.productid !== o.params.productid) {
          this.getSingleProduct(n.params.productid);
        }
      }
    },
  },
};
</script>

<template>
  <div class="container" data-aos="zoom-in">
    <BreadrumbComponent :tempProduct="tempProduct"></BreadrumbComponent>
    <div class="grid grid-cols-12 gap-x-6">
      <img :src="tempProduct.imageUrl" :alt="tempProduct.title"
        class="col-span-12  mb-6 rounded-lg2 shadow-lg2 md:col-span-4 md:mb-0">
      <div class="col-span-12 md:col-span-8 ">
        <h2 class="text-h4 pb-4 mb-4 md:mb-6">
          {{ tempProduct.title }}</h2>
        <!-- <h2 class="text-4.5 mb-6 md:text-h2 "></h2> -->
        <p class="mb-1 text-base">
          {{ tempProduct.description }}
        </p>
        <p class="mb-4">
          {{ tempProduct.content }}
        </p>
        <p class="mb-4">售價：NT${{ tempProduct.price }}</p>
        <table class="table-auto mb-4">
          <tbody>
            <tr class="text-end">
              <td>
                <label for="" class="">數量：</label>
              </td>
              <td>
                <button type="button" class="bg-fog-200 px-2 py-1 rounded-md" @click="tempQty -= 1"> - </button>
                <input type="number" class="w-20 px-2 text-center bg-fog-200 py-1 mx-1 rounded-md border-none"
                  v-model.number="tempQty" min="1">
                <button type="button" class="bg-fog-200 px-2 py-1 rounded-md" @click="tempQty += 1"> + </button>
              </td>
            </tr>
          </tbody>
        </table>
        <button type="button" class="btn rounded-lg mr-4 hover:bg-primary hover:text-dark hover:shadow-lg2"
          @click="addCart(tempProduct, tempQty)"> 加入購物車</button>
      </div>
    </div>
    <div class=" mt-14 lg:mt-20" v-if="$route.fullPath != '/place-order'">
      <p class="text-4.5 text-center mb-6 md:text-start relative after:absolute after:-bottom-1  after:left-0 after:right-0 after:mx-auto after:w-8 after:h-1 after:bg-primary md:after:right-auto">相關產品</p>
      <ProductListComponent :products="getFilterCategoryProducts"></ProductListComponent>
    </div>
  </div>
</template>
