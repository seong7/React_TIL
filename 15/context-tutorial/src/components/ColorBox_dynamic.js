import React from "react";
import { ColorConsumer } from "../contexts/color_dynamic";

const ColorBox = () => {
  return (
    // Consumer 로 지정해 ColorContext 를 사용한다.
    <ColorConsumer>
      {/* {( value ) => ( */}
      {({ state }) => (
        // value 대신 state 를 객체형으로 넣어서 ColorConsumer.state 를 비구조 할당을 했다.
        // 복수의 HTML 요소 또는 컴포넌트를 렌더하기 위해 fragment 사용
        <>
          <div
            style={{
              width: "64px",
              height: "64px",
              background: state.color,
            }} // 객체형태로 style 객체를 넣어준다.
          />
          <div
            style={{
              width: "32px",
              height: "32px",
              background: state.subcolor,
            }} // 객체형태로 style 객체를 넣어준다.
          />
        </>
      )}
      {/* 
        함수를 child 로 넣어줌 : 
        Function as a child 또는 Render Props 라고 부름 
        
        자식 컴포넌트는 해당 함수를 
        props children 값으로 받아 함수를 실행한다.
      */}
    </ColorConsumer>
  );
};

export default ColorBox;
