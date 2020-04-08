import React from "react";

function InlineStyle(){
    const name = "React";
    const style = {
        backgroundColor : "black",
        color: "aqua",
        fontSize: "48px",
        fontWeight: "bold",
        padding: "16px",
    };
    {/* 단위 반드시 신경써서 입력하기 */}
    
    return <div style={style}>{name}</div>;
}

export default InlineStyle;