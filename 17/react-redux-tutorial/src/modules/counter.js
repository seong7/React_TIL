// 1. action type (이름) 정의
//     변수는 대문자 사용
//     문자열은 '모듈의 이름/액션의 type' 형식 사용
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// 2. action 생성 함수 정의 (export 해줘야함)
export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });

// 3. state 초기화
const initialState = {
  number: 0,
};

// 4. reducer 정의 (직접 호출하지 않고 dispatch 함수를 통해 실행시킨다)
function counter(state = initialState, action) {
  // console.log(state);
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}

export default counter;
