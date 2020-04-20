import { createAction, handleActions } from "redux-actions";

/* redux-thunk 구현 */

const INCREASE = "counter/INCREASE";
const DECREASE = "counter/DECREASE";

// 1. Action 생성함수 정의
export const increase = () => ({
  type: INCREASE,
});
export const decrease = () => ({
  type: DECREASE,
});
//(redux-actions 라이브러리 사용하면 아래처럼 만들 수 있음
// export const increase = createAction(INCREASE);
// export const decrease = createAction(DECREASE);

//
//

// 2. Thunk 생성 함수 정의
// (Action 생성함수를 대신해 Container 에서 호출된다. __middleware 로써 작업을 처리하기 위해

// 1초 뒤 increase 혹은 decrease 함수를 디스패치함
//    thunk 로 함수 dispatch (함수 형태로 묶어 작업을 지연시키는 형태)
//    일반 Action 생성 함수처럼 Action 객체가 아니라 함수를 반환한다.
//    비동기로 코드를 처리하는 것이 목적임
export const increaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(increase()); // 내부에서 Action 생성함수를 실행시켜 dispatch 시킨다.
  }, 1000);
};
export const decreaseAsync = () => (dispatch) => {
  setTimeout(() => {
    dispatch(decrease());
  }, 1000);
};

// 3. state 초기화
const initialState = 0; // 꼭 객체 아니고 숫자여도 작동함

// 4. reducer 정의 (handleActions 함수 (redux-actions) 사용)
const counter_thunk = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;
    default:
      return state;
  }
};
//(redux-actions 라이브러리 사용하면 아래처럼 만들 수 있음
// const counter_thunk = handleActions(
//   {
//     [INCREASE]: (state) => state + 1,
//     [DECREASE]: (state) => state - 1,
//   },
//   initialState
// );

export default counter_thunk;
