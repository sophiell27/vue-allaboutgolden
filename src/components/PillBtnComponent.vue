<script>
export default {
  data() {
    return {};
  },
};
</script>

<template>
  <RouterLink to="/products">
    <button type="button" class="pillBtn lg:pillBtn-lg">
    <slot></slot>
    <span class="material-symbols-outlined">
      chevron_right
    </span>
  </button>
  </RouterLink>
</template>
