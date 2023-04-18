<script>
export default {
  data() {
    return {
    };
  },
  props: ['tempProduct'],
};
</script>
<template>
  <div class="py-6 flex items-center text-fog-400 text-sm" v-if="tempProduct">
    <!-- /products/category/:category -->
    <RouterLink to="/products" class="flex items-center md:text-lg hover:text-highlight ">
      <span class="md:pl-1 lg:pl-2">全部商品</span>
      <span class="material-symbols-outlined md:pl-3 text-base lg:text-2xl">
        chevron_right
      </span>
    </RouterLink>
    <RouterLink :to="`/products/category/${tempProduct.category}`"
      class="flex items-center md:text-lg hover:text-highlight " v-if="tempProduct.category != '全部商品'">
      <span class="md:pl-1 lg:pl-2">{{ tempProduct.category }}</span>
      <span class="material-symbols-outlined md:pl-3 text-base lg:text-2xl">
        chevron_right
      </span>
    </RouterLink>
    <p class="md:pl-2 md:text-lg text-highlight" v-if="tempProduct.title">{{ tempProduct.title }}</p>
  </div>
</template>
