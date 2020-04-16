import React from "react";
import { ColorProvider } from "./contexts/color_dynamic";
// 동적 구현 코드 import 부분
import ColorBox_dynamic from "./components/ColorBox_dynamic";
import SelectColors_dynamic from "./components/SelectColors_dynamic";

// hook 사용 코드 import 부분
import ColorBox_hook from "./components/ColorBox_hook";
import SelectColors_hook from "./components/SelectColors_hook";

// contextType 사용 코드 import 부분
import SelectColors_contextType from "./components/SelectColors_contextType";

const App = () => {
  return (
    // ColorProvider 컴포넌트는 color_dynamic.js 에서 return 되어 있음
    <ColorProvider>
      <div>
        <SelectColors_dynamic />
        <ColorBox_dynamic />
      </div>
      <hr />
      <div>
        <SelectColors_hook />
        <ColorBox_hook />
      </div>
      <div>
        <SelectColors_contextType />
      </div>
    </ColorProvider>
  );
};

export default App;
