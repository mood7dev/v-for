<script setup>
const message = "There 1";
const messageObj = { name: "kim", age: 20 };
const pageId = "history";
let loading = false;
const parent = "fruits";
const child = "item";
const fruitList = ["사과", "바나나", "딸기", "배"];
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
  <div>Hello, messageObj.name: <span v-text="messageObj.name"></span></div>
  <div :id="pageId">페이지 아이디 div</div>

  <input type="text" placeholder="아이디" :readonly="loading" />
  <input type="password" placeholder="비밀번호" :readonly="loading" />
  <button :disabled="loading">로그인</button>

  <ul :class="parent"></ul>
  <!--v-for-->
  <li :key="idx" v-for="(item, idx) in fruitList" :class="child">
    {{ item }}
  </li>
</template>

<style scoped>
#history {
  color: red;
}
</style>
