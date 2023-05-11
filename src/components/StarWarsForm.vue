<template>
  <v-dialog
    v-model:visible="containerVisible"
    v-if="containerVisible"
    :modal="true"
    :draggable="false"
    style="width: 400px"
  >
    <div class="flex flex-column gap-2 mb-3">
      <label for="name">Name</label>
      <v-input-text v-model="form.name" type="text" id="name" class="w-full" />
    </div>
    <div class="flex flex-column gap-2 mb-3">
      <label for="gender">Gender</label>
      <v-dropdown
        id="gender"
        v-model="form.gender"
        :options="[
          { value: 'male', label: 'Male' },
          { value: 'female', label: 'Female' },
          { value: 'no', label: 'n/a' },
        ]"
        option-label="label"
        option-value="value"
      >
      </v-dropdown>
    </div>
    <div class="flex flex-column gap-2 mb-3">
      <label for="birth">Birth Year</label>
      <v-input-text
        v-model="form.birth_year"
        type="text"
        id="birth"
        class="w-full"
      />
    </div>
    <div class="flex flex-column gap-2 mb-3">
      <label for="height">Height</label>
      <v-input-text
        v-model="form.height"
        type="number"
        id="height"
        class="w-full"
      />
    </div>
    <div class="flex flex-column gap-2 mb-3">
      <label for="mass">Mass</label>
      <v-input-text
        v-model="form.mass"
        type="number"
        id="mass"
        class="w-full"
      />
    </div>

    <template #footer>
      <v-button @click="() => (mode === 'Edit' && edit()) || newItem()">{{
        mode
      }}</v-button>
    </template>
  </v-dialog>
</template>

<script>
export default {
  emits: ["update:visible", "edit", "new"],
  mounted() {
    this.form = {
      name: this.editForm.name,
      gender: this.editForm.gender,
      birth_year: this.editForm.birth_year,
      height: this.editForm.height,
      mass: this.editForm.mass,
    };
    console.log("RECEIVED FORM", this.editForm);
  },
  props: {
    visible: {
      type: Boolean,
      default: false,
    },
    editForm: {
      default: {
        name: "",
        gender: "male",
        birth_year: 0,
        height: 0,
        mass: 0,
      },
    },
    mode: {
      default: "Edit",
    },
  },
  data() {
    return {
      containerVisible: this.visible,
      form: {
        name: "",
        gender: "male",
        birth_year: 0,
        height: 0,
        mass: 0,
      },
    };
  },
  watch: {
    containerVisible(val) {
      this.$emit("update:visible", val);
      this.form = { ...this.editForm };
    },
  },
  updated() {
    if (this.visible) {
      this.containerVisible = this.visible;
    } else {
      this.containerVisible = false;
    }
  },
  methods: {
    edit() {
      this.$emit("edit", this.form);
    },
    newItem() {
      this.$emit("new", this.form);
    },
  },
};
</script>
