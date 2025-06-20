<script setup>
import { ref } from "vue";
import Component from "@/views/Component.vue";
import Mustache from "@/views/Mustache.vue";
import Chapter3 from "@/views/Chapter3.vue";
import Chapter4 from "@/views/Chapter4.vue";
import Chapter5 from "@/views/Chapter5.vue";

const tabs = [
  { name: "Component", label: "컴포넌트", component: Component },
  { name: "Mustache", label: "콧수염 템플릿", component: Mustache },
  { name: "Chapter3", label: "Chapter3", component: Chapter3 },
  { name: "Chapter4", label: "Chapter4", component: Chapter4 },
  { name: "Chapter5", label: "Chapter5", component: Chapter5 },
];

const activeTab = ref(null); // 기본은 아무것도 안 열려 있음

function toggleTab(name) {
  // 같은 탭을 다시 클릭하면 닫기
  activeTab.value = activeTab.value === name ? null : name;
}
</script>

<template>
  <div class="tabs">
    <button
      v-for="tab in tabs"
      :key="tab.name"
      :class="{ active: tab.name === activeTab }"
      @click="toggleTab(tab.name)"
    >
      {{ tab.label }}
    </button>
  </div>

  <div class="tab-content" v-if="activeTab">
    <component :is="tabs.find((tab) => tab.name === activeTab)?.component" />
  </div>
</template>

<style scoped>
.tabs {
  margin-bottom: 16px;
}

button {
  font-family: "Noto Sans KR", "Roboto", sans-serif;
  margin-right: 10px;
  padding: 6px 12px;
  background-color: #e0e0e0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

button.active {
  background-color: #42b983;
  color: white;
}

.tab-content {
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 4px;
}
</style>
