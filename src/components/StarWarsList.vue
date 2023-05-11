<template>
  <v-data-table :value="data" tableStyle="min-width: 50rem">
    <v-column field="name" header="Name"></v-column>
    <v-column field="gender" header="Gender">
      <template #body="slotProps">
        <div
          v-if="slotProps.data.gender === 'male'"
          style="font-size: 1.2rem; color: #2986cc"
        >
          ♂
        </div>
        <div
          v-else-if="slotProps.data.gender === 'female'"
          style="font-size: 1.2rem; color: #c90076"
        >
          ♀
        </div>
        <div v-else>{{ slotProps.data.gender }}</div>
      </template>
    </v-column>
    <v-column field="birth_year" header="Birth Year">
      <template #body="slotProps">
        {{ slotProps.data.birth_year }}
      </template>
    </v-column>
    <v-column field="height" header="Height">
      <template #body="slotProps">
        {{ slotProps.data.height }}
      </template>
    </v-column>
    <v-column field="mass" header="Mass">
      <template #body="slotProps">
        {{ slotProps.data.mass }}
      </template>
    </v-column>
    <v-column>
      <template #body="slotProps">
        <i class="pi pi-file-edit mr-3" @click="edit(slotProps.data)"></i>
        <i
          class="pi pi-times"
          style="color: red"
          @click="remove(slotProps.data)"
        ></i>
      </template>
    </v-column>
  </v-data-table>
  <star-wars-form
    v-model:visible="formDialog"
    :editForm="editForm"
    @edit="editItemMethod"
  ></star-wars-form>
</template>

<script>
import StarWarsForm from "@/components/StarWarsForm";
import { useAppStore } from "@/store/app";
import { useStoreToast } from "@/store/toast";

export default {
  setup() {
    const { editItem, categoryViewData } = useAppStore();
    const { toast } = useStoreToast();
    return {
      editItem,
      toast,
      categoryViewData,
    };
  },
  emits: ["erase", "edit"],
  components: {
    StarWarsForm,
  },
  props: {
    data: {
      required: true,
    },
  },
  data() {
    return {
      formDialog: false,
      editIndex: -1,
      editForm: {
        name: "",
        gender: "male",
        birth_year: "",
        height: "",
        mass: "",
      },
    };
  },
  watch: {
    formDialog(val) {
      if (val === false) {
        this.editForm = {};
      }
    },
  },
  methods: {
    remove(item) {
      this.$emit("erase", item);
    },
    edit(item) {
      this.editIndex = this.data.indexOf(item);
      console.log("editing", item);
      this.formDialog = true;
      this.editForm = item;
    },
    async editItemMethod(event) {
      const editResponse = await this.editItem(this.editIndex, event);
      if (editResponse) {
        this.toast.add({
          severity: "success",
          summary: `Item succesfully edited.`,
          life: 3000,
        });
      } else {
        this.toast.add({
          severity: "error",
          summary: `Item was not edited.`,
          life: 3000,
        });
      }

      this.formDialog = false;
    },
  },
};
</script>
