import React, { useState } from 'react';

const HandlerForm_fn = () => {
    const [form, setForm] = useState({
        username: "",
        text: ""
    })
    const { username: name, text } = form;    // 변수 선언 (객체의 비구조화는 객체 형태로 함)
        // 비구조화에서 변수를 rename 하여 사용하는 법

    const onChange = e => {
        const nextForm = {
            ...form, // 기존의 form 내용 복사
            [e.target.name] : e.target.value // 수정 원하는 값 덮어 씌움
        }
        setForm(nextForm);  // 새로운 nextForm 을 set 에 넣어줌
    }
    const onClick = () => {
        alert(name + ": " + text);
        // setUsername("");
        // setText("");
        setForm({
            username: "",
            text: ""
        })
    };
    const onKeyPress = e => {
        if(e.key ==="Enter"){
            onClick();
        }
    };

    return (
        <div>
            <h1>이벤트 연습 (함수형 _ form 사용)</h1>
            <input
                type="text"
                name="username"
                placeholder = "사용자명"
                value={name}
                onChange={onChange}
            />
            <input
                type="text"
                name="text"
                placeholder="try anything"
                value={text}
                onChange={onChange}
                onKeyPress={onKeyPress}
            />
            <button onClick = {onClick}>확인</button>
        </div>
    );
};

export default HandlerForm_fn;