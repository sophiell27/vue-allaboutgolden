<script>
import frontStore from '@/stores/frontStore';
import { mapState, mapActions } from 'pinia';
import NavCategoryComponent from '@/components/NavCategoryComponent.vue';

export default {
  data() {
    return {
    };
  },
  components: {
    NavCategoryComponent,
  },
  computed: {
    ...mapState(frontStore, ['categories', 'currentCategory']),
  },
  methods: {
    ...mapActions(frontStore, ['getProducts']),
  },
  beforeMount() {
    window.removeEventListener('scroll', this.scrollCategoryMenu);
  },
};
</script>

<template>
  <main class="relative">
    <NavCategoryComponent></NavCategoryComponent>
    <div class="pt-12">
      <RouterView />
    </div>
  </main>
</template>
