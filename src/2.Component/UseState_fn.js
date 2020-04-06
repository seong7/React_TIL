import React, { useState }from 'react';

const UseState_fn = () => {
    const [text, setText] = useState("");   // useState 로 생성한 state 객체의 요소 : [ state 객체 , Setter 함수 ] (이름은 개발자가 지을 수 있음)
    const onClickEnter = () => setText("Hi!");
    const onClickLeave = () => setText("Bye!");

    const [color, setColor] = useState("black");    // 또 다른 useState

    return (
        <div>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{ color }}>{text}</h1>
            <button style={{color : "red"}} onClick={() => setColor("red")}>
                빨간색
            </button>
            <button style={{color : "green"}} onClick={() => setColor("green")}>
                초록색
            </button>
            <button style={{color : "blue"}} onClick={() => setColor("blue")}>
                파란색
            </button>
        </div>
    );
};

export default UseState_fn;


// state 내에 있는 객체 또는 배열 값을 조작할 때
if(false){
    // 객체 다루기
    const object = { a: 1, b: 2, c: 3 };
    const nextObject = { ...object, b: 2 }; // 사본을 만들어서 b 값만 덮어 쓰기
    
    // 배열 다루기
    const array = [
    { id: 1, value: true },
    { id: 2, value: true },
    { id: 3, value: false }
    ];
    let nextArray = array.concat({ id: 4 }); // 새 항목 추가
    nextArray.filter(item => item.id !== 2); // id가 2인 항목 제거 (callback 함수를 true 로 return 하는 요소들만으로 새로운 배열 만들어 return 함)
    nextArray.map(item => (item.id === 1 ? { ...item, value: false } : item)); // id가 1인 항목만 value 값을 false 로 변경 
                                                                               // (callback 함수의 return 값들로 새로운 배열 만들어 return))
                                        // value 외 다른 요소들은 ... 로 그대로 입력
                                            

}
