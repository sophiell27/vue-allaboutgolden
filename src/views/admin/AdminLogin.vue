<script>
import adminStore from '@/stores/adminStore';
import { mapActions, mapState } from 'pinia';

const { VITE_API } = import.meta.env;
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState(adminStore, ['isLoading', 'fullPage']),
  },
  methods: {
    ...mapActions(adminStore, ['checkLogin', 'alertMessage', 'changeLoading']),
    login(value) {
      this.changeLoading(true);
      const data = {
        username: value.帳戶名稱,
        password: value.登入密碼,
      };
      this.$http.post(`${VITE_API}/admin/signin`, data)
        .then((res) => {
          this.changeLoading(false);
          const { token, expired } = res.data;
          document.cookie = `goldenToken=${token};expires=${new Date(expired)}`;
          this.$router.push('/admin');
        })
        .catch(() => {
          this.changeLoading(false);
          this.alertMessage('登入錯誤，請重新輸入');
        });
    },
  },
  mounted() {
    this.checkLogin();
  },
};
</script>
<template>
  <LoadingComponent v-model:active="isLoading" :is-full-page="fullPage" />
  <nav class="bg-primary py-6">
    <ul class="container flex items-center justify-start text-dark">
      <li class="">
        <RouterLink to="/" class="hover:opacity-70 flex items-center">
          <span class="material-symbols-outlined">
            chevron_left
          </span>
          回到前台首頁
        </RouterLink>
      </li>
    </ul>
  </nav>
  <div class="container flex flex-col items-center justify-center mt-20">
    <v-form class="" @submit="login">
      <RouterLink to="/">
        <img src="../../assets/images/Logo.svg" alt="logo" class="mb-8">
      </RouterLink>
      <h1 class="text-2xl mb-4 text-center">管理員登入</h1>
      <div class="mb-4">
        <label for="adminLoginName" class="block mb-2">帳戶名稱</label>
        <v-field name="帳戶名稱" type="email" id="adminLoginName"
          class="px-4 py-2 border border-primary rounded-lg bg-transparent mb-1 w-full" placeholder="請輸入帳戶名稱"
          rules="required|email">
        </v-field>
        <v-error-message name="帳戶名稱" class="text-highlight"></v-error-message>
      </div>
      <div class="mb-4">
        <label for="adminLoginPw" class="block mb-2">帳戶密碼</label>
        <v-field name="登入密碼" type="password" id="adminLoginPw"
          class="px-4 py-2 border border-primary rounded-lg bg-transparent mb-1 w-full" placeholder="請輸入密碼"
          rules="required|min:8">
        </v-field>
        <v-error-message name="登入密碼" class="text-highlight"></v-error-message>
      </div>
      <button class="bg-secondary rounded-lg text-white w-full px-6 py-2">登入</button>
    </v-form>
  </div>
</template>
