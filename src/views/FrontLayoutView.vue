<script>
import { RouterLink, RouterView } from 'vue-router';
import HeroComponent from '../components/HeroComponent.vue';
import FrontStore from '../stores/FrontStore.js';
import { mapActions, mapState } from 'pinia';
export default {
    data() {
        return {
           currentRoute: "",
           
        }
    },
    watch: {
        cartlength(n,o){
            console.log(n);
        }
    },
    components: {
        HeroComponent,
    },
    computed: {
        ...mapState(FrontStore, ["carts", "cartlength"])
    },
    methods: {
        ...mapActions(FrontStore, ["getCarts"]),
        changePath(newPath){
            this.currentRoute = newPath
        },
        toggleMenu() {
            const nav = this.$refs.mainNav
            const attr = "-translate-x-[200%]"
            nav.classList.contains(attr) ?
                nav.classList.remove(attr) :
                nav.classList.add(attr)
        },
    },
    watch: {
        $route(n,o){
            // console.log(n.fullPath);
            this.changePath(n.fullPath)
            // console.log(this.currentRoute != '/');
        },
        // currentRoute(n,o){
        //     console.log(n);
        //     console.log(this.$route.fullPath);
        // }
    },
    mounted() {
        this.changePath(this.$route.fullPath)
        this.getCarts();
    }
}
</script>

<template>
    <!-- top news  -->
    <div class="bg-primary py-1">
