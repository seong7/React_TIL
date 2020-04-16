import React from "react";
import logo from "./logo.svg";
import "./App.css";
import ColorBox from "./components/ColorBox";
import ColorContext from "./contexts/color";

function App() {
  return (
    // value 값을 정해주는 Provider 사용 방법
    // Provider 를 사용하면 꼭 value 를 정해주어야 한다. OR error 발생
    <ColorContext.Provider value={{ color: "red" }}>
      <div>
        <ColorBox />
      </div>
    </ColorContext.Provider>
  );
}

export default App;
