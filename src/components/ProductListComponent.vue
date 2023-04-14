<script>
import frontStore from '@/stores/frontStore';
import { mapActions } from 'pinia';

export default {
  data() {
    return {};
  },
  props: ['products'],
  methods: {
    ...mapActions(frontStore, ['addCart']),
  },
};
</script>
<template>
  <div class="container">
    <ul class="grid grid-cols-6 gap-4 mb-4" v-if="products?.length">
    <li class="col-span-6 rounded-lg2 mb-4 group hover:shadow-lg2 hover:rounded-lg2 hover:bg-primary hover:text-dark md:col-span-3 lg:col-span-2" :class="{'md:last:hidden lg:last:block': products.length===3 }" v-for="product in products" :key="product.id">
      <RouterLink :to="`/products/category/${product.category}/product/${product.id}`" class="flex flex-col justify-between mb-1">
        <div>
          <img :src="product.imageUrl" alt="product image" class="block rounded-t-lg2 w-full h-[360px] object-cover object-top mb-2 ">
          <h4 class="text-lg text-center mb-1">{{ product.title }}</h4>
        </div>
        <p class="text-sm font-extrabold text-center text-highlight">NT$ 350</p>
      </RouterLink>
      <button type="button" class="material-symbols-outlined mb-1 flex mx-auto" @click="addCart(product.id)">shopping_cart</button>
    </li>
  </ul>
  </div>
</template>
