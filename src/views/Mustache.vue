<script setup>
const message = "There 1";
const messageObj = { name: "kim", age: 20 };
</script>

<template>
  <h1>Mustache.vue</h1>
  <div>
    Hello, <span>{{ message }}</span>
  </div>
  <!-- v-text는 directive '디렉티브'라고 불느다.
        v- 시작하는 속성은 전부 디렉티브이다.
  -->
  <div>Hello, <span v-text="message"></span></div>
  <div>Hello, messageobj.kim: <span v-text="messageObj.name"></span></div>
</template>

<style scoped></style>
