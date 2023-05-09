<template>
  <div class="sw-background h-full">
    <div class="sw-text sw-page-title pt-3 pl-4">
      {{ getCategoryFromRoute }}
      <i
        v-if="loading"
        class="pi pi-spin pi-spinner"
        style="font-size: 1.2rem"
      ></i>
    </div>
    <div class="p-4">
      <star-wars-list
        v-if="getCategoryFromRoute === 'People'"
        :data="categoryViewData"
        @erase="erase"
      />
    </div>
  </div>
</template>

<script>
import { useAppStore } from "@/store/app";
import StarWarsList from "@/components/StarWarsList.vue";

export default {
  components: {
    StarWarsList,
  },
  setup() {
    const { getCategory, eraseItem } = useAppStore();
    return { getCategory, eraseItem };
  },
  data() {
    return {
      categoryViewData: [],
      loading: false,
    };
  },
  computed: {
    getCategoryFromRoute() {
      return (
        this.$route &&
        this.$route.params.category.charAt(0).toUpperCase() +
          this.$route.params.category.slice(1)
      );
    },
  },
  mounted() {
    console.log("this.$route", this.$route.params.category);
    this.fetchCategory();
  },
  methods: {
    async fetchCategory() {
      if (this.$route.params?.category) {
        this.loading = true;
        this.categoryViewData = await this.getCategory(
          this.$route.params.category
        );
        this.loading = false;
      } else {
        console.log("no category");
      }
    },
    async erase(item) {
      this.categoryViewData = await this.eraseItem(item);
    },
  },
};
</script>
