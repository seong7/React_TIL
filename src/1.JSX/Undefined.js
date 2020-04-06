import React from "react";

function Undefined () {
    if(false){
        {/* undefined 변수 출력하면 에러 발생 
            Error: Undefined(...): Nothing was returned from render.
        */}
        const name = undefined;
        return name;
    }
    if(false){
        {/* undefined 에러 방지 법 : */}
        const name = undefined;
        return name || "값이 undefined 입니다.";
    }
    if(false){
        {/* JSX 내부에서는 undefined 출력 가능 */}
        const name = undefined;
        return <div>{name}</div>
        {/* div 내에 빈값 출력 */}
    }
    if(true){
        {/* JSX 내부에서는 undefined 방지 */}
        const name = undefined;
        return <div>{name || "name 값이 undefined 입니다."}</div>
    }
}

export default Undefined;