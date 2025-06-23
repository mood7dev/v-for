<script setup>
import { ref, reactive, nextTick } from "vue";
const pushUp = ref(0);
/* ref()는 반응형으로 고나리되는 값이 담긴 특별한 상자 객체를 만들어서,
그 상자에 대한 **주소(참조값)**을 반환(리턴)하고,
실제 값은 그 상자의 value 속성 안에 저장된다.
: 단일 값 반응형 // .value 
 */

const state = reactive({
  sitUp: 0, //윗몸 일으키기 개수
});
/*
reactive() : 객체를 반응형 상태로 만들어 주는 함수
전달된 객체 {sitUp: 0}를 반응형 객체로 변환한다.
이 값을 사용하는 컴포넌트가 자동으로 다시 레너링되며 상태를 관리하고 변경사항에 따라 업데이트 됨.
: 객체 전체 반응형 // state.
*/

const increasePushUp = () => {
  pushUp.value++;
  nextTick(() => {
    console.log(document.querySelector("#pushUp").innerText);
  });

  console.log("푸시업 이벤트 발생!", pushUp.value);
};
const increaseSitUp = () => {
  state.sitUp++;
  nextTick(() => {
    console.log(document.querySelector("#sitUp").innerText);
  });

  console.log("싯업 이벤트 발생!", state.sitUp);
};
</script>

<template>
  <h3>Chapter5.vue - 반응형 상태</h3>
  <br />
  <hr />
  <div id="pushUp">팔 굽혀 펴기 : {{ pushUp }}</div>
  <div id="sitUp">윗몸 일으키기 : {{ state.sitUp }}</div>
  <hr />
  <br />
  <button @click="increasePushUp()">팔 굽혀 펴기 증가</button>
  <button @click="increaseSitUp()">윗몸일으키기 증가</button>
</template>

<style scoped></style>
