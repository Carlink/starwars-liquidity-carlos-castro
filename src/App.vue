<template>
  <v-toast />
  <div class="h-screen">
    <router-view />
  </div>
</template>

<script setup>
import { useToast } from "primevue/usetoast";
import { useStoreToast } from "@/store/toast";

const toastPrime = useToast();
const store = useStoreToast();

store.toast = toastPrime;
</script>
