<template>
  <div class="sw-background h-full">
    <div class="sw-text sw-page-title pt-3 pl-3">
      {{ getCategoryFromRoute }}
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getCategoryFromRoute() {
      return (
        this.$route &&
        this.$route.params.category.charAt(0).toUpperCase() +
          this.$route.params.category.slice(1)
      );
    },
  },
};
</script>
