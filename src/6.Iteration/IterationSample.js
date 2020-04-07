import React, {useState} from 'react';

const IterationSample = () => {
    // const names = ["눈사람", "얼음", "눈", "바람"];
    
    // const nameList = names.map(name => <li>{name}</li>);
                        // 위 처럼 DOM 요소 또는 컴포넌트로도 map() 사용해 배열 만들 수 있음
        // index.js:1 Warning: Each child in a list should have a unique "key" prop.
        // 각 li 에 대한 key 값이 없어 erro 발생함 

    // const nameList = names.map((name, index) => <li key={index}>{name}</li>);
                        // 요소의 idx 를 li 의 key 로 넣어줌
                        // 하지만, index 를 key 로  사용하면, 
                        // 배열이 변경될 때 효율적으로 re-rendering 하지 못함
    

    /* useState 를 활용해 동적인 배열 rendering 하기 */

    const [names, setNames] = useState([
        {id: 1, text: "눈사람"},
        {id: 2, text: "얼음"},
        {id: 3, text: "눈"},
        {id: 4, text: "바람"}
    ]);
    const [inputText, setInputText] = useState("");
    const [nextId, setNextId] = useState(5); // 새로운 항목을 추가할 때 사용할 id
                                             // 다음 차례인 5부터 부여함
    
    const onChange = (e) => setInputText(e.target.value); // input 의 상태 관리
    const onClick = () => {
                                            // 불변성 유지 (push 대신 concat 사용하는 이유)
        const nextNames = names.concat({    // 기존 배열 유지한채로 새로운 배열 생성해서 넣어줌
        id: nextId, 
        text: inputText
        });
        setNames(nextNames);                // 새로운 배열 넣어주는 setter
        setNextId(nextId + 1);
        setInputText("");
    }
    const onRemove = (id) => {  // 요소 삭제하는 함수
        // console.log(id);
        const nextNames = names.filter((c) => c.id !== id); // 불변성 유지 
        setNames(nextNames);                                // 기존 배열 유지한채로 새로운 배열 생성해서 넣어줌
    }
    
    /* map() 으로 li 형성 */
    const nameList = names.map(name => <li key={name.id} onDoubleClick={()=>{onRemove(name.id)}}>{name.text}</li>);
                                        // key 값 으로 id 값 부여
    return (
        <>
            <input
                value={inputText}
                onChange={onChange}/>
            <button onClick={onClick}>리스트에 추가</button>
            <ul>{ nameList }</ul>
            {/* // <ul>
            //     <li>눈사람</li>
            //     <li>얼음</li>
            //     <li>눈</li>
            //     <li>바람</li>
            // </ul> */}
        </>
    );
};

export default IterationSample;