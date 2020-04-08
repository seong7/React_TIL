import React, { useState } from 'react';
import Info from "./2.useEffect/Info";
import Counter from "./3.useReducer/Counter";
import InputReducer from "./3.useReducer/InputReducer";
import AverageMemo from "./4.useMemo/AverageMemo";
import AverageCallback from "./5.useCallback/AverageCallback";
import AverageRef from "./6.useRef/AverageRef";

function App() {
  // const [visible, setVisible] = useState("visible");  // text 값으로 초기화 해줌 
  const [visible, setVisible] = useState(false);

  return (
    <div className="App">
      <button
        onClick={()=>{
          setVisible(!visible)                        // ! text 하면 false 로 바뀜
        console.log(!visible)}}
      >{visible ? "숨기기" : "보이기"}</button>
      <hr/>
      {visible && <Info/>} {/* Compoenent 이름 소문자로 하면 인식 못함*/}
      {/* && 사용해 앞의 조건이 true 이면 뒤의 JSX 실행됨 */}

      <hr/>
      {/* <Counter/> */}
      {/* <InputReducer/> */}
      {/* <AverageMemo/> */}
      {/* <AverageCallback/> */}
      <AverageRef/>
    </div>
  );
}

export default App;
