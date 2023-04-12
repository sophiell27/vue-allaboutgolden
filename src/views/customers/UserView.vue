<script>
import frontStore from '@/stores/frontStore';
import { mapState, mapActions } from 'pinia';

export default {
  computed: {
    ...mapState(frontStore, ['loginStatus']),
  },
  methods: {
    ...mapActions(frontStore, ['alertMessage']),
  },
  mounted() {
    // if (!this.loginStatus) {
    //   this.alertMessage('請先登入！');
    //   this.$router.push('/login');
    // }
  },
};
</script>
<template>
   <!-- v-if="loginStatus"-->
  <RouterView />
</template>
