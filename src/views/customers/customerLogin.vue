<script>
import frontStore from '@/stores/frontStore';
import { mapState } from 'pinia';
import LoginFormComponent from '@/components/LoginFormComponent.vue';

export default {
  data() {
    return {
      register: false,
    };
  },
  components: {
    LoginFormComponent,
  },
  computed: {
    ...mapState(frontStore, ['isLoading', 'fullPage']),
  },
  methods: {
    // login(value) {
    //   this.changeLoading(true);
    //   const data = {
    //     username: value.用戶名稱,
    //     password: value.用戶密碼,
    //   }
    // },
  },
  mounted() {
    if (this.$route.fullPath === '/register') {
      this.register = true;
    } else {
      this.register = false;
    }
  },
};
</script>
<template>
  <LoginFormComponent :status="'登入'" @submit-form="login"></LoginFormComponent>
</template>
