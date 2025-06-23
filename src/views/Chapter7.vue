<script setup>
import { reactive } from "vue";
const state = reactive({
  player: "kim",
});

const state2 = reactive({
  form: {
    id: "",
    pw: "",
  },
});

const login = () => {
  alert(state2.form.id + "님 환영합니다!");
};
</script>

<template>
  <h3>Chapter7.vue - 데이터 바인딩</h3>
  <h1>{{ state.player }}</h1>

  <div>
    <h5>단방향 데이터 바인딩</h5>
    <input type="text" :value="state.player" />
    <h5>양방향 데이터 바인딩</h5>
    <input type="text" v-model="state.player" />
  </div>
  <br />
  <!-- 로그인 함수 실행 -->
  <form @submit.prevent="login">
    <!-- 양방향 데이터 바인딩-->
    <input type="text" v-model="state2.form.id" placeholder="아이디" />
    <input type="password" v-model="state2.form.pw" placeholder="비밀번호" />

    <!-- 제출을 위한 버튼 -->
    <button type="submit">로그인</button>
  </form>
</template>

<style scoped></style>
