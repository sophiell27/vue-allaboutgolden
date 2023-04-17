<script>
import frontStore from '@/stores/frontStore';
import { mapActions } from 'pinia';
import LoginFormComponent from '@/components/LoginFormComponent.vue';

export default {
  data() {
    return {};
  },
  components: {
    LoginFormComponent,
  },
  methods: {
    ...mapActions(frontStore, ['login']),
  },
};
</script>
<template>
  <LoginFormComponent :status="'登入'" @submit-form="login">
    <template #msg>
    <RouterLink to="/register" class="mt-5 text-center block lg:text-lg">
      不是會員？請先<span class="text-highlight">登記</span> </RouterLink>
  </template>
  </LoginFormComponent>
</template>
