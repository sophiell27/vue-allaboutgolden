<script>
export default {
  data() {
    return {};
  },
  props: {
    dynamicPath: {
      default: '/products',
    },
  },
};
</script>

<template>
  <RouterLink :to="dynamicPath">
    <button type="button" class="pillBtn lg:pillBtn-lg">
    <slot></slot>
    <span class="material-symbols-outlined">
      chevron_right
    </span>
  </button>
  </RouterLink>
</template>
