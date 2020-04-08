import React, {useState, useMemo, useCallback, useRef} from 'react';

const getAverage = list => {
    console.log("Average 계산 중...");
    if(list.length === 0) return 0;
    const sum = list.reduce((a, b) => a + b);
    return sum / list.length;
};

const AverageMemo = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState("");
    const inputEl = useRef(null);               // inputEl 객체 의 current property 가 요소를 가리킴


    /* useCallback 사용 */
    
    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []);
    
    const onInsert = useCallback(e=>{
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber("");
        inputEl.current.focus();                // inputEl.current 는 해당 event handler 가 달려진 요소를 기리킴
    }, [number, list]) 
    

    const avg = useMemo(() => getAverage(list), [list]); 

    return (
        <div>
            <input value={number} onChange={onChange} ref={inputEl}/>  {/* ref 값으로 inputEl 달아줌 */}
            <button onClick={onInsert}>등록</button>
            <ul>
                {list.map((value, index) => (
                    <li key={index}>{value}</li>
                ))}
            </ul>
            <div>
                <b>Average : </b> {avg} {/*useMemo 사용 ! */}
            </div>
        </div>
    );
};

export default AverageMemo;