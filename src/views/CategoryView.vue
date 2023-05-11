<template>
  <div class="sw-background h-full">
    <div class="flex align-items-center sw-text sw-page-title pt-3 pl-4 pr-4">
      {{ getCategoryFromRoute }}
      <i
        v-if="loading"
        class="pi pi-spin pi-spinner"
        style="font-size: 1.2rem"
      ></i>
      <div style="flex-grow: 1"></div>
      <v-button small @click="formDialog = true">New Character</v-button>
    </div>
    <div class="p-4">
      <star-wars-list
        v-if="getCategoryFromRoute === 'People'"
        :data="categoryViewData"
        @erase="erase"
      />
    </div>
    <star-wars-form
      v-model:visible="formDialog"
      mode="New"
      @new="newItemMethod"
    ></star-wars-form>
  </div>
</template>

<script>
import { useAppStore } from "@/store/app";
import StarWarsList from "@/components/StarWarsList.vue";
import { useStoreToast } from "@/store/toast";
import StarWarsForm from "@/components/StarWarsForm.vue";

export default {
  components: {
    StarWarsList,
    StarWarsForm,
  },
  setup() {
    const { getCategory, eraseItem, getMockCategory, editItem, newItem } =
      useAppStore();
    const { toast } = useStoreToast();
    return {
      getCategory,
      eraseItem,
      getMockCategory,
      toast,
      editItem,
      newItem,
    };
  },
  data() {
    return {
      categoryViewData: [],
      loading: false,
      formDialog: false,
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
        // this.categoryViewData = await this.getCategory(
        //   this.$route.params.category
        // );
        this.categoryViewData = this.getMockCategory();
        console.log("this.categoryViewData", this.categoryViewData);
        this.loading = false;
      } else {
        console.log("no category");
      }
    },
    async erase(item) {
      try {
        this.categoryViewData = await this.eraseItem(item);
        this.toast.add({
          severity: "success",
          summary: `${item.name} succesfully removed.`,
          life: 3000,
        });
      } catch (error) {
        this.toast.add({
          severity: "error",
          summary: `There was an error removing ${item.name}.`,
          life: 3000,
        });
      }
    },
    async newItemMethod(event) {
      try {
        await this.newItem(event);
        this.formDialog = false;
        this.toast.add({
          severity: "success",
          summary: `${event.name} succesfully added.`,
          life: 3000,
        });
      } catch (error) {
        this.toast.add({
          severity: "error",
          summary: `There was an error adding ${event.name}.`,
          life: 3000,
        });
      }
    },
  },
};
</script>
