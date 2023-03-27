<script>
import { RouterLink, RouterView } from 'vue-router';
import HeroComponent from '../components/HeroComponent.vue';
import frontStore from '../stores/frontStore.js';
import { mapActions, mapState } from 'pinia';
export default {
    data() {
        return {
            currentRoute: "",
            innerWidth: Number,
            // mainNav: null
            // loading:{},
            loader: null

        }
    },
    watch: {
        cartlength(n, o) {
            console.log(n);
        }
    },
    components: {
        HeroComponent,
    },
    computed: {
        ...mapState(frontStore, ["carts", "cartlength"])
    },
    methods: {
        ...mapActions(frontStore, ["getCarts"]),
        changePath(newPath) {
            // this.currentRoute = newPath
        },
        playLoading() {
            this.loader = this.$loading.show();
            setTimeout(() => {
                this.loader.hide()
            }, 500);
        },
        toggleMenu() {
            if (this.$route.path === "/products") {
                document.getElementById("expandMenu").classList.add("hidden")
            }

            // console.log(this.getexpandMenuRef);
            // this.getexpandMenuRef().classList.add("hidden")
            const nav = this.$refs.mainNav
            const attr = "-translate-x-[200%]"
            nav.classList.contains(attr) ?
                nav.classList.remove(attr) :
                nav.classList.add(attr)
        },
        // closemenu(){
        //     console.log("close")
        //     this.$refs.mainNav.classList.add("-translate-x-[200%]")
        // },
        changeNavbg() {
            const headerTop = this.$refs.headerTop;
            const header = this.$refs.header;
            const logo = this.$refs.mainLogo;
            let headerClass = "bg-transparent"
            let newHeaderClass = "bg-fog-100"
            let addClass = "add"
            let removeClass = "remove"
            let scrollTop = 200
            this.$route.fullPath != "/" ? scrollTop = 50 : "";
            if (window.pageYOffset < scrollTop) {
                addClass = "remove"
                removeClass = "add"
            }
            headerTop.classList[addClass]("bg-fog-100");
            header.classList[removeClass]("bg-transparent");
            header.classList[addClass]("h-9", "-mt-1", "md:h-12", "md:-mt-3");
            header.classList[removeClass]("md:h-auto", "md:-mt-0");
            logo.classList[addClass]("h-10", "md:h-14", "flex", "mt-auto")
            logo.classList[removeClass]("h-12", "md:h-21", "flex-none")
        },

    },
    watch: {
        $route(n, o) {
            // this.playLoading();
            this.$router.push(n.fullPath);
            
            // console.log(n.fullPath);
            // this.changePath(n.fullPath);
            // console.log(n);
            // this.$refs.mainNav.classList.add("-translate-x-[200%]");
            // console.log(this.currentRoute != '/');
        },

    },
    provide() {
        return {
            getMainNavRef: () => this.$refs.mainNav
        }
    },
    // inject: ["getExpandMenuRef"],
    mounted() {
        // this.changePath(this.$route.fullPath)
        this.getCarts();
        window.addEventListener('scroll', this.changeNavbg);
        this.innerWidth = window.innerWidth;
        this.playLoading();
        // this.$loading.show();
        // this.$swal('Hello Vue world!!!');
        // console.log(this.$swal);

    },
    beforeUnmount() {
        window.removeEventListener('scroll', this.changeNavbg);
    }
}
</script>

