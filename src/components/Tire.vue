<script setup>
const props = defineProps({
  color: String,
});
</script>

<template>
  <!-- :style 이것은 vue문법
            중괄호 2개 겹쳐져 있는 것은 콧수염(Mustache 템플릿)
    -->
  <div :style="{ color: props.color || 'black' }">
    {{ props.color || "BLACK" }} TIRE
  </div>
</template>

<style scoped></style>
