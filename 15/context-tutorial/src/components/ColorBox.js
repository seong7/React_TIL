import React from "react";
import ColorContext from "../contexts/color";

const ColorBox = () => {
  return (
    // Consumer 로 지정해 ColorContext 를 사용한다.
    <ColorContext.Consumer>
      {(value) => (
        // value 는 ColorContext 객체가 된다.
        <div
          style={{
            width: "64px",
            height: "64px",
            background: value.color,
          }} // 객체형태로 style 객체를 넣어준다.
        />
      )}
      {/* 
        함수를 child 로 넣어줌 : 
        Function as a child 또는 Render Props 라고 부름 
        
        자식 컴포넌트는 해당 함수를 
        props children 값으로 받아 함수를 실행한다.
      */}
    </ColorContext.Consumer>
  );
};

export default ColorBox;
