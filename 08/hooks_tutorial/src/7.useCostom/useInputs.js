import {useReducer} from 'react';

function reducer(state, action){
    return {
        ...state,
        [action.name] : action.value
    };
}

// customize 된 useReducer 함수 export
export default function useInputs (initialForm) {
    const [state, dispatcher] = useReducer(reducer, initialForm);
    const onChange = e => {

    }
    return [state, onChange];       // 배열 형태로 state 와 onChange  함수 return
                                    // 배열로 return 하면 비구조화 할당에 유리하다.
};
