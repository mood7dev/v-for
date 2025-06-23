<script setup>
import FrontWheel from "@/components/FrontWheel.vue";
import RearWheel from "@/components/RearWheel.vue";
import { useCounterStore } from "@/stores/counter.js";

const counterStore = useCounterStore();
</script>

<template>
  <h1>Component.vue</h1>
  <button @click="counterStore.increment">회전</button>
  <div class="car">
    <FrontWheel />
    <FrontWheel />
  </div>

  <div class="car2">
    <RearWheel />
    <RearWheel />
  </div>
</template>

<style scoped>
.car {
  display: flex;
  gap: 10px;
  padding-bottom: 5px;
}

.car2 {
  display: flex;
  gap: 10px;
  padding-top: 5px;
}
</style>
