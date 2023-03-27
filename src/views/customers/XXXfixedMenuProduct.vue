<template>
    <script>
import ProductListComponent from '../../components/ProductListComponent.vue';
import frontStore from '../../stores/frontStore.js';
import { mapActions, mapState } from 'pinia';
// import PaginationComponent from '../../components/PaginationComponent.vue';
export default {
    data() {
        return {
            // productsss: ["s"]
            routeValue: this.$route.params,
            category: "全部商品"
        }
    },
    components: {
        // PaginationComponent
        ProductListComponent
    },
    computed: {
        ...mapState(frontStore, ["products"])
    },
    methods: {
        ...mapActions(frontStore, ["getProducts", "addCart", "filterProductList"]),
        // toggleMenu(){
        //     const nav = this.$refs.expendMenu
        //     const attr = "hidden"
        //     nav.classList.contains(attr) ?
        //         nav.classList.remove(attr) :
        //         nav.classList.add(attr)

        // }
        changeRoute(evt) {
            // console.log("aa");
            console.log(evt.target.value);
            console.log(`/products/category/${evt.target.value}`);
            this.$router.push(`/products/category/${evt.target.value}`)
        },
        toggleMenu() {
            const nav = this.$refs.expandMenu
            const attr = "hidden"
            nav.classList.contains(attr) ?
                nav.classList.remove(attr) :
                nav.classList.add(attr)
        },
        closeMenu(evt){

            const target  = evt.target.parentElement.parentElement.parentElement;
            console.log(target);
            console.log(target != document.getElementById("expandMenuList"));
            // console.log(document.getElementById("expandMenuList"));
            // console.log(evt.target != document.getElementById("expandMenuList") );
            // console.log(evt.target != this.$refs.expandMenuList );
        }
    },
    watch: {
        $route(n, o) {
            let category = n.params.category;
            category ? this.category = category :
                this.category = "全部產品";
        }
    },
    mounted() {
        this.getProducts();
        window.addEventListener("click", (e)=>{
            console.log(e.target);
            // const menu = this.$refs.expandMenu
            // if(menu.classList.contains("hidden") && e.target.value === undefined){;
            //     menu.classList.add("hidden")
            // };
        })
    }
}
</script>

<template>
    <div class="text-center relative">
        <!-- "/products/category/:category", -->
        <!-- top-14  -->
        <!-- <div class="sticky z-50 left-5 top-9 hover:z-[100] bg-fog-100 md:top-14 md:z-30 md:hover:z-30"> -->
            <div class="fixed  bottom-0 w-full z-50 hover:z-[100] bg-fog-100 md:top-14 md:z-30 md:hover:z-30 md:sticky ">
            <!-- my-3 bg-fog-100-->
            <button type="button"

                class="absolute bottom-0 py-2 pl-8 pr-2 flex items-center bg-highlight  text-dark rounded-r-full  hover:bg-highlight hover:mt-3  hover:text-dark md:px-8 md:hidden "
                @click="toggleMenu">
                <span class="pr-4 md:pr-0">
                    {{ category }}
                </span>
                <span class="material-symbols-outlined text-base lg:text-2xl md:hidden">
                    expand_more
                </span>
            </button>
            <!-- bg-fog-100 mb-8 -->
            <!-- <div class="hidden z-20 fixed bottom-0 top-0 left-0 right-0 
                            md:static"  ref="expandMenu" @click="(evt) =>closeMenu(evt)"> -->
                <ul class="hidden  z-20 bg-fog-100 absolute bottom-0  p-4 text-fog-400  rounded-lg2 md:flex md:justify-center md:pb-0 md:bg-transparent  md:-mt-8" id="expandMenuList" ref="expandMenu">
                <li class="">
                    <!-- hidden md:block -->
                    <RouterLink to="/products" class="py-2 pl-4 pr-2 flex items-center hover:text-highlight md:px-4 "
                        @click="{ toggleMenu();category='全部商品' }">
                        <button typ="button">
                            <span class="pr-4 md:pr-0">
                            全部商品
                        </span>

                        <span class="material-symbols-outlined text-base lg:text-2xl md:hidden">
                            chevron_right
                        </span>
                        </button>
                    </RouterLink>
                </li>
                <li class="">
                    <RouterLink to="/products/category/配件配飾" href=""
                        class="py-2 pl-4 pr-2 flex items-center hover:text-highlight md:px-4" @click="toggleMenu">
                        <span class="pr-4 md:pr-0">
                            配件配飾
                        </span>

                        <span class="material-symbols-outlined text-base lg:text-2xl md:hidden">
                            chevron_right
                        </span>
                    </RouterLink>
                </li>
                <li class="">
                    <RouterLink to="/products/category/居家配件" href=""
                        class="py-2 pl-4 pr-2 flex items-center hover:text-highlight md:px-4" @click="toggleMenu">
                        <span class="pr-4 md:pr-0">
                            居家配件
                        </span>

                        <span class="material-symbols-outlined text-base lg:text-2xl md:hidden">
                            chevron_right
                        </span>
                    </RouterLink>


                </li>
                <li class="">
                    <RouterLink to="/products/category/床上用品" href=""
                        class="py-2 pl-4 pr-2 flex items-center hover:text-highlight md:px-4" @click="toggleMenu">
                        <span class="pr-4 md:pr-0">
                            床上用品
                        </span>

                        <span class="material-symbols-outlined text-base lg:text-2xl md:hidden">
                            chevron_right
                        </span>
                    </RouterLink>
                </li>
                <li class="">
                    <RouterLink to="/products/category/科技配件" href=""
                        class="py-2 pl-4 pr-2 flex items-center hover:text-highlight md:px-4" @click="toggleMenu">
                        <span class="pr-4 md:pr-0">
                            科技配件
                        </span>

                        <span class="material-symbols-outlined text-base lg:text-2xl md:hidden">
                            chevron_right
                        </span>
                    </RouterLink>
                </li>
                <li class="">
                    <RouterLink to="/products/category/衣物大全" href=""
                        class="py-2 pl-4 pr-2 flex items-center hover:text-highlight md:px-4" @click="toggleMenu">
                        <span class="pr-4 md:pr-0">
                            衣物大全
                        </span>

                        <span class="material-symbols-outlined text-base lg:text-2xl md:hidden">
                            chevron_right
                        </span>
                    </RouterLink>
                </li>
                <li class="">
                    <RouterLink to="/products/category/有狗亂入" href=""
                        class="py-2 pl-4 pr-2 flex items-center hover:text-highlight md:px-4" @click="toggleMenu">
                        <span class="pr-4 md:pr-0">
                            有狗亂入
                        </span>

                        <span class="material-symbols-outlined text-base lg:text-2xl md:hidden">
                            chevron_right
                        </span>
                    </RouterLink>
                </li>
            </ul>
            <!-- </div> -->
            

    </div>
    <!-- </div> -->
    <div class="container pt-[72px]">
        <RouterView></RouterView>
    </div>
</div>

</template>
</template>