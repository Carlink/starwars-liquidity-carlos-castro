// Composables
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import CategoryView from "@/views/CategoryView.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
    meta: { transition: "slide-left" },
  },
  {
    path: "/:category",
    name: "Category",
    component: CategoryView,
    meta: { transition: "slide-left" },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
