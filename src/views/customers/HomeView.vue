<script>
import frontStore from '@/stores/frontStore';
import { mapActions, mapState } from 'pinia';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import HeroComponent from '@/components/HeroComponent.vue';
import ProductListComponent from '@/components/ProductListComponent.vue';
import PillBtnComponent from '@/components/PillBtnComponent.vue';

gsap.registerPlugin(ScrollTrigger);
export default {
  data() {
    return {
      windowWidth: window.innerWidth,
    };
  },
  components: {
    HeroComponent,
    ProductListComponent,
    PillBtnComponent,
  },
  methods: {
    ...mapActions(frontStore, ['getProducts']),
  },
  computed: {
    ...mapState(frontStore, ['products', 'getNewProducts']),
  },
  mounted() {
    this.getProducts();
  },
};
</script>

<template>
  <main>
    <HeroComponent />
    <div class="container">
      <!-- 產品類別 -->
      <section class="mb-6">
        <h2 class="titleDash text-h4 text-center text-dark pb-5 mb-7">
          產品類別</h2>
        <!--path: "products/category/:category" -->
        <div class="px-6">
          <ul class=" grid grid-cols-6 md:mb-15">
            <li
              class="col-span-2 py-3 px-4 flex flex-col items-center  rounded-2.5xl hover:bg-primary hover:text-dark md:px-15 xl:col-span-1 mx-auto">
              <RouterLink to="products/category/配件配飾">
                <img src="@/assets/images/category-img/cat-asseccary.svg" alt="category icon" class="w-full"
                  data-aos="fade-down" data-aos-delay="300">
                <!-- data-aos="fade-up" -->
                <h3 class="text-lg whitespace-nowrap" data-aos="fade-up" data-aos-delay="300">配件配飾</h3>
              </RouterLink>
            </li>
            <li
              class="col-span-2 py-3 px-4 flex flex-col items-center  rounded-2.5xl hover:bg-primary hover:text-dark md:px-15 xl:col-span-1 mx-auto">
              <RouterLink to="products/category/居家配件">
                <img src="@/assets/images/category-img/cat-homeDecro.svg" alt="category icon" class="w-full"
                  data-aos="fade-down" data-aos-delay="300">
                <h3 class="text-lg whitespace-nowrap" data-aos="fade-up" data-aos-delay="300">居家配件</h3>
              </RouterLink>
            </li>
            <li
              class="col-span-2 py-3 px-4 flex flex-col items-center  rounded-2.5xl hover:bg-primary hover:text-dark md:px-15 xl:col-span-1 mx-auto">
              <RouterLink to="products/category/床上用品">
                <img src="@/assets/images/category-img/cat-bedding.svg" alt="category icon" class="w-full"
                  data-aos="fade-down" data-aos-delay="300">
                <h3 class="text-lg whitespace-nowrap" data-aos="fade-up" data-aos-delay="300">床上用品</h3>
              </RouterLink>
            </li>
            <li
              class="col-span-2 py-3 px-4 flex flex-col items-center  rounded-2.5xl hover:bg-primary hover:text-dark md:px-15 xl:col-span-1 mx-auto">
              <RouterLink to="products/category/科技配件">

                <img src="@/assets/images/category-img/cat-tech.svg" alt="category icon" class="w-full"
                  data-aos="fade-down" data-aos-delay="300">
                <h3 class="text-lg whitespace-nowrap" data-aos="fade-up" data-aos-delay="300">科技配件</h3>
              </RouterLink>
            </li>
            <li
              class="col-span-2 py-3 px-4 flex flex-col items-center  rounded-2.5xl hover:bg-primary hover:text-dark md:px-15 xl:col-span-1 mx-auto">
              <RouterLink to="products/category/衣物大全">
                <img src="@/assets/images/category-img/cat-clothing.svg" alt="category icon" class="w-full"
                  data-aos="fade-down" data-aos-delay="300">
                <h3 class="text-lg whitespace-nowrap" data-aos="fade-up" data-aos-delay="300">衣物大全</h3>
              </RouterLink>
            </li>
            <li
              class="col-span-2 py-3 px-4 flex flex-col items-center  rounded-2.5xl hover:bg-primary hover:text-dark md:px-15 xl:col-span-1 mx-auto">
              <RouterLink to="products/category/有狗亂入">
                <img src="@/assets/images/category-img/cat-petstuff.svg" alt="category icon" class="w-full"
                  data-aos="fade-down" data-aos-delay="300">
                <h3 class="text-lg whitespace-nowrap" data-aos="fade-up" data-aos-delay="300">有狗亂入</h3>
              </RouterLink>
            </li>
          </ul>
        </div>
      </section>
      <!-- 最新消息 -->
      <RouterLink to="/products" class="relative">
        <img src="@/assets/images/news/news-lg.svg" alt="news image" class="hidden w-full h-auto mb-6 md:mb-12  md:block"
          data-aos="fade-right" data-aos-delay="300">
        <img src="@/assets/images/news/news-sm.svg" alt="news image" class="block w-full h-auto mb-6 md:mb-12 md:hidden"
          data-aos="fade-right" data-aos-delay="300">
      </RouterLink>
      <section class="mb-6 md:mb-12">
        <h2 class="titleDash text-h4 text-center text-dark pb-5 mb-4">
          最新上架</h2>
        <ProductListComponent :products="getNewProducts" />
        <div class="flex justify-center">
          <PillBtnComponent :dynamicPath="'/products'">
            看更多產品
          </PillBtnComponent>
        </div>
      </section>
    </div>
    <!-- 全寬圖 -->
    <img src="@/assets/images/layout/dogAndHumanImg-sm.jpg" alt="dog image" class="md:hidden mb-14 w-full">
    <img src="@/assets/images/layout/dogAndHumanImg-lg.jpg" alt="human and dog image"
      class="hidden md:block mb-14 w-full">
    <div class="container">
      <!-- 我們願意承諾您 -->
      <section class="mb-12">
        <h2 class="titleDash text-h4 text-center text-dark pb-5 mb-4 ">
          我們願意承諾您</h2>
        <ul class="rounded-lg2 shadow-lg2 bg-white pt-8 pb-11 px-13 grid grid-cols-12 gap-y-9 md:gap-x-9 lg:gap-x-4">
          <li class="col-span-12 md:col-start-2 md:col-span-5 xl:col-start-0 xl:col-span-3" data-aos="fade-up-right"
            data-aos-delay="100">
            <img src="@/assets/images/promise-img/proImg1.svg" alt="dog image" class="mx-auto">
            <h4
              class="-translate-y-2/3 text-center bg-secondary text-white text-lg py-2 sm:px-10 rounded-lg2 whitespace-nowrap">
              分享生活實用好物</h4>
          </li>
          <li class="col-span-12 md:col-span-5 xl:col-span-3" data-aos="fade-up-left" data-aos-delay="100">
            <img src="@/assets/images/promise-img/proImg2.svg" alt="dog image" class="mx-auto">
            <h4
              class="-translate-y-2/3 text-center bg-secondary text-white text-lg py-2 sm:px-10 rounded-lg2 whitespace-nowrap">
              商品如實描述</h4>
          </li>
          <li class="col-span-12 md:col-start-2 md:col-span-5 xl:col-start-0 xl:col-span-3" data-aos="fade-up-right">
            <img src="@/assets/images/promise-img/proImg3.svg" alt="dog image" class="mx-auto">
            <h4 class="-translate-y-2/3 text-center bg-secondary text-white text-lg py-2 sm:px-10 rounded-lg2"> 滿 NT$ 900
              免運
            </h4>
          </li>
          <li class="col-span-12 md:col-span-5 xl:col-span-3" data-aos="fade-up-left">
            <img src="@/assets/images/promise-img/proImg4.svg" alt="dog image" class="mx-auto">
            <h4 class="-translate-y-2/3 text-center bg-secondary text-white text-lg py-2 sm:px-10 rounded-lg2"> 售後無憂有保障
            </h4>
          </li>
        </ul>
      </section>
      <!-- 顧客好評推薦 -->
      <section class="">
        <h2 class="titleDash text-h4 text-center text-dark pb-5 mb-7">
          顧客好評推薦</h2>
        <ul class="grid grid-cols-2 gap-4 md:gap-6">
          <li class="col-span-2 bg-white rounded-2.5xl pt-4 pb-6 px-3 shadow-lg2 lg:col-span-1 md:px-4 hover:opacity-70"
            data-aos="flip-up">
            <RouterLink to="/products/category/居家配件/product/-NR4OVodQaSel9f3YUEz" class="md:flex md:justify-start">
              <img src="@/assets/images/recommend-img/recomImg1.svg" alt="customer pic"
                class="w-24 h-24 rounded-full mx-auto mb-6 md:mr-6 md:mb-0 md:ml-0">
              <div>
                <h2 class="text-lg flex items-center justify-center mb-2 md:justify-start"><span
                    class="pr-4 border-r-2 border-r-fog-200 font-bold whitespace-nowrap">阿金</span> <span
                    class="text-fog-400 text-h6 ml-4">柚木底座黃金頭像刻畫</span></h2>
                <p class="text-sm text-dark">
                  非常滿意！雕刻技術非常精湛，顏色也非常漂亮。整體來說，這是一件非常精美的藝術品，值得收藏～實物比圖片更有質感！感覺值了～
                </p>
              </div>
            </RouterLink>
          </li>
          <li
            class="col-span-2 bg-white rounded-2.5xl pt-4 pb-6 px-3 shadow-lg2 lg:col-span-1 md:px-4 hover:opacity-70 md:flex md:justify-start"
            data-aos="flip-up">
            <RouterLink to="/products/category/科技配件/product/-NR3OicxXxWeJSTesceW" class="md:flex md:justify-start">
              <img src="@/assets/images/recommend-img/recomImg2.svg" alt="customer pic"
                class="w-24 h-24 rounded-full mx-auto mb-6 md:mr-6 md:mb-0 md:ml-0">
              <div>
                <h2 class="text-lg flex items-center justify-center mb-2 md:justify-start"><span
                    class="pr-4 border-r-2 border-r-fog-200 font-bold whitespace-nowrap">旺財媽媽</span> <span
                    class="text-fog-400 text-h6 ml-4">藝術風
                    iPhone 14 pro 手機殼</span></h2>
                <p class="text-sm text-dark">
                  對於藝術風iPhone 14 Pro手機殼給予高度評價。手機殼的設計非常獨特，充滿藝術感，而且質感也很好。此外，手機殼的保護性能也非常出色，可以有效保護手機不受損。
                </p>
              </div>
            </RouterLink>
          </li>
          <li class="col-span-2 bg-white rounded-2.5xl pt-4 pb-6 px-3 shadow-lg2 lg:col-span-1 md:px-4 hover:opacity-70"
            data-aos="flip-up">
            <RouterLink to="/products/category/居家配件/product/-NR3nAQiL9wk2cxJuPOs" class="md:flex md:justify-start">
              <img src="@/assets/images/recommend-img/recomImg3.svg" alt="customer pic"
                class="w-24 h-24 rounded-full mx-auto mb-6 md:mr-6 md:mb-0 md:ml-0">
              <div>
                <h2 class="text-lg flex items-center justify-center mb-2 md:justify-start"><span
                    class="pr-4 border-r-2 border-r-fog-200 font-bold whitespace-nowrap">麻糬爸爸</span> <span
                    class="text-fog-400 text-h6 ml-4">全人手繪畫黃金油畫</span></h2>
                <p class="text-sm text-dark">
                  油畫非常精美，色彩鮮豔，繪畫技巧精湛，能夠看出畫家花了很多時間和精力。這不僅僅是一件藝術品，更是一個擁有深刻意義的作品。雖然油畫沒有連框，但是絲毫不影響畫作的美感，非常滿意。
                </p>
              </div>
            </RouterLink>
          </li>
          <li class="col-span-2 bg-white rounded-2.5xl pt-4 pb-6 px-3 shadow-lg2 lg:col-span-1 md:px-4 hover:opacity-70"
            data-aos="flip-up">
            <RouterLink to="/products/category/配件配飾/product/-NPgGEI44BIK6eUHna2C" class="md:flex md:justify-start">
              <img src="@/assets/images/recommend-img/recomImg4.svg" alt="customer pic"
                class="w-24 h-24 rounded-full mx-auto mb-6 md:mr-6 md:mb-0 md:ml-0">
              <div>
                <h2 class="text-lg flex items-center justify-center mb-2 md:justify-start"><span
                    class="pr-4 border-r-2 border-r-fog-200 font-bold whitespace-nowrap">QQQ</span> <span
                    class="text-fog-400 text-h6 ml-4">簡約水彩黃金圖案購物袋</span></h2>
                <p class="text-sm text-dark">
                  讚讚讚，什麼都很好買欸。
                </p>
              </div>
            </RouterLink>
          </li>
          <li class="col-span-2 bg-white rounded-2.5xl pt-4 pb-6 px-3 shadow-lg2 lg:col-span-1 md:px-4 hover:opacity-70"
            data-aos="flip-up">
            <RouterLink to="/products/category/科技配件/product/-NR3nntTFRjRIB61p5Xm" class="md:flex md:justify-start">
              <img src="@/assets/images/recommend-img/recomImg5.svg" alt="customer pic"
                class="w-24 h-24 rounded-full mx-auto mb-6 md:mr-6 md:mb-0 md:ml-0">
              <div>
                <h2 class="text-lg flex items-center justify-center mb-2 md:justify-start"><span
                    class="pr-4 border-r-2 border-r-fog-200 font-bold whitespace-nowrap">索菲亞</span> <span
                    class="text-fog-400 text-h6 ml-4">華麗風格
                    iPhone 14 pro 手機殼</span></h2>
                <p class="text-sm text-dark">
                  還沒有養狗，但能夠擁有可愛黃金的產品也好滿足！
                </p>
              </div>
            </RouterLink>
          </li>
          <li class="col-span-2 bg-white rounded-2.5xl pt-4 pb-6 px-3 shadow-lg2 lg:col-span-1 md:px-4 hover:opacity-70"
            data-aos="flip-up">
            <RouterLink to="/products/category/衣物大全/product/-NR3pf06yXUiGU34qnwp" class="md:flex md:justify-start">
              <img src="@/assets/images/recommend-img/recomImg6.svg" alt="customer pic"
                class="w-24 h-24 rounded-full mx-auto mb-6 md:mr-6 md:mb-0 md:ml-0">
              <div>
                <h2 class="text-lg flex items-center justify-center mb-2 md:justify-start"><span
                    class="pr-4 border-r-2 border-r-fog-200 font-bold whitespace-nowrap">胖子</span> <span
                    class="text-fog-400 text-h6 ml-4">單一尺吋簡潔黃金全身T shirt</span></h2>
                <p class="text-sm text-dark">
                  感謝網站提供專業的意見，T shirt穿上好合適，讚
                </p>
              </div>
            </RouterLink>
          </li>
        </ul>
      </section>
    </div>
  </main>
</template>
