<script>
import FrontStore from '@/stores/frontStore';
import { mapActions, mapState } from 'pinia';
import PillBtnComponent from '@/components/PillBtnComponent.vue';

export default {
  components: {
    PillBtnComponent,
  },
  methods: {
    ...mapActions(FrontStore, ['getProducts']),
  },
  computed: {
    ...mapState(FrontStore, ['products']),
  },
  mounted() {
    this.getProducts();
  },
};
</script>
<template>
  <!-- 上架product  -->
  <ul class="newArrival grid grid-cols-12 md:gap-x-14 md:mb-6">
    <li
      class="col-span-12 mb-6 text-center overflow-hidden group hover:shadow-lg2 rounded-lg2 md:last:hidden md:col-span-6 lg:col-span-4  lg:[&:nth-child(2)]:block"
      data-aos="fade-left" v-for=" product in products.slice(products.length - 3)" :key="product.id">
      <!-- path: "/products/category/:category/product/:productid"-->
      <RouterLink :to="`/products/category/${product.category}/product/${product.id}`">
        <img :src="product.imageUrl" alt="" class="mb-2 h-[360px] w-full object-cover rounded-lg2  ">
        <div class="min-h-[54px] mb-1 text-4.5">
          <h2> {{ product.title }}</h2>
        </div>
        <p class="text-highlight text-sm font-extrabold">NT$ 790</p>
      </RouterLink>
    </li>
  </ul>
  <div class="flex justify-center">
    <PillBtnComponent>
      看更多產品
    </PillBtnComponent>
  </div>
</template>
