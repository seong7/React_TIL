import React from "react";
import ColorBox from "./components/ColorBox_dynamic";
import { ColorProvider } from "./contexts/color_dynamic";
import SelectColors from "./components/SelectColors";

const App = () => {
  return (
    // ColorProvider 컴포넌트는 color_dynamic.js 에서 return 되어 있음
    <ColorProvider>
      <div>
        <SelectColors />
        <ColorBox />
      </div>
    </ColorProvider>
  );
};

export default App;
