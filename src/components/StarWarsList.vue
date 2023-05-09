<template>
  <div class="card">
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
  </div>
</template>

<script>
export default {
  props: {
    data: {
      required: true,
    },
  },
  data() {
    return {
      products: null,
    };
  },
  methods: {
    remove(item) {
      this.$emit("erase", item);
    },
  },
};
</script>
