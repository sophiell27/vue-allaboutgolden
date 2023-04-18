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
  <div class="container mt-20">
   <div class="mx-10 sm:mx-auto md:w-1/2 lg:w-[500px]">
    <v-form class="mx-10" @submit="(value) => $emit('submit-form', value)">
      <h2 class="text-2xl mb-4 text-center lg:text-4xl">用戶{{ status }}</h2>
      <div class="mb-4 lg:text-lg">
        <label for="loginName" class="block mb-2">{{ status }}名稱<span class="ml-1 text-highlight">*</span></label>
        <v-field :name="`${status}名稱`" type="email" id="loginName"
          class="px-4 py-2 border border-primary rounded-lg bg-transparent mb-1 w-full" placeholder="請輸入帳戶名稱"
          rules="required|email">
        </v-field>
        <v-error-message :name="`${status}名稱`" class="text-highlight"></v-error-message>
      </div>
      <div class="mb-4 lg:text-lg">
        <label for="loginPw" class="block mb-2">{{ status }}密碼<span class="ml-1 text-highlight">*</span></label>
        <v-field :name="`${status}密碼`" type="password" id="loginPw"
          class="px-4 py-2 border border-primary rounded-lg bg-transparent mb-1 w-full" placeholder="請輸入密碼"
          rules="required|min:8">
        </v-field>
        <v-error-message :name="`${status}密碼`" class="text-highlight"></v-error-message>
      </div>
      <button class="bg-secondary rounded-lg text-white w-full px-6 py-2 lg:text-lg"> {{ status }}</button>
    </v-form>
    <slot name="msg"></slot>
   </div>
  </div>
</template>
