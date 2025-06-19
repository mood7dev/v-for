<script setup>
const props = defineProps({
  color: String,
});
</script>

<template>
  <!-- :style 이것은 vue문법
            중괄호 2개 겹쳐져 있는 것은 콧수염(Mustache 템플릿)
    -->
  <!--  {{  }} : template(HTML) 안에서 상수 혹은 변수에 담겨있는 값을 표시할 때 사용하며,
                JavaScript 객체의 데이터를 바인딩하여 사용자에게 보여주기 위해 쓰인다.  
  -->

  <div :style="{ color: props.color }">{{ props.color || "BLACK" }} TIRE</div>
</template>

<style scoped></style>
