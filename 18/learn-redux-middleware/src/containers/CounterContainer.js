import React from "react";
import Counter from "../components/Counter";
import { connect } from "react-redux";
import { increase, decrease } from "../modules/counter";

const mapStateToProps = (state) => {
  // return state;
  return {
    number: state.counter.number,
  };
};
const mapDispatchToProps = {
  increase,
  decrease,
};

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);
