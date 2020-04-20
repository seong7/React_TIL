import React from 'react';
import Counter from '../components/Counter';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';
import { increase, decrease } from '../modules/counter';

// 1. mapStateToProps 함수 정의
// (store 에 저장된 reducer 의 전체 state 를 변수에 담아 해당 컴포넌트의 props 로 전달한다.)
const mapStateToProps = (state) => {
  console.log(state);
  return {
    number: state.counter.number, // 전체 state 이므로 접근해줘야함
  };
};

// 2. mapDispatchToProps 함수 정의
// (store 에 저장된 reducer 의 전체 state 를 변수에 담아 해당 컴포넌트의 props 로 전달한다.)

/* 2-1. 방법 1  _ 기본*/
// const mapDispatchToProps = (dispatch) => ({
//   increase: () => {
//     // console.log('increase'); // test
//     dispatch(increase());
//   },
//   decrease: () => {
//     // console.log('decrease'); // test
//     dispatch(decrease());
//   },
// });

/* 2-2. 방법 2 _ redux _ bindActionCreator 사용*/
// const mapDispatchToProps = (dispatch) =>
//   bindActionCreators(
//     {
//       increase,
//       decrease,
//     },
//     dispatch,
//   );

/* 2-3. 방법 3 _ connect 함수가 자동으로 bindActionCreator 작업을 대신 해준다 */
const mapDispatchToProps = {
  increase,
  decrease,
};

// 3. component render
// (store 에 저장된 reducer 의 전체 state 를 변수에 담아 해당 컴포넌트의 props 로 전달한다.)
const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onIncrease={increase} onDecrease={decrease} />
  );
};

// 4. 위에서 정의한 두 map 함수를 매개변수로 redux 와 컴포넌트 사이에 connection 생성해준다.
/*
    const makeContainer = connect(mapStateToProps, mapDispatchToProps)
    export default makeContainer(타깃 컴포넌트)
    
    한줄로 작성하면 아래와 같다.*/
export default connect(mapStateToProps, mapDispatchToProps)(CounterContainer);

/* 
또는 아래처럼 export 문에 익명함수 형태로 써줘도 된다. (가독성 떨어져 보임...?)

export default connect(
  state => ({
    number: state.counter.number,
  }),
  dispatch => 
    bindActionCreators(
        {
            increase,
            decrease,
        },
        dispatch,
    ),
)(CounterContainer);
*/
