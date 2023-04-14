<script>
import frontStore from '@/stores/frontStore';
import { mapActions } from 'pinia';
import LoginFormComponent from '../../components/LoginFormComponent.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    LoginFormComponent,
  },
  methods: {
    ...mapActions(frontStore, ['toastMessge']),
    register(value) {
      localStorage.clear();
      const login = localStorage.getItem('login');
      if (login) {
        alert('此會員已登記，請登入');
        this.$router.push('/');
      } else {
        const data = {
          username: value.註冊名稱,
          password: value.註冊密碼,
        };
        localStorage.setItem('login', JSON.stringify(data));
        this.toastMessge('成功登記！請重新登入');
        this.$router.replace('/login');
      }
    },
  },
};
</script>
<template>
  <LoginFormComponent :status="'註冊'" @submit-form="register"></LoginFormComponent>
</template>
