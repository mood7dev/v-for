<script setup></script>

<template>
  <router-link to="/component">Component</router-link>
  <router-link to="/mustache">Mustache Template</router-link>
  <router-view />
</template>

<style scoped>
router-link {
  margin-right: 10px;
  text-decoration: none;
  color: #42b983;
}
</style>
