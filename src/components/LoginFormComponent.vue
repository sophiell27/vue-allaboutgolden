<script>
import frontStore from '@/stores/frontStore';
import { mapState } from 'pinia';

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(frontStore, ['isLoading', 'fullPage']),
  },
  props: ['status'],
  emits: ['submit-form'],
};
</script>
<template>
  <LoadingComponent v-model:active="isLoading" :is-full-page="fullPage" />
  <div class="container flex flex-col items-center justify-center mt-20">
    <v-form class="" @submit="(value) => $emit('submit-form', value)">
      <h1 class="text-2xl mb-4 text-center">用戶{{ status }}</h1>
      <div class="mb-4">
        <label for="loginName" class="block mb-2">{{ status }}名稱</label>
        <v-field :name="`${status}名稱`" type="email" id="loginName"
          class="px-4 py-2 border border-primary rounded-lg bg-transparent mb-1 w-full" placeholder="請輸入帳戶名稱"
          rules="required|email">
        </v-field>
        <v-error-message :name="`${status}名稱`"  class="text-highlight"></v-error-message>
      </div>
      <div class="mb-4">
        <label for="loginPw" class="block mb-2">{{ status }}密碼</label>
        <v-field :name="`${status}密碼`" type="password" id="loginPw"
          class="px-4 py-2 border border-primary rounded-lg bg-transparent mb-1 w-full" placeholder="請輸入密碼"
          rules="required|min:8">
        </v-field>
        <v-error-message :name="`${status}密碼`" class="text-highlight"></v-error-message>
      </div>
      <button class="bg-secondary rounded-lg text-white w-full px-6 py-2"> {{ status }}</button>
    </v-form>
    <RouterLink to="/register" class="mt-5" v-if="status === '登入'">不是會員？請先<span class="text-highlight">登記</span> </RouterLink>
  </div>
</template>
