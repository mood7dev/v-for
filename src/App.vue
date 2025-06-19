<script setup>
import { ref } from "vue";
import Component from "@/views/Component.vue";
import Mustache from "@/views/Mustache.vue";

const showComponent = ref(false);
const showMustache = ref(false);

function toggleComponent() {
  showComponent.value = !showComponent.value;
}
function toggleMustache() {
  showMustache.value = !showMustache.value;
}
</script>

<template>
  <router-link to="/component" class="link">Component</router-link>
  <router-link to="/mustache" class="link">Mustache Template</router-link>

  <button @click="toggleComponent">
    {{ showComponent ? "컴포넌트 닫기" : "컴포넌트 열기" }}
  </button>
  <button @click="toggleMustache">
    {{ showMustache ? "콧수염템플릿 닫기" : "콧수염템플릿 열기" }}
  </button>

  <div v-if="showComponent">
    <Component />
  </div>

  <div v-if="showMustache">
    <Mustache />
  </div>
</template>

<style scoped>
.link {
  margin-right: 10px;
  text-decoration: none;
  color: #42b983;
}

button {
  margin-right: 10px;
  padding: 6px 12px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
</style>
