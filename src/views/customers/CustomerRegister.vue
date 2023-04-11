<script>
// import frontStore from '@/stores/frontStore';
// import { mapState } from 'pinia';
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
    register(value) {
      localStorage.clear();
      const login = localStorage.getItem('login');
      if (login) {
        // alert("此會員已登記，請登入");
      } else {
        const data = {
          username: value.註冊名稱,
          password: value.註冊密碼,
        };
        localStorage.setItem('login', JSON.stringify(data));
      }
    },
  },
};
</script>
<template>
  <LoginFormComponent :status="'註冊'" @submit-form="register"></LoginFormComponent>
</template>
