import React, { useReducer } from 'react';

function reducer(state, action) {   // action 은 dispatcher() 함수에서 매개변수로 정해줌
    return {
        ...state,
        [action.name] : action.value        
        // action 에 e.target 으로 DOM 들어오면 name과 value 값을 사용함
    };      // 새로운 객체 return 해서 불변성 유지해야함
}

const InputReducer = () => {           
    // 현재 state, dispatch (reducer 함수 실행, action 값 정해줌)                
    const [state, dispatcher] = useReducer(reducer, { // state 의 초기값 객체
        name: "",
        nickName: "",
    });
    const { name, nickName } = state;
    const onChange = (e) => {
        dispatcher(e.target);   // reducer 함수의 action 에 DOM 요소를 넣고 reducer 실행
        console.log(e.target);
    }
    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}/>
                <input name="nickName" value={nickName} onChange={onChange}/>
            </div>
            <div>
                <div>
                    <b>이름 :</b> {name}
                </div>
                <div>
                    <b>닉네임 :</b> {nickName}
                </div>
            </div>
        </div>
    );
};

export default InputReducer;