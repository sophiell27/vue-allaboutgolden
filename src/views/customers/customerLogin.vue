<script>
import frontStore from '@/stores/frontStore';
import { mapActions, mapState } from 'pinia';
import LoginFormComponent from '@/components/LoginFormComponent.vue';

export default {
  data() {
    return {};
  },
  components: {
    LoginFormComponent,
  },
  computed: {
    ...mapState(frontStore, ['isLoading', 'fullPage']),
  },
  methods: {
    ...mapActions(frontStore, ['login']),
  },
};
</script>
<template>
  <LoginFormComponent :status="'登入'" @submit-form="login"></LoginFormComponent>
</template>
