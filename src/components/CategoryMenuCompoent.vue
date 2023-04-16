<script>
import frontStore from '@/stores/frontStore';
import { mapState } from 'pinia';

export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState(frontStore, ['categories', 'currentCategory']),
  },
};
</script>

<template>
  <ul class="flex flex-col items-center text-fog-400 text-sm md:bg-fog-100" ref="categoryList">
    <li class="py-2 ml-4 hover:text-highlight md:ml-0 md:px-3" v-for="category,index in categories" :key="'cat' + category"
      :class="{ 'text-highlight': category === currentCategory }">
      <RouterLink :to="index === 0 ? '/products' : `/products/category/${category}`" class="" @click="$emit('toggleMenu')"> {{ category }}
      </RouterLink>
    </li>
  </ul>
</template>
