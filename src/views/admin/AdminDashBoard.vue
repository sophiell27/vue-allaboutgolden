<script>
import adminStore from '@/stores/adminStore';
import { mapActions, mapState } from 'pinia';

export default {
  data() {
    return {
      isActive: '',
    };
  },
  computed: {
    ...mapState(adminStore, ['isLoading', 'fullPage', 'loginStatus']),
  },
  methods: {
    ...mapActions(adminStore, ['checkLogin', 'logOut', 'toastMessage']),
  },
  mounted() {
    (async () => {
      await this.checkLogin(this.$route.fullPath);
      if (this.loginStatus) {
        this.toastMessage('歡迎回來');
      }
    })();
  },
};
</script>
<template>
  <LoadingComponent v-model:active="isLoading" :is-full-page="fullPage" />
  <div class="min-h-screen">
    <div class="bg-primary mb-6">
      <div class="container">
        <nav class="flex justify-between items-center text-dark font-bold text-4.5 ">
          <ul class="flex items-center gap-x-6 py-6">
            <li class="origin-center hover:scale-y-110">
              <RouterLink to="/admin/orders/1"
                class="py-2 md:py-4 border-b border-b-transparent hover:border-b hover:border-b-dark ">所有訂單
              </RouterLink>
            </li>
            <li>
              <RouterLink to="/admin/products/1"
                class="py-2 md:py-4 border-b border-b-transparent hover:border-b hover:border-b-dark">產品管理
              </RouterLink>
            </li>
            <li><a href="" class="py-2 md:py-4 border-b border-b-transparent hover:border-b hover:border-b-dark "></a>
            </li>
            <li><a href="" class="py-2 md:py-4 border-b border-b-transparent hover:border-b hover:border-b-dark "></a>
            </li>
          </ul>
          <h1 class="w-[140px] h-12 whitespace-nowrap overflow-hidden text-transparent">
            <a href="#" class="block w-full h-full bg-[url('../assets/images/Logo.svg')] bg-cover bg-no-repeat ">All
              aboute Golden Retrievers</a>
          </h1>
          <ul class="flex items-center gap-x-4">
            <li>
              <RouterLink to="/" class="py-2 md:py-4 border-b border-b-transparent hover:border-b hover:border-b-dark ">
                前台首頁
              </RouterLink>
            </li>
            <li>
              <a href="" class="py-2 md:py-4 border-b border-b-transparent hover:border-b hover:border-b-dark "
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
