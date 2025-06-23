import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/component",
    },
    {
      path: "/component",
      component: () => import("@/views/Component.vue"),
    },
    {
      path: "/mustache",
      component: () => import("@/views/Mustache.vue"),
    },
    {
      path: "/chapter3",
      name: "Chapter3",
      component: () => import("@/views/Chapter3.vue"),
    },
    {
      path: "/chapter4",
      name: "Chapter4",
      component: () => import("@/views/Chapter4.vue"),
    },
    {
      path: "/chapter5",
      name: "Chapter5",
      component: () => import("@/views/Chapter5.vue"),
    },
    {
      path: "/chapter6",
      name: "Chapter6",
      component: () => import("@/views/Chapter6.vue"),
    },
    {
      path: "/chapter7",
      name: "Chapter7",
      component: () => import("@/views/Chapter7.vue"),
    },
    {
      path: "/chapter8",
      name: "Chapter8",
      component: () => import("@/views/Chapter8.vue"),
    },
  ],
});

export default router;
