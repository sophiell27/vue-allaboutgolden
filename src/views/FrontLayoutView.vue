<script>
import frontStore from '@/stores/frontStore';
import { mapActions, mapState } from 'pinia';
import PillBtnComponent from '@/components/PillBtnComponent.vue';
import CategoryMenuCompoent from '@/components/CategoryMenuCompoent.vue';
import SearchModal from '@/components/SearchModal.vue';

export default {
  data() {
    return {};
  },
  components: {
    PillBtnComponent,
    SearchModal,
    CategoryMenuCompoent,
  },
  computed: {
    ...mapState(frontStore, ['cartlength', 'products', 'isLoading', 'fullPage', 'loginStatus']),
  },
  methods: {
    ...mapActions(frontStore, ['getCarts', 'getProducts', 'logout']),
    toggleBurger() {
      const el = this.$refs.mainOverlay;
      el.classList.toggle('hidden');
    },
    clickMainOverlay(e) {
      if (e.target === this.$refs.mainOverlay) {
        this.toggleBurger();
      }
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
      header.classList[addClass]('h-12', '-mt-1', 'md:h-14', 'md:-mt-5');
      header.classList[removeClass]('md:h-auto', 'md:-mt-0');
      mainLogo.classList[addClass]('h-10', 'md:h-14', 'flex', 'mt-auto', 'md:w-38');
      mainLogo.classList[removeClass]('h-12', 'md:h-21', 'flex-none', 'md:w-60');
    },
    showSearchModal() {
      this.$refs.searchModal.showSearchModal();
    },
  },
  mounted() {
    this.getCarts();
    window.addEventListener('scroll', this.changeNavbg);
    window.addEventListener('click', this.clickMainOverlay);
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.changeNavbg);
    window.removeEventListener('click', this.clickMainOverlay);
  },
};
</script>
<template>
  <LoadingComponent v-model:active="isLoading" :can-cancel="true" :is-full-page="fullPage" />
  <div class="min-h-screen flex flex-col justify-start">
    <SearchModal ref="searchModal" />
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
                <button type="button" class="mr-4 hover:text-highlight md:hidden " @click="toggleBurger">
                  <span class="material-symbols-sharp h-3 w-4.5">
                    menu
                  </span>
                </button>
                <h1 class="my-3 ">
                  <a href="#"
                    class="block w-[130px] h-12 whitespace-nowrap overflow-hidden indent-[101%] bg-logo bg-no-repeat bg-contain text-transparent md:w-60 md:h-21 flex-none hover:opacity-70"
                    ref="mainLogo">遍地黃金</a>
                </h1>
                <!-- nav  -->
                <div
                  class="hidden absolute top-0 bottom-0 left-0 right-0 z-50 bg-dark/10 w-full h-screen md:static md:bg-transparent md:block md:h-auto md:w-auto"
                  ref="mainOverlay">
                  <nav
                    class="top-7 left-0 text-lg font-bold text-fog-500 bg-white pl-4 pr-6 pt-3 w-3/4 h-screen md:block md:w-auto md:h-auto md:pt-0 md:bg-transparent"
                    id="nav" ref="burgerNav">
                    <div class="flex justify-between items-center mb-2 md:hidden">
                      <img src="@/assets/images/Logo.svg" alt="logo" class="h-12 w-[130px]">
                      <button type="button" class="material-symbols-outlined" @click="toggleBurger">
                        close
                      </button>
                    </div>
                    <ul class="flex flex-col items-center md:flex-row">
                      <li
                        class="group hover:text-highlight  md:relative md:after:content-[''] md:after:absolute md:after:top-1/2 md:after:-translate-y/12 md:after:right-0 md:after:w-1 md:after:h-1 md:after:bg-secondary md:after:rounded-full md:px-4 lg:px-9">
                        <RouterLink to="/products" class="block py-4 md:py-1" @click="toggleBurger">產品一覽</RouterLink>
                        <div class="hidden group-hover:block md:absolute">
                          <CategoryMenuCompoent @toggle-menu="toggleBurger" />
                        </div>
                      </li>
                      <!-- <li class="block py-4  md:py-1 hover:opacity-70 md:relative md:after:content-[''] md:after:absolute md:after:top-1/2 md:after:-translate-y/12 md:after:right-0 md:after:w-1 md:after:h-1 md:after:bg-secondary md:after:rounded-full
                         md:px-4 lg:px-9" ><a href="" @click.prevent="toggleBurger">黃金專欄</a></li> -->
                      <li class="block py-4  md:py-1 hover:text-highlight  px-4 lg:px-9" v-if="loginStatus">
                        <RouterLink to="/user/orders/1" @click.prevent="toggleBurger">查詢訂單</RouterLink>
                      </li>
                      <li class="block py-4  md:py-1 hover:text-highlight md:hidden">
                        <RouterLink to="/login" @click.prevent="toggleBurger" v-if="!loginStatus">登入 / 註冊</RouterLink>
                        <a href="#" @click.prevent="toggleBurger" @click="logout" v-else>登出</a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <ul class="flex items-start">
                <li class="relative pr-4">
                  <button type="button" class=" hover:text-highlight material-symbols-outlined hover:scale-110"
                    ref="searchButton" @click="showSearchModal">
                    search
                  </button>
                </li>
                <li class="hidden md:block md:pr-4 hover:text-highlight ">
                  <RouterLink to="/" class="flex items-center " v-if="loginStatus" @click="logout">
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
                <li class="hover:-rotate-12 hover:text-highlight ">
                  <RouterLink to="/user/carts" class="md:pl-2  hover:opacity-70 ">
                    <span class="material-symbols-outlined leading-none relative">
                      shopping_cart
                      <div
                        class="absolute top-0 right-0 -translate-y-1/3 translate-x-1/2 w-6 h-6 bg-dark rounded-full text-white flex justify-center items-center"
                        v-if="loginStatus">
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
    <div class="mt-[92px] md:mt-[144px] overflow-hidden">
      <RouterView></RouterView>
    </div>
    <!-- footer  -->
    <footer class="mt-auto">
      <!-- 立即加入會員 -->
      <div class="mt-10 md:mt-20 py-6 px-13 bg-footerCtaBg-sm bg-100 bg-center bg-dark flex flex-col items-center">
        <div class="relative z-20">
          <h2 class="text-4.5 font-bold mb-6 text-white md:text-h2">
            超過<span class="text-primary text-h2 px-1 align-middle md:text-h1">90%</span>的顧客都選擇我們
            <br>
            您也值得擁有最優質的購物體驗！
          </h2>
          <div class="flex justify-center">
            <PillBtnComponent :dynamicPath="'/register'">
              <span data-aos="flip-down" data-aos-delay="300">立即加入會員</span>
            </PillBtnComponent>
          </div>
        </div>
      </div>
      <!--  about / contact /  -->
      <section class="bg-fog-200 px-11 pt-8 pb-4">
        <div class="container">
          <ul class="text-h6 flex flex-col gap-y-6 items-center mb-6 md:flex-row md:justify-center md:gap-0">
            <li>
              <RouterLink to="/aboutUs" class="md:pr-6 md:border-r-2 md:border-r-fog-300 hover:opacity-70">關於我們
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/contactUs" class="md:px-6 md:border-r-2 md:border-r-fog-300 hover:opacity-70">聯絡我們
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/freight&refund" class="md:px-6 md:border-r-2 md:border-r-fog-300 hover:opacity-70">運費 /
                退貨說明
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/privacy" class="md:pl-6 hover:opacity-70">私隱條款</RouterLink>
            </li>
          </ul>
          <p class="text-fog-500 text-sm text-center">此網站僅做為前端 <span class="text-xs">Side
              Project</span> 作品練習，
            <br>不做商業用途，謝謝。
          </p>
        </div>
      </section>
    </footer>
  </div>
</template>