<template>
    <div class="relative ">
        <!-- top news  -->
        <div class="bg-primary py-1 fixed top-0 left-0 right-0 z-30">
            <RouterLink to="/products" class="hover:opacity-60">
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
        <!-- nav  -->
        <!-- bg-fog-100  -->
        <!-- :class="{ 'bg-fog-100': currentRoute !== '/' }" -->
        <div class="z-40 fixed top-0 left-0 right-0 mt-9" ref="headerTop">
            <div class="z-50 " ref="header">
                <div class="container ">
                    <!-- nav  -->
                    <header class="flex justify-between items-center px-6  md:px-0 ">
                        <!-- mb-9 xl:mb-20 -->
                        <div class="flex items-center">
                            <!-- burger -->
                        <button type="button" class="mr-4 hover:opacity-70 md:hidden " @click="toggleMenu">
                            <span class="material-symbols-sharp h-3 w-4.5">
                                menu
                            </span>
                        </button>
                        <!-- logo  -->
                        <a href="#" class="hover:opacity-70">
                            <img src="../assets/images/Logo.svg" alt="遍地黃金logo"
                                class=" my-3 w-auto h-12 md:h-21 lg:mr-7 " ref="mainLogo">
                        </a>
                        <!-- menu  -->
                        <!-- pl-4.5 pr-7 -->
                        <!-- ref="mainNav" -->
                        <nav class="absolute z-10  pt-3 shadow-lg2 top-0 left-0 bg-white w-[320px] min-h-screen -translate-x-[200%]  
                           md:static md:translate-x-0 md:w-auto md:px-0 md:pt-0 md:bg-transparent md:min-h-0 md:shadow-none "
                            ref="mainNav">
                            <div class="pl-4.5 pr-7 flex justify-between items-center  md:hidden">
                                    <h1 class="w-[140px] h-12 whitespace-nowrap overflow-hidden text-transparent">
                                        <a href="#"
                                            class="block w-full h-full bg-[url('../assets/images/Logo.svg')] bg-cover bg-no-repeat ">All
                                            aboute Golden Retrievers</a>
                                    </h1>
                                    <!-- <img src="../assets/images/Logo.svg" alt="遍地黃金logo" class=" h-12 w-auto"> -->
                                    <a href="#" @click.prevent="toggleMenu" class="hover:text-highlight">
                                        <span class="material-symbols-sharp">
                                            close
                                        </span>
                                    </a>
                                </div>
                                <ul class="text-fog-500 text-4.5 font-bold flex flex-col
                                        md:flex-row md:gap-0 md:text-base">
                                    <!-- gap-8 items-center  -->

                                    <!-- dot  -->

                                    <li
                                        class="md:relative md:after:content-[''] md:after:absolute md:after:top-1/2 md:after:-translate-y/12 md:after:right-0 md:after:w-1 md:after:h-1 md:after:bg-secondary md:after:rounded-full md:px-4 lg:px-9">
                                        <RouterLink to="/products"
                                        class=" flex flex-col items-center hover:opacity-70 py-8  md:py-2"
                                        @click="toggleMenu">
                                        <!-- :class="{'text-highlight':$route.fullPath.contains('/products')}" -->
                                        產品一覽
                                        <!-- <span class="text-sm text-fog-400 font-extrabold">Order</span> -->
                                    </RouterLink>
                                    </li>



                                    <li
                                        class="md:relative md:after:content-[''] md:after:absolute md:after:top-1/2 md:after:-translate-y/12 md:after:right-0 md:after:w-1 md:after:h-1 md:after:bg-secondary md:after:rounded-full  md:px-4 lg:px-9">
                                        <a href="#" class=" flex flex-col items-center hover:opacity-70 pt-6 pb-8  md:py-2">
                                            黃金專欄
                                            <!-- <span class="text-sm text-fog-400 font-extrabold">Blog</span> -->
                                        </a>
                                    </li>

                                    <li class="md:px-4 lg:px-9 ">
                                        <RouterLink to="/orders"
                                            class=" flex flex-col items-center hover:opacity-70 py-8  md:py-2"
                                            @click="toggleMenu">
                                            查詢訂單
                                            <!-- <span class="text-sm text-fog-400 font-extrabold">Order</span> -->
                                        </RouterLink>
                                    </li>

                                    <li class="md:hidden">
                                        <RouterLink to="/admin/login"
                                            class=" flex flex-col items-center hover:opacity-70 py-8  md:py-2">
                                            登入/註冊
                                            <span class="text-sm text-fog-400 font-extrabold">Sign in</span>
                                        </RouterLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <ul class="flex items-start">
                            <li>
                                <a href="" class="md:px-2 hover:opacity-70">
                                    <span class="material-symbols-outlined leading-none">
                                        search
                                    </span>
                                </a>
                            </li>
                            <li class="hidden md:block ">
                                <RouterLink to="/admin/login" class="flex items-center md:px-2  hover:opacity-70">
                                    <span class="material-symbols-outlined leading-none">
                                        person
                                    </span>
                                    <span class="font-bold texx-9xl">登入／註冊</span>
                                </RouterLink>
                            </li>
                            <li class="">
                                <RouterLink to="/carts" class="md:pl-2  hover:opacity-70">
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
                    </header>
                </div>
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



    <!--fixed top : 36+72 md:36+108  -->
    <div class="mt-[92px] md:mt-[144px]">
        <RouterView></RouterView>
    </div>

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
                <!-- <button type="button" class="btn flex items-center text-sm mx-automd:text-h6 lg:btn-md xl:btn-lg">
                                 <span class="pl-1 xl:pl-2">立即加入會員</span>
                                                <span class="material-symbols-outlined ml-3 text-base
                                                                                                lg:text-2xl">
                                                    chevron_right
                                                </span>
                                            </button> -->
            </div>
        </div>
        <!-- footer about / contact /  -->
        <div class="bg-fog-200 px-11 pt-8 pb-4">
            <ul class="text-h6 flex flex-col gap-y-6 items-center mb-6 md:flex-row md:justify-center md:gap-0">
                <li>
                    <RouterLink to="aboutUs" class="md:pr-6 md:border-r-2 md:border-r-fog-300">關於我們</RouterLink>
                </li>
                <li>
                    <RouterLink to="/contactUs" class="md:px-6 md:border-r-2 md:border-r-fog-300">聯絡我們</RouterLink>
                </li>
                <li>
                    <RouterLink to="/freight&refund" class="md:px-6 md:border-r-2 md:border-r-fog-300">運費 / 退貨說明
                    </RouterLink>
                </li>
                <li><a href="" class="md:pl-6">私隱條款</a></li>
            </ul>
            <p class="text-fog-500 text-sm text-center">此網站僅做為前端 <span class="text-xs">Side
                    Project</span> 作品練習，
                <br>不做商業用途，謝謝。
            </p>
        </div>
    </div>
</template>