<RouterLink to="/products">
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
        
    </div>
    <div class=" bg-transparent z-10 relative"
        :class="{ 'bg-hero-pattern-sm md:banner-lg bg-cover shadow-lg2':  currentRoute !== '/' }">
        <div class="container ">
           
            <!-- nav  -->
            <div class="flex justify-between items-center px-6 pt-3 mb-9 md:px-0 xl:mb-20">
                <div class="flex items-center">
                    <!-- burger -->
                    <a href="#" class="mr-4 md:hidden" @click="toggleMenu">
                        <span class="material-symbols-sharp h-3 w-4.5">
                            menu
                        </span>
                    </a>
                    <!-- logo  -->
                    <a href="#" class="">
                        <img src="../assets/images/Logo.svg" alt="遍地黃金logo" class="h-12 w-auto md:h-full lg:mr-7">
                    </a>
                    <!-- nav  -->
                    <nav class="absolute z-10 pl-4.5 pr-7 pt-3 shadow-lg2 top-0 left-0 bg-white w-[320px] min-h-screen -translate-x-[200%]  
                                                                                        md:static md:translate-x-0 md:w-auto md:px-0 md:bg-transparent md:min-h-0 md:shadow-none md:py-10"
                        ref="mainNav">
                        <div class="flex justify-between items-center mb-6 md:hidden">
                            <img src="../assets/images/Logo.svg" alt="遍地黃金logo" class="h-12 w-auto">
                            <a href="#" @click="toggleMenu">
                                <span class="material-symbols-sharp">
                                    close
                                </span>
                            </a>
                        </div>
                        <ul
                            class="text-fog-500 text-4.5 font-bold flex flex-col gap-8 items-center 
                                                                                            md:flex-row md:gap-0 md:text-base">
                            <li class="
                                                                                                md:relative md:after:content-[''] md:after:absolute md:after:top-1/2 md:after:-translate-y/12 md:after:right-0 md:after:w-1 md:after:h-1 md:after:bg-secondary md:after:rounded-full 
                                                                                                md:px-4 lg:px-9">
                                <RouterLink to="/products"  class=" flex flex-col items-center ">
                                    產品一覽
                                    <span class="text-sm text-fog-400 font-extrabold">Item</span>
                                </RouterLink>
                            </li>

                            <li class="
                                                                                            md:relative md:after:content-[''] md:after:absolute md:after:top-1/2 md:after:-translate-y/12 md:after:right-0 md:after:w-1 md:after:h-1 md:after:bg-secondary md:after:rounded-full 
                                                                                            md:px-4 lg:px-9">
                                <a href="#" class=" flex flex-col items-center ">
                                    黃金專欄
                                    <span class="text-sm text-fog-400 font-extrabold">Blog</span>
                                </a>
                            </li>

                            <li class="
                                                                                                md:px-4 lg:px-9">
                                <RouterLink to="/orders" class=" flex flex-col items-center ">
                                    查詢訂單
                                    <span class="text-sm text-fog-400 font-extrabold">Order</span>
                                </RouterLink>
                            </li>

                            <li class="md:hidden">
                                <RouterLink to="/admin/login" class=" flex flex-col items-center ">
                                    登入/註冊
                                    <span class="text-sm text-fog-400 font-extrabold">Sign in</span>
                                </RouterLink>
                            </li>
                        </ul>
                    </nav>
                </div>
                <ul class="flex items-start">
                    <li>
                        <a href="" class="md:pr-1 lg:pr-2">
                            <span class="material-symbols-outlined leading-none">
                                search
                            </span>
                        </a>
                    </li>
                    <li class="hidden md:block md:px-1 lg:px-2">
                        <RouterLink to="/admin/login" class="flex items-center">
                            <span class="material-symbols-outlined leading-none">
                            person
                        </span>
                        <span class="font-bold texx-9xl">登入／註冊</span>
                    </RouterLink>
                </li>
                <li class="">
                    <RouterLink to="/carts" class="md:pl-1 lg:pl-2">
                        <span class="material-symbols-outlined leading-none relative">
                            shopping_cart
                            <div
                                class="absolute top-0 right-0 -translate-y-1/3 translate-x-1/2 w-6 h-6 bg-dark rounded-full text-white flex justify-center items-center">
                                <p class="text-[8px] font-inter">
                                    {{ cartlength }}
                                </p>
                            </div>
                        </span>
                    </RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </div>



    <!-- banner  -->
    <!-- <div class="">

                                <img src="../images/layout/All-About-Golden-Retrievers-text.svg" alt="" class="h-14 w-auto mb-4 lg:h-24">
                                <h2 class=" font-bold mb-4 text-4.5  lg:text-h4 xl:mb-16 xl:text-h2">
                                    讓您輕鬆一次購足
                                    <br class="mb-1 md:hidden">
                                    高品質的<span class="bg-secondary text-white p-1">黃金獵犬精品</span>
                                    <br class="mb-1">
                                    <span>享受免運優惠！</span>
                                </h2>

                                <button type="button" class="btn flex items-center text-sm md:text-h6 lg:btn-md xl:btn-lg">
                                    <span class="pl-1 lg:pl-2">大家都買什麼</span>
                                    <span class="material-symbols-outlined ml-3 text-base lg:text-2xl">
                                        chevron_right
                                    </span>
                                </button>
                            </div> -->


    <RouterView></RouterView>

    <!-- footer  -->
    <div class="container mt-10 md:mt-20">
        <!-- 立即加入會員 -->
        <div class="py-6 px-13 bg-footerCtaBg-sm bg-100 bg-center bg-dark flex flex-col items-center relative
                                                            before:absolute before:content-[''] before:top-0 before:bottom-0 before:left-0 before:right-0 before:bg-dark/70
                                                            md:bg-footerCtaBg-lg ">
            <div class="relative z-20">
                <h2 class="text-4.5 font-bold mb-6 text-white md:text-h2">
                    <span class="flex items-center mb-1"> 超過<span
                            class="text-primary text-h2 md:text-h1">90%</span>的顧客都選擇我們</span>
                    您也值得擁有最優質的購物體驗！
                </h2>
                <button type="button" class="btn flex items-center text-sm mx-auto
                                                                md:text-h6 lg:btn-md xl:btn-lg">
                    <span class="pl-1 xl:pl-2">立即加入會員</span>
                    <span class="material-symbols-outlined ml-3 text-base
                                                                    lg:text-2xl">
                        chevron_right
                    </span>
                </button>
            </div>
        </div>
        <!-- footer about / contact /  -->
        <div class="bg-fog-200 px-11 pt-8 pb-4">
            <ul class="text-h6 flex flex-col gap-y-6 items-center mb-6 md:flex-row md:justify-center md:gap-0">
                <li><RouterLink to="aboutUs" class="md:pr-6 md:border-r-2 md:border-r-fog-300">關於我們</RouterLink></li>
                <li><RouterLink to="/contactUs" class="md:px-6 md:border-r-2 md:border-r-fog-300">聯絡我們</RouterLink></li>
                <li><RouterLink to="/freight&refund" class="md:px-6 md:border-r-2 md:border-r-fog-300">運費 / 退貨說明</RouterLink></li>
                <li><a href="" class="md:pl-6">私隱條款</a></li>
            </ul>
            <p class="text-fog-500 text-sm text-center">此網站僅做為前端 <span class="text-xs">Side
                    Project</span> 作品練習，
                <br>不做商業用途，謝謝。
            </p>
        </div>
    </div>
</template>