<script>

import { gsap, Power2 } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
// import { AOS } from 'aos';

import HeroComponent from '../../components/HeroComponent.vue';
import NewProductsComponent from '../../components/NewProductsComponent.vue';
export default {
    data() {
        return {
            windowWidth: window.innerWidth
        }
    },
    components: {
        HeroComponent,
        NewProductsComponent
    },
    methods: {
        // gsapanimate() {
        //     console.log(this.$refs.catList);
        //     this.act1 = this.$gsap.from(".categoryImg", { y: -50, opacity: 0, stagger: 0.3, delay: 2 });

        //     // const act2 = this.$gsap.from(".dog", { x:200});

        //     ScrollTrigger.batch([".catList"], {
        //         start: "top 80%",
        //         once: false,
        //         // end:"bottom",
        //         onEnter: batch => {
        //             // 分別對應不同的 tween
        //             batch.forEach((el, i) => {
        //                 switch (i) {
        //                     case 0:
        //                         this.act1.play();
        //                         break;
        //                     // case 1:
        //                     //     act2.play();
        //                     //     break;
        //                 }
        //             });
        //         },
        //     })
        // }
    },
    mounted() {
        // window.addEventListener('scroll', ScrollTrigger.update);
        // this.gsapanimate();
        // ScrollTrigger.refresh()

        // this.act1 = this.$gsap.from(".categoryImg", { y: -50, opacity: 0, stagger: 0.3, delay: 2 });

        // const act2 = this.$gsap.from(".dog", { x:200});

        // ScrollTrigger.batch([".catList"], {
        //     start: "top 80%",
        //     once: false,
        //     // end:"bottom",
        //     onEnter: batch => {
        //         // 分別對應不同的 tween
        //         batch.forEach((el, i) => {
        //             switch (i) {
        //                 case 0:
        //                     this.act1.play();
        //                     break;
        //                 // case 1:
        //                 //     act2.play();
        //                 //     break;
        //             }
        //         });
        //     },
        // })


        // this.$aos.init();
        // console.log(this.windowWidth);
    },


}

</script>

