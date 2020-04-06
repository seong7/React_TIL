import React from "react";

function InlineStyle(){
    const name = "React";
    const style = {
        backgroundColor : "black",
        color: "aqua",
        fontSize: "48px",
        fontWeight: "bold",
        padding: "16",
    };
    {/* 단위 생략하면 px 대입됨 */}
    
    return <div style={style}>{name}</div>;
}

export default InlineStyle;