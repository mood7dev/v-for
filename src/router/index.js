import { createRouter, createWebHistory } from "vue-router";
import Component from "@/views/Component.vue";
import Mustache from "@/views/Mustache.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/component",
      name: "Component",
      component: Component,
    },
    {
      path: "/mustache",
      name: "Mustache",
      component: Mustache,
    },
  ],
});

export default router;
