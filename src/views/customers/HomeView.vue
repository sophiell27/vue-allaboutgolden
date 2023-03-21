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


        this.$aos.init();
        console.log(this.windowWidth);
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
            <div class="px-6">
                <ul class="catList grid grid-cols-6 gap-y-6 md:mb-15 " ref="catList">
                    <li class="col-span-2 md:col-span-1 mx-auto">
                        <a href="">
                            <img src="../../assets/images/category-img/cat-asseccary.svg" alt="" class="categoryImg"
                                data-aos="fade-up">
                            <!-- data-aos="fade-up" -->
                            <h3 class="tesx-4.5">配件配飾</h3>
                        </a>
                    </li>
                    <li class="col-span-2 md:col-span-1 mx-auto">
                        <img src="../../assets/images/category-img/cat-homeDecro.svg" alt="" class="categoryImg"
                            data-aos="fade-up">
                        <h3 class="tesx-4.5">居家配件</h3>
                    </li>
                    <li class="col-span-2 md:col-span-1 mx-auto">
                        <img src="../../assets/images/category-img/cat-bedding.svg" alt="" class="categoryImg"
                            data-aos="fade-up">
                        <h3 class="tesx-4.5">床上用品</h3>
                    </li>
                    <li class="col-span-2 md:col-span-1 mx-auto">
                        <img src="../../assets/images/category-img/cat-tech.svg" alt="" class="categoryImg"
                            data-aos="fade-up">
                        <h3 class="tesx-4.5">科技配件</h3>
                    </li>
                    <li class="col-span-2 md:col-span-1 mx-auto">
                        <img src="../../assets/images/category-img//cat-clothing.svg" alt="" class="categoryImg"
                            data-aos="fade-up">
                        <h3 class="tesx-4.5">衣物大全</h3>
                    </li>
                    <li class="col-span-2 md:col-span-1 mx-auto">
                        <a href="" class="">
                            <img src="../../assets/images/category-img/cat-petstuff.svg" alt="" class="categoryImg"
                                data-aos="fade-up">
                            <h3 class="tesx-4.5">有狗亂入</h3>
                        </a>
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
            <ul class="flex flex-col gap-y-4 md:flex-row md:flex-wrap md:justify-center md:gap-6">
                <li class="bg-white rounded-2.5xl pt-4 pb-6 px-3 shadow-lg2 md:w-[48%] md:px-4 md:flex">
                    <img src="../../assets/images/recommend-img/recomImg1.svg" alt=""
                        class="w-24 h-24 rounded-full mx-auto mb-6 md:mr-6 md:mb-0">
                    <div>
                        <h2 class="text-4.5 flex items-center justify-center mb-2"><span
                                class="pr-4 border-r-2 border-r-fog-200 font-bold">阿金</span> <span
                                class="text-fog-400 text-h6 ml-4">玩具破壞王</span></h2>
                        <p class="text-sm text-dark">
                            阿金很喜歡玩具，但是有些玩具卻很容易被破壞，讓我很困擾。現在有些新買的玩具，經過了嚴格的品質檢測，使用的材料也更加堅固耐用，不怕被狗狗破壞。
                        </p>
                    </div>
                </li>
                <li class="bg-white rounded-2.5xl pt-4 pb-6 px-3 shadow-lg2 md:w-[48%] md:px-4 md:flex">
                    <img src="../../assets/images/recommend-img/recomImg1.svg" alt=""
                        class="w-24 h-24 rounded-full mx-auto mb-6 md:mr-6 md:mb-0">
                    <div>
                        <h2 class="text-4.5 flex items-center justify-center mb-2"><span
                                class="pr-4 border-r-2 border-r-fog-200 font-bold">阿金</span> <span
                                class="text-fog-400 text-h6 ml-4">玩具破壞王</span></h2>
                        <p class="text-sm text-dark">
                            阿金很喜歡玩具，但是有些玩具卻很容易被破壞，讓我很困擾。現在有些新買的玩具，經過了嚴格的品質檢測，使用的材料也更加堅固耐用，不怕被狗狗破壞。
                        </p>
                    </div>
                </li>
                <li class="bg-white rounded-2.5xl pt-4 pb-6 px-3 shadow-lg2 md:w-[48%] md:px-4 md:flex">
                    <img src="../../assets/images/recommend-img/recomImg1.svg" alt=""
                        class="w-24 h-24 rounded-full mx-auto mb-6 md:mr-6 md:mb-0">
                    <div>
                        <h2 class="text-4.5 flex items-center justify-center mb-2"><span
                                class="pr-4 border-r-2 border-r-fog-200 font-bold">阿金</span> <span
                                class="text-fog-400 text-h6 ml-4">玩具破壞王</span></h2>
                        <p class="text-sm text-dark">
                            阿金很喜歡玩具，但是有些玩具卻很容易被破壞，讓我很困擾。現在有些新買的玩具，經過了嚴格的品質檢測，使用的材料也更加堅固耐用，不怕被狗狗破壞。
                        </p>
                    </div>
                </li>
                <li class="bg-white rounded-2.5xl pt-4 pb-6 px-3 shadow-lg2 md:w-[48%] md:px-4 md:flex">
                    <img src="../../assets/images/recommend-img/recomImg1.svg" alt=""
                        class="w-24 h-24 rounded-full mx-auto mb-6 md:mr-6 md:mb-0">
                    <div>
                        <h2 class="text-4.5 flex items-center justify-center mb-2"><span
                                class="pr-4 border-r-2 border-r-fog-200 font-bold">阿金</span> <span
                                class="text-fog-400 text-h6 ml-4">玩具破壞王</span></h2>
                        <p class="text-sm text-dark">
                            阿金很喜歡玩具，但是有些玩具卻很容易被破壞，讓我很困擾。現在有些新買的玩具，經過了嚴格的品質檢測，使用的材料也更加堅固耐用，不怕被狗狗破壞。
                        </p>
                    </div>
                </li>
                <li class="bg-white rounded-2.5xl pt-4 pb-6 px-3 shadow-lg2 md:w-[48%] md:px-4 md:flex">
                    <img src="../../assets/images/recommend-img/recomImg1.svg" alt=""
                        class="w-24 h-24 rounded-full mx-auto mb-6 md:mr-6 md:mb-0">
                    <div>
                        <h2 class="text-4.5 flex items-center justify-center mb-2"><span
                                class="pr-4 border-r-2 border-r-fog-200 font-bold">阿金</span> <span
                                class="text-fog-400 text-h6 ml-4">玩具破壞王</span></h2>
                        <p class="text-sm text-dark">
                            阿金很喜歡玩具，但是有些玩具卻很容易被破壞，讓我很困擾。現在有些新買的玩具，經過了嚴格的品質檢測，使用的材料也更加堅固耐用，不怕被狗狗破壞。
                        </p>
                    </div>
                </li>
                <li class="bg-white rounded-2.5xl pt-4 pb-6 px-3 shadow-lg2 md:w-[48%] md:px-4 md:flex">
                    <img src="../../assets/images/recommend-img/recomImg1.svg" alt=""
                        class="w-24 h-24 rounded-full mx-auto mb-6 md:mr-6 md:mb-0">
                    <div>
                        <h2 class="text-4.5 flex items-center justify-center mb-2"><span
                                class="pr-4 border-r-2 border-r-fog-200 font-bold">阿金</span> <span
                                class="text-fog-400 text-h6 ml-4">玩具破壞王</span></h2>
                        <p class="text-sm text-dark">
                            阿金很喜歡玩具，但是有些玩具卻很容易被破壞，讓我很困擾。現在有些新買的玩具，經過了嚴格的品質檢測，使用的材料也更加堅固耐用，不怕被狗狗破壞。
                        </p>
                    </div>
                </li>
        </ul>
    </div>

</div></template>