<script>
import frontStore from '@/stores/frontStore';
import { mapActions, mapState } from 'pinia';
import LoginFormComponent from '../../components/LoginFormComponent.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    LoginFormComponent,
  },
  computed: {
    ...mapState(frontStore, ['loginStatus']),
  },
  methods: {
    ...mapActions(frontStore, ['toastMessge', 'register']),
  },
  mounted() {
    if (this.loginStatus) {
      this.$router.push('/');
    }
  },
};
</script>
<template>
  <LoginFormComponent :status="'註冊'" @submit-form="register"></LoginFormComponent>
</template>
