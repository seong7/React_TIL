import React, {useState, useMemo, useCallback} from 'react';

const getAverage = list => {
    console.log("Average 계산 중...");
    if(list.length === 0) return 0;
    const sum = list.reduce((a, b) => a + b);
    return sum / list.length;
};

const AverageMemo = () => {
    const [list, setList] = useState([]);
    const [number, setNumber] = useState("");

    // const onChange = (e) => {
    //     setNumber(e.target.value);   
    // }
    // const onInsert = () => {
    //     const nextList = list.concat(parseInt(number)); 
    //     setList(nextList);                              
    //     setNumber("");                                  
    // }

    // 위의 코드대로 하면, 컴포넌트 re-rendering 될 때마다 해당 event handle function 들이 새로 선언됨

    /* useCallback 사용하는 법 */
    
    const onChange = useCallback(e => {
        setNumber(e.target.value);
    }, []); // 빈 배열 : 컴포넌트가 처음 렌더링 될 때만 함수를 생성한다.
                // 해당 함수는 현재 state 에 의존하고 있지 않으므로 빈 배열로 생성 가능
    
    const onInsert = useCallback(e=>{
        const nextList = list.concat(parseInt(number));
        setList(nextList);
        setNumber("");
    }, [number, list]) // number 혹은 list 가 바뀌없을 때만 함수 생성한다. (useMemo 와 비슷한 원리)
                // onInsert 는 현재의 list 와 number state 값에 의존하고 있으므로
                // 반드시 배열을 넣어줘야한다. 
    
    

    const avg = useMemo(() => getAverage(list), [list]); 

    return (
        <div>
            <input value={number} onChange={onChange}/>
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