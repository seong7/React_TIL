import React, { createContext, useState } from "react";

const ColorContext = createContext({
  // 매개변수는 초기 값
  // 파일 중간의 Provider 에서 value 에 넣는 값과 일치시키는 게 좋음
  //    - 가동성 향상
  //    - 실수로 Provider 사용하지 않았을 때도 에러 발생하지 않음
  state: { color: "black", subcolor: "red" },
  actions: {
    setColor: () => {},
    setSubColor: () => {},
  },
});

// ColorContext.Provider 를 렌더링하는 Context 컴포넌트 생성
const ColorProvider = ({ children }) => {
  const [color, setColor] = useState("black");
  const [subcolor, setSubcolor] = useState("red");

  const value = {
    state: { color, subcolor },
    actions: { setColor, setSubcolor },
  };
  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

// const ColorConsumer = ColorContext.Consumer 와 같은 의미
const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer }; // provider, consumer export 하기
export default ColorContext;
