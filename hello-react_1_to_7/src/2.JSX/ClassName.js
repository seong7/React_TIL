import React from "react";
import "./ClassName.css";

function ClassName(){
    const name = "React";
    
    return <div className="myClass">{name}</div>;
}
// className 대신 class 를 쓰면 console에 경고
/* 
Warning: Invalid DOM property `class`. Did you mean `className`?
    in div (at App.js:6)
    in App (at src/index.js:7)
*/ 
export default ClassName;