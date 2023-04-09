<script>
const { VITE_API, VITE_PATH } = import.meta.env;
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapState(adminStore, ['isLoading', "fullPage"]),
  },
  methods: {
    login(value) {
      this.changeLoading(true);
      const data = {
        username: value.用戶名稱,
        password: value.用戶密碼,
      }
    },
  },
  mounted() {
  },
};
</script>
<template>
  <loading v-model:active="isLoading" :is-full-page="fullPage" />
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
      <h1 class="text-2xl mb-4 text-center">用戶登入</h1>
      <div class="mb-4">
        <label for="loginName" class="block mb-2">用戶名稱</label>
        <v-field name="帳戶名稱" type="email" id="loginName"
          class="px-4 py-2 border border-primary rounded-lg bg-transparent mb-1 w-full" placeholder="請輸入帳戶名稱"
          rules="required|email">
        </v-field>
        <v-error-message name="用戶名稱" class="text-highlight"></v-error-message>
      </div>
      <div class="mb-4">
        <label for="loginPw" class="block mb-2">用戶密碼</label>
        <v-field name="用戶密碼" type="password" id="loginPw"
          class="px-4 py-2 border border-primary rounded-lg bg-transparent mb-1 w-full" placeholder="請輸入密碼"
          rules="required|min:8">
        </v-field>
        <v-error-message name="用戶密碼" class="text-highlight"></v-error-message>
      </div>
      <button class="bg-secondary rounded-lg text-white w-full px-6 py-2">登入</button>
    </v-form>
  </div>
</template>
