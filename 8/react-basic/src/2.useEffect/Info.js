import React, { useState, useEffect} from 'react';

const Info = () => {
    const [form, setForm] = useState({
        name : "",
        nickName : "",
    })
    
    // component reder 때마다 실행됨 (Class 형 component 의 comopnentDidMount 와 componentDidUpdate 합친 형태)
    useEffect(() => {
        console.log("rendering 완료 => useEffect 실행 !");
        console.log([
            form.name,
            form.nickName
        ])

        return () => {
            /* 함수를 return 시키기 (CleanUp 함수) : Unmount 되기 전 , Update 직전에 실행됨 */
            console.log("Clean UP 함수 : Unmount 전 또는 Update 직전에 실행됨");
        }
    }, [    form.name, form.nickName

        
        /* useEffect 의 두번째 Parameter 인 배열의 요소에서 useEffect 가 실행되는 조건을 설정 가능*/
            /* 
                1. 빈 배열 : 최초 render 때만 useEffect 실행됨
                   ** 빈 배열일 때 : unmount 가 일어나면 cleanUp 함수만 실행된다 !! **
                2. useState 가 관리하고 있는 state 값
                3. 부모 component 에 의해 전해진 props 내의 값
                   ** 2, 3 번의 경우 값이 이전 값과 동일한지 비교 후 실행 여부 판단 함
                   ** 중요 ! rendering 과 useEffect 함수의 실행은 독립적임 (render 가 먼저이고, render는 어쨋든 됨) 
            */
    ])

    const onChangeName = e => {
        setForm({
            ...form,
            name : e.target.value
        })
    }
    const onChangeNickName = e => {
        setForm( {
            ...form,
            nickName : e.target.value
        })
    }
    return (
        <div>
            <input placeholder={"이름"} value={form.name} onChange={onChangeName}/>
            <input placeholder={"별명"} value={form.nickName} onChange={onChangeNickName}/>
            <div>
                <b>이름 : </b> {form.name}
            </div>
            <div>
                <b>별명 : </b> {form.nickName}
            </div>
        </div>
    );
};

export default Info;