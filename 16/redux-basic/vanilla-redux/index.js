import { createStore } from "redux"; //redux 에서 함수 불러옴

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

// 액션 type (이름) 선언 (문자열 형태 / 고유값 / 주로 대문자)
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

// 액션 생성 함수 (액션 객체는 반드시 type 을 가져야함)
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECREASE });

// state 초기화
const initialState = {
  toggle: false,
  counter: 0,
};

// reducer 함수
function reducer(state = initialState, action) {
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, // 불변성 유지
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}

// store 생성
const store = createStore(reducer);

// render 함수 만들기
/* 
   state 가 업데이트될 때마다 호출된다. (subscribe)

   (여기서는 리액트의 render 함수와는 다르게 
   이미 html을 사용하여 만들어진 UI의 속성을 
   상태에 따라 변경해 주자.)
*/
const render = () => {
  const state = store.getState(); // 현재 state 불러옴 (store 의 내장 함수)
  // 토글 처리
  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }
  // 카운터 처리
  counter.innerText = state.counter;
};

render();

// subscribe 해주기 (store 의 내장함수)
store.subscribe(render);
// state 가 업데이트 될 때마다 render 함수를 호출하게 된다.

// dispatch 로 액션 발생시키기 (Event) (dispatch : store 의 내장함수)
divToggle.addEventListener("click", () => store.dispatch(toggleSwitch()));
btnIncrease.addEventListener("click", () => store.dispatch(increase(1)));
btnDecrease.addEventListener("click", () => store.dispatch(decrease()));
