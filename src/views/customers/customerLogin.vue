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
  <LoginFormComponent :status="'登入'" @submit-form="login"></LoginFormComponent>
</template>
