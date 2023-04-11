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
  <div class="py-6 flex flex-col text-fog-400 text-sm md:flex-row md:items-center" v-if="tempProduct">
    <div class="flex">
      <!-- /products/category/:category -->
      <RouterLink to="/products" class="flex items-center md:text-4.5 hover:text-highlight ">
        <span class="pl-1 lg:pl-2">全部商品</span>
        <span class="material-symbols-outlined pl-3 text-base lg:text-2xl">
          chevron_right
        </span>
      </RouterLink>
      <RouterLink :to="`/products/category/${tempProduct.category}`"
        class="flex items-center md:text-4.5 hover:text-highlight " v-if="tempProduct.category != '全部商品'">
        <span class="pl-1 lg:pl-2">{{ tempProduct.category }}</span>
        <span class="material-symbols-outlined pl-3 text-base lg:text-2xl">
          chevron_right
        </span>
      </RouterLink>
    </div>
    <p class="pl-2 md:text-4.5 text-highlight" v-if="tempProduct.title">{{ tempProduct.title }}</p>
  </div>
</template>
