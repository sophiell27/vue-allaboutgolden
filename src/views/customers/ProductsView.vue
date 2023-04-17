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
  <main class="pt-10 md:pt-16 relative">
    <NavCategoryComponent />
    <div class="container pt-12 lg:pl-44">
      <RouterView />
    </div>
  </main>
</template>
