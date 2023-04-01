<script>

import adminStore from '../../stores/adminStore.js';
import { mapActions } from 'pinia';
import axios from 'axios';
const { VITE_API, VITE_PATH } = import.meta.env;

export default {
    data() {
        return {
            loginStatus: false,
            isActive: ""
        }
    },
    methods: {
        ...mapActions(adminStore, ["checkLogin", "toastMessge", "alertMessage", "confirmMessage"]),
        logOut() {
            const loader = this.$loading.show();
            setTimeout(()=> {
                loader.hide()
            },500)
            this.$http.post(`${VITE_API}logout`)
                .then(res => {
                    console.log(res);
                    this.toastMessge("成功登出", "center")
                    this.loginStatus = false
                    this.$router.push("/admin/login")
                })
                .catch((err) => {
                    this.alertMessage("無法登出")
                    console.dir(err)
                })
            
        },
    },
    watch: {
    },
    mounted() {
        this.checkLogin(this.$route.fullPath).then(result => {
                this.loginStatus = true
                this.toastMessge("Welcome Back!")
            });
    }


}
</script>

<template>
    <div class="min-h-screen">
        <div class="bg-primary mb-6">
            <div class="container">
                <nav class="flex justify-between items-center text-dark font-bold text-4.5 ">
                    <ul class="flex items-center gap-x-6 py-6">
                        <li class="origin-center hover:scale-y-110">
                            <RouterLink to="/admin/orders"
                                class="py-2 md:py-4 border-b border-b-transparent hover:border-b hover:border-b-dark ">所有訂單
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="/admin/products"
                                class="py-2 md:py-4 border-b border-b-transparent hover:border-b hover:border-b-dark  ">產品管理
                            </RouterLink>
                        </li>
                        <li><a href=""
                                class="py-2 md:py-4 border-b border-b-transparent hover:border-b hover:border-b-dark "></a>
                        </li>
                        <li><a href=""
                                class="py-2 md:py-4 border-b border-b-transparent hover:border-b hover:border-b-dark "></a>
                        </li>
                    </ul>
                    <h1 class="w-[140px] h-12 whitespace-nowrap overflow-hidden text-transparent">
                        <a href="#"
                            class="block w-full h-full bg-[url('../assets/images/Logo.svg')] bg-cover bg-no-repeat ">All
                            aboute Golden Retrievers</a>
                    </h1>
                    <ul class="flex items-center gap-x-4">
                        <li>
                            <RouterLink to="/"
                                class="py-2 md:py-4 border-b border-b-transparent hover:border-b hover:border-b-dark ">
                                <!-- <span class="material-symbols-outlined">
                                    chevron_left
                                </span> -->
                                前台首頁
                            </RouterLink>
                        </li>
                        <li>
                            <a href=""
                                class="py-2 md:py-4 border-b border-b-transparent hover:border-b hover:border-b-dark "
                                @click.prevent="logOut">登出</a>

                        </li>
                    </ul>

                </nav>
            </div>
        </div>
        <div class="h-[calc(100vh-131px)]">
            <RouterView class="container h-full" v-if="loginStatus"></RouterView>
        </div>
    </div>
</template>