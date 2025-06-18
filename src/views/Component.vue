<script setup>
import FrontWheel from "@/components/FrontWheel.vue";
import RearWheel from "@/components/RearWheel.vue";
</script>

<template>
  <div class="car">
    <FrontWheel />
    <RearWheel />
  </div>
</template>

<style scoped>
.car {
  display: flex;
  gap: 10px;
}
</style>
