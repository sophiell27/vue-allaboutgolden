<script>
import frontStore from '@/stores/frontStore';
import { mapState } from 'pinia';

export default {
  computed: {
    ...mapState(frontStore, ['categories', 'currentCategory']),
  },
  methods: {
    toggleNavCategory() {
      this.$refs.categoryList.classList.toggle('hidden');
    },
    toggleCategoryMenu() {
      const el = this.$refs.catergoryOveray;
      el.classList.toggle('hidden');
    },
    scrollCategoryMenu() {
      const { categoryBtn, categoryList } = this.$refs;
      const method = (window.scrollY > 80 && window.innerWidth < 1024) ? 'add' : 'remove';
      categoryBtn?.classList[method]('fixed', 'bottom-0', 'bg-fog-200');
      categoryList?.classList[method]('fixed', 'bottom-0');
      // productsMav.classList[method]('-mt-6');
    },
  },
  mounted() {
    window.addEventListener('scroll', this.scrollCategoryMenu);
  },
};
</script>
<template>
  <button type="button"
    class="w-full flex items-center justify-center p-2  text-fog-500 rounded-lg lg:hidden hover:text-highlight"
    ref="categoryBtn" @click="toggleCategoryMenu"> <span>
      {{ currentCategory }} <span class="material-symbols-outlined text-sm ml-1 "> expand_more</span>
      <!-- expand_less  -->
    </span>
  </button>
  <nav class="hidden absolute top-6 bottom-0 left-0 right-0 z-50 lg:block lg:right-auto lg:fixed lg:top-1/2 lg:-translate-y-1/2 lg:bg-transparent" ref="catergoryOveray"
    @click="toggleCategoryMenu">
    <!--  -->
    <!-- fixed bottom-0  -->
    <ul class="w-full font-medium flex flex-col p-4 md:p-0 mt-4 border border-fog-100 rounded-lg bg-white lg:bg-transparent " ref="categoryList">
      <li class="" v-for=" (category, index) in categories" :key="'cat' + category">
        <RouterLink :to="index === 0 ? '/products' : `/products/category/${category}`"
          class="block py-2 pl-3 pr-4 text-fog-500 rounded hover:bg-fog-200 "> {{ category }}
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>