<template>
    <HeroComponent></HeroComponent>
    <div class="container">
        <!-- 產品類別 -->
        <div class="mb-6">
            <h2 class="text-h4 text-center pb-4 mb-8 relative after:content-[''] after:absolute after:-bottom-1  after:left-0 after:right-0 after:mx-auto after:w-8 after:h-1 after:bg-primary
                                                                md:mb-10">
                產品類別</h2>
                <!--path: "products/category/:category" -->
            <div class="px-6">
                <ul class="catList grid grid-cols-6 md:mb-15 " ref="catList">
                    <li class="col-span-2 py-3 px-7  rounded-2.5xl hover:bg-primary hover:text-dark md:px-15 xl:col-span-1 mx-auto">
                        <RouterLink to="products/category/配件配飾">
                            <img src="../../assets/images/category-img/cat-asseccary.svg" alt="" class="categoryImg"
                                data-aos="fade-up">
                            <!-- data-aos="fade-up" -->
                            <h3 class="text-4.5">配件配飾</h3>
                        </RouterLink>
                    </li>
                    <li class="col-span-2 py-3 px-7  rounded-2.5xl hover:bg-primary hover:text-dark md:px-15 xl:col-span-1 mx-auto">
                        <RouterLink to="products/category/居家配件">
                        <img src="../../assets/images/category-img/cat-homeDecro.svg" alt="" class="categoryImg"
                            data-aos="fade-up">
                        <h3 class="text-4.5">居家配件</h3>
                    </RouterLink>
                    </li>
                    <li class="col-span-2 py-3 px-7  rounded-2.5xl hover:bg-primary hover:text-dark md:px-15 xl:col-span-1 mx-auto">
                        <RouterLink to="products/category/床上用品">
                        <img src="../../assets/images/category-img/cat-bedding.svg" alt="" class="categoryImg"
                            data-aos="fade-up">
                        <h3 class="text-4.5">床上用品</h3>
                    </RouterLink>
                    </li>
                    <li class="col-span-2 py-3 px-7  rounded-2.5xl hover:bg-primary hover:text-dark md:px-15 xl:col-span-1 mx-auto">
                        <RouterLink to="products/category/科技配件">

                        <img src="../../assets/images/category-img/cat-tech.svg" alt="" class="categoryImg"
                            data-aos="fade-up">
                        <h3 class="text-4.5">科技配件</h3>
                    </RouterLink>
                    </li>
                    <li class="col-span-2 py-3 px-7  rounded-2.5xl hover:bg-primary hover:text-dark md:px-15 xl:col-span-1 mx-auto">
                        <RouterLink to="products/category/衣物大全">
                        <img src="../../assets/images/category-img/cat-clothing.svg" alt="" class="categoryImg"
                            data-aos="fade-up">
                        <h3 class="text-4.5">衣物大全</h3>
                    </RouterLink>
                    </li>
                    <li class="col-span-2 py-3 px-7  rounded-2.5xl hover:bg-primary hover:text-dark md:px-15 xl:col-span-1 mx-auto">
                            <RouterLink to="products/category/有狗亂入">
                            <img src="../../assets/images/category-img/cat-petstuff.svg" alt="" class="categoryImg"
                                data-aos="fade-up">
                            <h3 class="tesx-4.5">有狗亂入</h3>
                        </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
        <!-- 最新消息 -->
        <div class="mb-6 md:mb-12">
            <!-- <img :src="windowWidth>768? '../../assets/images/news/news-lg.svg' : '../../assets/images/news/news-sm.svg'" alt="" class="w-full"> -->
            <template v-if="windowWidth < 768">
                <img src="../../assets/images/news/news-lg.svg" alt="" class="w-full h-auto "></template>
            <template v-else>
                <img src="../../assets/images/news/news-sm.svg" alt="" class="w-full h-auto ">
            </template>
        </div>
        <div class="mb-6 md:mb-12">
            <h2 class="text-h4 text-center pb-4 mb-5 relative after:content-[''] after:absolute after:-bottom-1  after:left-0 after:right-0 after:mx-auto after:w-8 after:h-1 after:bg-primary
                                                                    md:mb-7">
                最新上架</h2>
            <NewProductsComponent></NewProductsComponent>
        </div>

    </div>

    <!-- 全寬圖 -->
    <img src="../../assets/images/layout/dogAndHumanImg-sm.jpg" alt="" class="md:hidden mb-14 w-full">
    <img src="../../assets/images/layout/dogAndHumanImg-lg.jpg" alt="" class="hidden md:block mb-14 w-full">


    <div class="container">
        <!-- 我們願意承諾您 -->
        <div class="mb-12 md:mb-24">
            <h2 class=" text-h4 text-center pb-4 mb-5 relative after:content-[''] after:absolute after:-bottom-1  after:left-0 after:right-0 after:mx-auto after:w-8 after:h-1 after:bg-primary
                                                        md:mb-7">
                我們願意承諾您</h2>
            <ul class="py-8 px-13 bg-white rounded-2.5xl shadow-lg2 text-4.5 flex flex-col gap-y-9
                                                    md:pb-11 md:px-8 md:flex-row md:gap-12 md:flex-wrap md:justify-center lg:px-40 
                                                    xl:px-8 xl:flex-nowrap lg:gap-x-[88px]">
                <li class="">
                    <img src="../../assets/images/promise-img/proImg1.svg" alt="" class="mx-auto">
                    <button type="button"
                        class="py-2 px-12 bg-secondary rounded-lg2 text-white flex mx-auto -mt-6 z-10 relative">商品如實描述</button>
                </li>
                <li class="">
                    <img src="../../assets/images/promise-img/proImg2.svg" alt="" class="mx-auto">
                    <button type="button"
                        class="py-2 px-12 bg-secondary rounded-lg2 text-white flex mx-auto -mt-6 z-10 relative items-baseline">滿
                        <span class="font-['cwTeXYen'] font-bold px-1"> NT$
                            900 </span> 免運</button>
                </li>
                <li class="">
                    <img src="../../assets/images/promise-img/proImg3.svg" alt="" class="mx-auto">
                    <button type="button"
                        class="py-2 px-12 bg-secondary rounded-lg2 text-white flex mx-auto -mt-6 z-10 relative">售後無憂有保障</button>
                </li>
                <li class="">
                    <img src="../../assets/images/promise-img/proImg4.svg" alt="" class="mx-auto">
                    <button type="button"
                        class="py-2 px-12 bg-secondary rounded-lg2 text-white flex mx-auto -mt-6 z-10 relative">分享生活實用好物</button>
                </li>
            </ul>
        </div>
        <!-- 顧客好評推薦 -->
        <div class="">
            <h2 class="text-h4 text-center pb-4 mb-5 relative after:content-[''] after:absolute after:-bottom-1  after:left-0 after:right-0 after:mx-auto after:w-8 after:h-1 after:bg-primary
                                                        md:mb-7">
                顧客好評推薦</h2>
            <ul class="grid grid-cols-2 gap-4 md:gap-6">
                <li class="col-span-2 bg-white rounded-2.5xl pt-4 pb-6 px-3 shadow-lg2 lg:col-span-1 md:px-4 md:flex md:justify-start">
                    <img src="../../assets/images/recommend-img/recomImg1.svg" alt=""
                        class="w-24 h-24 rounded-full mx-auto mb-6 md:mr-6 md:mb-0 md:ml-0">
                    <div>
                        <h2 class="text-4.5 flex items-center justify-center mb-2 md:justify-start"><span
                                class="pr-4 border-r-2 border-r-fog-200 font-bold">阿金</span> <span
                                class="text-fog-400 text-h6 ml-4">柚木底座黃金頭像刻畫</span></h2>
                        <p class="text-sm text-dark">
                            非常滿意！雕刻技術非常精湛，顏色也非常漂亮。整體來說，這是一件非常精美的藝術品，值得收藏～實物比圖片更有質感！感覺值了～
                        </p>
                    </div>
                </li>
                <li class="col-span-2 bg-white rounded-2.5xl pt-4 pb-6 px-3 shadow-lg2 lg:col-span-1 md:px-4 md:flex md:justify-start">
                    <img src="../../assets/images/recommend-img/recomImg2.svg" alt=""
                        class="w-24 h-24 rounded-full mx-auto mb-6 md:mr-6 md:mb-0 md:ml-0">
                    <div>
                        <h2 class="text-4.5 flex items-center justify-center mb-2 md:justify-start"><span
                                class="pr-4 border-r-2 border-r-fog-200 font-bold">旺財媽媽</span> <span
                                class="text-fog-400 text-h6 ml-4">藝術風 iPhone 14 pro 手機殼</span></h2>
                        <p class="text-sm text-dark">
                            對於藝術風iPhone 14 Pro手機殼給予高度評價。手機殼的設計非常獨特，充滿藝術感，而且質感也很好。此外，手機殼的保護性能也非常出色，可以有效保護手機不受損。
                        </p>
                    </div>
                </li>
                <li class="col-span-2 bg-white rounded-2.5xl pt-4 pb-6 px-3 shadow-lg2 lg:col-span-1 md:px-4 md:flex md:justify-start">
                    <img src="../../assets/images/recommend-img/recomImg3.svg" alt=""
                        class="w-24 h-24 rounded-full mx-auto mb-6 md:mr-6 md:mb-0 md:ml-0">
                    <div>
                        <h2 class="text-4.5 flex items-center justify-center mb-2 md:justify-start"><span
                                class="pr-4 border-r-2 border-r-fog-200 font-bold">麻糬爸爸</span> <span
                                class="text-fog-400 text-h6 ml-4">全人手繪畫黃金油畫</span></h2>
                        <p class="text-sm text-dark">
                            油畫非常精美，色彩鮮豔，繪畫技巧精湛，能夠看出畫家花了很多時間和精力。這不僅僅是一件藝術品，更是一個擁有深刻意義的作品。雖然油畫沒有連框，但是絲毫不影響畫作的美感，非常滿意。
                        </p>
                    </div>
                </li>
                <li class="col-span-2 bg-white rounded-2.5xl pt-4 pb-6 px-3 shadow-lg2 lg:col-span-1 md:px-4 md:flex md:justify-start">
                    <img src="../../assets/images/recommend-img/recomImg4.svg" alt=""
                        class="w-24 h-24 rounded-full mx-auto mb-6 md:mr-6 md:mb-0 md:ml-0">
                    <div>
                        <h2 class="text-4.5 flex items-center justify-center mb-2 md:justify-start"><span
                                class="pr-4 border-r-2 border-r-fog-200 font-bold">QQQ</span> <span
                                class="text-fog-400 text-h6 ml-4">簡約水彩黃金圖案購物袋</span></h2>
                        <p class="text-sm text-dark">
                            讚讚讚，什麼都很好買欸。
                        </p>
                    </div>
                </li>
                <li class="col-span-2 bg-white rounded-2.5xl pt-4 pb-6 px-3 shadow-lg2 lg:col-span-1 md:px-4 md:flex md:justify-start">
                    <img src="../../assets/images/recommend-img/recomImg5.svg" alt=""
                        class="w-24 h-24 rounded-full mx-auto mb-6 md:mr-6 md:mb-0 md:ml-0">
                    <div>
                        <h2 class="text-4.5 flex items-center justify-center mb-2 md:justify-start"><span
                                class="pr-4 border-r-2 border-r-fog-200 font-bold">索菲亞</span> <span
                                class="text-fog-400 text-h6 ml-4">華麗風格 iPhone 14 pro 手機殼</span></h2>
                        <p class="text-sm text-dark">
                            還沒有養狗，但能夠擁有可愛黃金的產品也好滿足！
                        </p>
                    </div>
                </li>
                <li class="col-span-2 bg-white rounded-2.5xl pt-4 pb-6 px-3 shadow-lg2 lg:col-span-1 md:px-4 md:flex md:justify-start">
                    <img src="../../assets/images/recommend-img/recomImg6.svg" alt=""
                        class="w-24 h-24 rounded-full mx-auto mb-6 md:mr-6 md:mb-0 md:ml-0">
                    <div>
                        <h2 class="text-4.5 flex items-center justify-center mb-2 md:justify-start"><span
                                class="pr-4 border-r-2 border-r-fog-200 font-bold">胖子</span> <span
                                class="text-fog-400 text-h6 ml-4">單一尺吋簡潔黃金全身T shirt</span></h2>
                        <p class="text-sm text-dark">
                            感謝網站提供專業的意見，T shirt穿上好合適，讚
                        </p>
                    </div>
                </li>
        </ul>
    </div>

</div></template>