import React from 'react';
import useInputs from "./useInputs";    // comtom Hook 인 useInputs import 함

const Info = () => {
    cosnt [state, onChange] = useInputs({       // Hook 사용해 state 와 onChange 비구조화 할당 
        name: "",
        nickName : ""
    })
    const {name, nickName} = state;

    return (
        <div>
            <div>
                <input name="name" value={name} onChange={onChange}/>
                <input name="nickName" value={nickName} onChange={onChange} />
            </div>
            <div>
                <div>
                    <b>이름 : </b> {name}
                </div>
                <div>
                    <b>닉네임 : </b>  {nickName}
                </div>
            </div>
        </div>
    );
};

export default Info;