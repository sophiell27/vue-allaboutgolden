<script>
import frontStore from '@/stores/frontStore';
import { mapActions, mapState } from 'pinia';
import BreadrumbComponent from '@/components/BreadrumbComponent.vue';

export default {
  data() {
    return {
      routeValue: this.$route.params,
      category: '全部商品',
      bread: {
        category: '全部商品',
      },
    };
  },
  components: {
    BreadrumbComponent,
  },
  computed: {
    ...mapState(frontStore, ['products', 'isLoading', 'fullPage']),
  },
  methods: {
    ...mapActions(frontStore, ['getProducts', 'addCart', 'filterProductList']),
    changeRoute(evt) {
      this.$router.push(`/products/category/${evt.target.value}`);
    },
    toggleMenu() {
      this.closeMainMenu();
      this.$refs.expandMenu.classList.toggle('hidden');
    },
    closeMainMenu() {
      this.getMainNavRef().classList.add('-translate-x-[200%]');
    },
    getCategory(category) {
      if (category) {
        this.category = category;
      } else {
        this.category = '全部商品';
      }
      this.bread.category = this.category;
    },
  },
  watch: {
    $route(n) {
      this.getCategory(n.params.category);
    },
  },
  mounted() {
    this.getProducts();
    this.getCategory(this.$route.params.category);
  },
  inject: ['getMainNavRef'],
};
</script>

<template>
  <LoadingComponent v-model:active="isLoading" :is-full-page="fullPage" />
  <div class="container flex justify-center relative top-0 md:hidden">
    <BreadrumbComponent :tempProduct="bread"></BreadrumbComponent>
  </div>
  <div class="text-center relative">
    <div
      class="fixed  bottom-0 w-full z-50 hover:z-[100] bg-fog-200 md:top-14 md:z-30 md:hover:z-30 md:sticky md:bg-fog-100">
      <!-- my-3 bg-fog-100-->
      <!-- toggle menu  -->
      <button type="button"
        class="absolute  bottom-0 py-2 pl-8 pr-2 flex items-center justify-center bg-fog-200 w-full text-dark   hover:bg-highlight hover:mt-3  hover:text-dark md:px-8 md:hidden "
        @click="toggleMenu">
        <span class="pr-4 md:pr-0">
          {{ category }}
        </span>
        <span class="material-symbols-outlined text-base lg:text-2xl md:hidden">
          expand_less
        </span>
      </button>
      <!-- bg-fog-100 mb-8 -->
      <!-- menu  -->
      <ul
        class="hidden absolute bottom-0  z-10 p-4 text-fog-400 bg-fog-100 rounded-lg2 md:flex md:justify-center md:pb-0 md:bg-transparent md:static md:-mt-8" ref="expandMenu" id="expandMenu">
        <li>
          <!-- hidden md:block -->
          <RouterLink to="/products" class="py-2 pl-4 pr-2 flex items-center hover:text-highlight md:px-4 "
            @click="{ toggleMenu();category='全部商品' }">
            <span class="pr-4 md:pr-0">
              全部商品
            </span>
            <span class="material-symbols-outlined text-base lg:text-2xl md:hidden">
              chevron_right
            </span>
          </RouterLink>
        </li>
        <li class="">
          <RouterLink to="/products/category/配件配飾" class="py-2 pl-4 pr-2 flex items-center hover:text-highlight md:px-4"
            @click="toggleMenu">
            <span class="pr-4 md:pr-0">
              配件配飾
            </span>
            <span class="material-symbols-outlined text-base lg:text-2xl md:hidden">
              chevron_right
            </span>
          </RouterLink>
        </li>
        <li class="">
          <RouterLink to="/products/category/居家配件" class="py-2 pl-4 pr-2 flex items-center hover:text-highlight md:px-4"
            @click="toggleMenu">
            <span class="pr-4 md:pr-0">
              居家配件
            </span>
            <span class="material-symbols-outlined text-base lg:text-2xl md:hidden">
              chevron_right
            </span>
          </RouterLink>
        </li>
        <li class="">
          <RouterLink to="/products/category/床上用品" class="py-2 pl-4 pr-2 flex items-center hover:text-highlight md:px-4"
            @click="toggleMenu">
            <span class="pr-4 md:pr-0">
              床上用品
            </span>
            <span class="material-symbols-outlined text-base lg:text-2xl md:hidden">
              chevron_right
            </span>
          </RouterLink>
        </li>
        <li class="">
          <RouterLink to="/products/category/科技配件" class="py-2 pl-4 pr-2 flex items-center hover:text-highlight md:px-4"
            @click="toggleMenu">
            <span class="pr-4 md:pr-0">
              科技配件
            </span>
            <span class="material-symbols-outlined text-base lg:text-2xl md:hidden">
              chevron_right
            </span>
          </RouterLink>
        </li>
        <li class="">
          <RouterLink to="/products/category/衣物大全" class="py-2 pl-4 pr-2 flex items-center hover:text-highlight md:px-4"
            @click="toggleMenu">
            <span class="pr-4 md:pr-0">
              衣物大全
            </span>
            <span class="material-symbols-outlined text-base lg:text-2xl md:hidden">
              chevron_right
            </span>
          </RouterLink>
        </li>
        <li class="">
          <RouterLink to="/products/category/有狗亂入" class="py-2 pl-4 pr-2 flex items-center hover:text-highlight md:px-4"
            @click="toggleMenu">
            <span class="pr-4 md:pr-0">
              有狗亂入
            </span>

            <span class="material-symbols-outlined text-base lg:text-2xl md:hidden">
              chevron_right
            </span>
          </RouterLink>
        </li>
      </ul>
    </div>
    <!-- </div> -->
    <!-- pt-[72px] -->
    <div class="container">
      <RouterView></RouterView>
    </div>
  </div>
</template>
