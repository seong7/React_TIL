import React, { useState } from "react";
import Counter from "../components/Counter";
import { connect } from "react-redux";
import { increaseAsync, decreaseAsync } from "../modules/counter_thunk";

const CounterContainer = ({ number, increaseAsync, decreaseAsync }) => {
  console.log(number);
  return (
    <Counter
      number={number}
      onIncrease={increaseAsync}
      onDecrease={decreaseAsync}
    />
  );
};

const mapStateToProps = (state) => {
  // 해당 함수의 return 값은 props 으로 넘겨질 수 있다.

  // store 에 저장된 state 를 모두 받아온다.
  // console.log(state);

  /*  
    출력 (전체 state 가 모두 넘어옴): 
       {
        counter: {number: 0}
        counter_thunk: 0
       }
  */
  return {
    number: state.counter_thunk,
  };
};
const mapDispatchToProps = {
  increaseAsync,
  decreaseAsync,
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
