import React, { useContext } from "react";
import ColorContext from "../contexts/color_dynamic";

const ColorBox = () => {
  const { state } = useContext(ColorContext);
  return (
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
  );
};

export default ColorBox;
