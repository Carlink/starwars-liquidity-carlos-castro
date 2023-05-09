<template>
  <div class="card flex justify-content-center">
    <v-auto-complete
      v-model="swQuery"
      :suggestions="swGroupedCategories"
      optionLabel="label"
      optionGroupLabel="label"
      optionGroupChildren="items"
      placeholder="Search Something About Star Wars"
      :inputStyle="{ width: '400px' }"
    >
      <template #optiongroup="slotProps">
        <div class="flex align-items-center country-item">
          <div>{{ slotProps.item.label }}</div>
        </div>
      </template>
      <template #option="slotProps">
        <div
          class="flex align-options-center"
          :class="slotProps.option.category && 'justify-content-end'"
        >
          <div
            v-if="slotProps.option.category"
            class="flex align-options-center text-primary"
            @click="goToCategory(slotProps.option.category)"
          >
            <div>{{ slotProps.option.label }}</div>
            <i
              v-if="slotProps.option.category"
              class="pi pi-arrow-right primary ml-2"
              style="font-size: 1.2rem"
            ></i>
          </div>
          <div v-else v-html="slotProps.option.label"></div>
        </div>
      </template>
    </v-auto-complete>
  </div>
</template>

<script>
import { useAppStore } from "@/store/app";

export default {
  setup() {
    const { getAllCategories, swData } = useAppStore();
    return { getAllCategories, swData };
  },
  data() {
    return {
      swQuery: [],
      swGroupedCategories: [],
    };
  },
  watch: {
    swGroupedCategories(val) {
      console.log("categories has changes", val);
    },
    swQuery(searchString) {
      if (!searchString) {
        return;
      }

      this.clearEntries();
      this.fetchEntriesDebounced();
    },
  },
  methods: {
    clearEntries() {
      this.swSuggestions = [];
    },
    fetchEntriesDebounced() {
      clearTimeout(this._searchTimerId);
      this._searchTimerId = setTimeout(async () => {
        const response = await this.getAllCategories(this.swQuery);
        this.swGroupedCategories = response;
      }, 1000);
    },
    goToCategory(category) {
      this.$router.push(category);
    },
  },
};
</script>
