import React, { useContext } from "react";
import ColorContext from "../contexts/color_dynamic";

const colors = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"];

const SelectColors = () => {
  const { actions } = useContext(ColorContext);
  return (
    <div>
      <h2>색상을 선택하세요.</h2>
      {/* children 이 함수가 아니어도 됨 */}
      <div style={{ display: "flex" }}>
        {colors.map((color) => (
          <div
            key={color}
            style={{
              background: color,
              width: "30px",
              height: "30px",
              cursor: "pointer",
            }}
            onClick={() => actions.setColor(color)}
            // 아래는 마우스 우클릭 이벤트
            onContextMenu={(e) => {
              e.preventDefault(); // 우클릭 기본 동작 방지
              actions.setSubcolor(color);
            }}
          />
        ))}
      </div>
      <hr />
    </div>
  );
};

export default SelectColors;
