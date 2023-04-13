<script>
import frontStore from '@/stores/frontStore';
import { mapActions, mapState } from 'pinia';
import _ from 'lodash';
import PillBtnComponent from '@/components/PillBtnComponent.vue';

export default {
  data() {
    return {
      currentRoute: '',
      innerWidth: Number,
      searchValue: '',
      filteredValue: [],
    };
  },
  components: {
    PillBtnComponent,
  },
  computed: {
    ...mapState(frontStore, ['carts', 'cartlength', 'products', 'isLoading', 'fullPage', 'loginStatus']),
  },
  methods: {
    ...mapActions(frontStore, ['getCarts', 'getProducts', 'logout']),
    toggleMenu() {
      if (this.$route.path === '/products') {
        document.getElementById('expandMenu').classList.add('hidden');
      }
      const nav = this.$refs.mainNav;
      const attr = '-translate-x-[200%]';
      nav.classList.toggle(attr);
    },
    changeNavbg() {
      const {
        headerTop, header, mainLogo,
      } = this.$refs;
      let addClass = 'add';
      let removeClass = 'remove';
      let scrollTop = 200;
      if (this.$route.fullPath !== '/') {
        scrollTop = 50;
      }
      if (window.pageYOffset < scrollTop) {
        addClass = 'remove';
        removeClass = 'add';
      }
      headerTop.classList[addClass]('bg-fog-100');
      header.classList[removeClass]('bg-transparent');
      header.classList[addClass]('h-9', '-mt-1', 'md:h-12', 'md:-mt-3');
      header.classList[removeClass]('md:h-auto', 'md:-mt-0');
      mainLogo.classList[addClass]('h-10', 'md:h-14', 'flex', 'mt-auto');
      mainLogo.classList[removeClass]('h-12', 'md:h-21', 'flex-none');
    },
    toggleSearchBox(e) {
      const { searchButton, searchBox } = this.$refs;
      if (e.target === searchButton) {
        searchBox.classList.toggle('hidden');
      } else if (!searchBox.contains(e.target)) {
        searchBox.classList.add('hidden');
      }
      this.searchValue = '';
      this.filteredValue = [];
    },
    searchFilter: _.debounce(function filterSearch() {
      const value = this.searchValue;
      (async () => {
        await this.getProducts();
      })();
      this.filteredValue = this.products.filter((item) => item.title.includes(value));
    }, 500),
  },
  watch: {
    $route(n) {
      this.$router.push(n.fullPath);
      if (n.fullPath !== '/') {
        this.$refs.mainNav.classList.add('-translate-x-[200%]');
      }
    },
  },
  provide() {
    return {
      getMainNavRef: () => this.$refs.mainNav,
    };
  },
  mounted() {
    this.getCarts();
    window.addEventListener('scroll', this.changeNavbg);
    this.innerWidth = window.innerWidth;
    window.addEventListener('click', this.toggleSearchBox);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.changeNavbg);
    window.removeEventListener('click', this.toggleSearchBox);
  },
};
</script>
<template>
  <LoadingComponent />
  <div class="relative ">
    <!-- top news  -->
    <RouterLink to="/products" class="bg-primary py-1 fixed top-0 left-0 right-0 z-30 hover:opacity-60">
      <div class="container">
        <a href="#" class="text-sm  flex items-center justify-center text-dark">訂單金額 <span
            class="font-extrabold font-inter">NT$
            900</span>，即可享有免運服務
          <span class="material-symbols-outlined text-xl">
            chevron_right
          </span>
        </a>
      </div>
    </RouterLink>
    <!-- header  -->
    <div class="z-40 fixed top-0 left-0 right-0 mt-9" ref="headerTop">
      <div class="z-50 " ref="header">
        <div class="container ">
          <!-- nav  -->
          <header class="flex justify-between items-center px-6  md:px-0 ">
            <div class="flex items-center">
              <!-- burger -->
              <button type="button" class="mr-4 hover:opacity-70 md:hidden " @click="toggleMenu">
                <span class="material-symbols-sharp h-3 w-4.5">
                  menu
                </span>
              </button>
              <!-- logo  -->
              <a href="#" class="hover:opacity-70">
                <img src="../assets/images/Logo.svg" alt="遍地黃金logo" class=" my-3 w-auto h-12 md:h-21 lg:mr-7 "
                  ref="mainLogo">
              </a>
              <!-- menu  -->
              <nav
                class="absolute z-10  pt-3 shadow-lg2 top-0 left-0 bg-white w-[320px] min-h-screen -translate-x-[200%]  md:static md:translate-x-0 md:w-auto md:px-0 md:pt-0 md:bg-transparent md:min-h-0 md:shadow-none "
                ref="mainNav">
                <div class="pl-4.5 pr-7 flex justify-between items-center  md:hidden">
                  <h1 class="w-[140px] h-12 whitespace-nowrap overflow-hidden text-transparent">
                    <a href="#"
                      class="block   w-full h-full bg-[url('../assets/images/Logo.svg')] bg-cover bg-no-repeat ">All
                      aboute Golden Retrievers</a>
                  </h1>
                  <a href="#" @click.prevent="toggleMenu" class="hover:text-highlight">
                    <span class="material-symbols-sharp">
                      close
                    </span>
                  </a>
                </div>
                <ul class="text-fog-500 text-4.5 font-bold flex flex-col items-center md:flex-row md:gap-0  md:text-base">
                  <!-- dot  -->
                  <li
                    class="md:relative md:after:content-[''] md:after:absolute md:after:top-1/2 md:after:-translate-y/12 md:after:right-0 md:after:w-1 md:after:h-1 md:after:bg-secondary md:after:rounded-full md:px-4 lg:px-9">
                    <RouterLink to="/products" class=" block hover:opacity-70 py-8  md:py-2" @click="toggleMenu">
                      產品一覽
                    </RouterLink>
                  </li>
                  <li
                    class="md:relative md:after:content-[''] md:after:absolute md:after:top-1/2 md:after:-translate-y/12 md:after:right-0 md:after:w-1 md:after:h-1 md:after:bg-secondary md:after:rounded-full  md:px-4 lg:px-9">
                    <a href="#" class="block  hover:opacity-70 pt-6 pb-8 md:py-2">
                      黃金專欄
                    </a>
                  </li>
                  <li class="md:px-4 lg:px-9" v-if="loginStatus">
                    <RouterLink to="/user/orders/1" class="block over:opacity-70 py-8 md:py-2" @click="toggleMenu">
                      查詢訂單
                    </RouterLink>
                  </li>
                  <li class="md:hidden">
                    <RouterLink to="/" class="block over:opacity-70 py-8 md:py-2" v-if="loginStatus" @click="{logout();toggleMenu()}">登出</RouterLink>
                    <RouterLink to="/login" class="block  hover:opacity-70 py-8  md:py-2" @click="toggleMenu" v-else>
                      登入/註冊
                    </RouterLink>
                  </li>
                </ul>
              </nav>
            </div>
            <ul class="flex items-start">
              <li class="relative pr-4">
                <button type="button" class="md:px-2 hover:opacity-70" data-modal-target="crypto-modal" data-modal-toggle="crypto-modal">
                  <span class="material-symbols-outlined leading-none" ref="searchButton">
                    search
                  </span>
                </button>
                <div class="absolute bottom-0 right-0 translate-y-full hidden  bg-white py-6 "
                  ref="searchBox">
                    <input type="text"
                      class="mx-6 border-0 text-fog-400 bg-fog-100  placeholder:text-secondary  focus:border-0 focus:ring-secondary focus:outline-0  mb-4"
                      placeholder="想找什麼？" v-model="searchValue" @keyup="searchFilter">
                  <template v-if="filteredValue.length">
                    <!-- path: "/products/category/:category/product/:productid", -->
                    <ul>
                      <li v-for="value in filteredValue" :key="value.id" class="px-6 hover:text-highlight">
                        <RouterLink :to="`/products/category/${value.category}/product/${value.id}`"
                          class="block">{{ value.title }}</RouterLink>
                      </li>
                    </ul>
                  </template>
                </div>
              </li>
              <li class="hidden md:block ">
                <RouterLink to="/" class="flex items-center md:px-2  hover:opacity-70" v-if="loginStatus" @click="logout">
                  <span class="material-symbols-outlined leading-none">
                    person
                  </span>
                  <span class="font-bold texx-9xl">登出</span>
                </RouterLink>
                <RouterLink to="/login" class="flex items-center md:px-2  hover:opacity-70" v-else>
                  <span class="material-symbols-outlined leading-none">
                    person
                  </span>
                  <span class="font-bold texx-9xl">登入／註冊</span>
                </RouterLink>
              </li>
              <li class="">
                <RouterLink to="/user/carts" class="md:pl-2  hover:opacity-70">
                  <span class="material-symbols-outlined leading-none relative">
                    shopping_cart
                    <div
                      class="absolute top-0 right-0 -translate-y-1/3 translate-x-1/2 w-6 h-6 bg-dark rounded-full text-white flex justify-center items-center" v-if="loginStatus">
                      <p class="text-[8px] font-inter">
                        {{ cartlength }}
                      </p>
                    </div>
                  </span>
                </RouterLink>
              </li>
            </ul>
          </header>
        </div>
      </div>
    </div>
  </div>
  <!-- banner  -->
  <!--fixed top : 36+72 md:36+108  -->
  <div class="mt-[92px] md:mt-[144px]">
    <RouterView></RouterView>
  </div>
  <!-- footer  -->
  <footer class="mt-10 md:mt-20">
    <!-- 立即加入會員 -->
    <div
      class="py-6 px-13 bg-footerCtaBg-sm bg-100 bg-center bg-dark flex flex-col items-center">
      <div class="relative z-20">
        <h2 class="text-4.5 font-bold mb-6 text-white md:text-h2">
          超過<span class="text-primary text-h2 px-1 align-middle md:text-h1">90%</span>的顧客都選擇我們
          <br>
          您也值得擁有最優質的購物體驗！
        </h2>
        <div class="flex justify-center">
          <PillBtnComponent :dynamicPath="'/register'">
          立即加入會員
        </PillBtnComponent>
        </div>
      </div>
    </div>
    <!--  about / contact /  -->
    <section class="bg-fog-200 px-11 pt-8 pb-4">
      <div class="container">
        <ul class="text-h6 flex flex-col gap-y-6 items-center mb-6 md:flex-row md:justify-center md:gap-0">
          <li>
            <RouterLink to="/aboutUs" class="md:pr-6 md:border-r-2 md:border-r-fog-300 hover:opacity-70">關於我們</RouterLink>
          </li>
          <li>
            <RouterLink to="/contactUs" class="md:px-6 md:border-r-2 md:border-r-fog-300 hover:opacity-70">聯絡我們</RouterLink>
          </li>
          <li>
            <RouterLink to="/freight&refund" class="md:px-6 md:border-r-2 md:border-r-fog-300 hover:opacity-70">運費 / 退貨說明
            </RouterLink>
          </li>
          <li><RouterLink to="/privacy" class="md:pl-6 hover:opacity-70">私隱條款</RouterLink></li>
        </ul>
        <p class="text-fog-500 text-sm text-center">此網站僅做為前端 <span class="text-xs">Side
            Project</span> 作品練習，
          <br>不做商業用途，謝謝。
        </p>
      </div>
    </section>
  </footer>
</template>
