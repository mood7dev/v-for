<script setup>
import { reactive, computed } from "vue";

//반응형 상태
const state = reactive({
  mvpId: 12,
  players: [
    { id: 7, name: "John Doe" },
    { id: 9, name: "John Lee" },
    { id: 12, name: "James Park" },
  ],
});

//if문을 사용한 조건부 반환식
/*
const getMvpName = () => {
  if (state.mvpId) {  // <-- 'state'로 수정
    //state.mvpId가 존재 할 경우
    const player = state.players.find((item) => item.id === state.mvpId); // players 배열에서 mvpid와 일치하는 id를 찾음
    if (player) {
      // 일치하면 player.name 반환
      return player.name;
    }
  }
  return "없음"; // 없으면 "없음" 반환
};
*/

//옵셔널 체이닝을 이용한 반환식
//state 객체 안의 players 배열에서 mvpId와 일치하는 플레이어를 찾아 그 이름을 반환
const getMvpNameNice = () => {
  return state.players.find((item) => item.id === state.mvpId)?.name || "없음";
};

//컴퓨티드
const computedMvpName = computed(() => {
  console.log("computedMvpName 컴퓨티드 !");
  return state.players.find((item) => item.id === state.mvpId)?.name || "없음";
});
</script>

<template>
  <div>
    <h3>Chapter6.vue - find()함수</h3>
    <h1>오늘의 MVP</h1>
    <!-- 이부분(출력방법2: 메서드 호출)
    <div>{{ getMvpName() }}</div>
     -->

    <!-- 이부분(출력방법3: 컴퓨티드 호출) -->
    <div>{{ computedMvpName }}</div>

    <!-- 출력방법1
      <div>
        <template v-if="state.mvpId">
          {{
            state.players.find((item) => item.id === state.mvpId)?.name || "없음"
          }}
        </template>
        <template v-else>없음</template>
      </div>
      -->
  </div>
</template>

<style scoped></style>
