<script setup>
import { ref } from "vue";

const fruits = ["apple", "banana", "pear"];
const sprts = [
  { id: 1, name: "농구" },
  { id: 2, name: "축구" },
  { id: 3, name: "배구" },
];

const pop = (message) => alert(message);
const pop2 = () => alert("파라미터 없음");
</script>

<template>
  <h1>Chapter4.vue</h1>
  <div v-for="(fruit, index) in fruits" :key="index">
    {{ index + 1 }}. {{ fruit }}
  </div>

  <!--v-for문-->
  <select>
    <option v-for="item in sprts" :key="item.id" :value="item.id">
      {{ item.name }}
    </option>
  </select>

  <select>
    <option value="1">농구</option>
    <option value="2">축구</option>
    <option value="3">배구</option>
  </select>

  <button @click="pop('반가워')">Hello</button>
  <button v-on:click="pop2">Hello pop2</button>
</template>
