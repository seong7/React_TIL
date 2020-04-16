import React, { useReducer } from "react";

// action : 업데이트를 위해 필요한 정보를 담은 객체
function reducer(state, action) {
  // action.type 에 따라 다른 작업 수행함
  switch (action.type) {
    case "INCREMENT":
      return { value: state.value + 1 }; // 새로운 state return 함
    case "DECREMENT":
      return { value: state.value - 1 };
    default:
      // 아무것도 해당되지 않을 때는 기존 state 반환
      return state;
  }
}

const Counter = () => {
  //                        매개변서 : reducer 함수, state 의 초기값
  const [state, dispatch] = useReducer(reducer, { value: 0 });
  // 현재 state 와 dispatch (__reducer 함수를 실행하며, action 값을 정해줌)
  return (
    <div>
      <p>
        현재 카운터의 값은 <b>{state.value}</b>입니다.
      </p>
      {/* useReducer 의 dispatch 함수 호출 
                             -> reducer 함수의 action 에서 사용할 값 넣어줌
                            (타입은 상관 없음) */}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-1</button>
    </div>
  );
};

export default Counter;
