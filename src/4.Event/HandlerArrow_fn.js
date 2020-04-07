import React, { useState } from 'react';

const HandlerArrow_fn = () => {
    const [username, setUsername] = useState("");
    const [text, setText] = useState("");
    const onChangeUsername = e => setUsername(e.target.value);
    const onChangeText = e => setText(e.target.value);
    const onClick = () => {
        alert(username + ": " + text);
        setUsername("");
        setText("");
    };
    const onKeyPress = e => {
        if(e.key ==="Enter"){
            onClick();
        }
    };

    return (
        <div>
            <h1>이벤트 연습 (함수형)</h1>
            <input
                type="text"
                name="username"
                placeholder = "사용자명"
                value={username}
                onChange={onChangeUsername}
            />
            <input
                type="text"
                name="text"
                placeholder="try anything"
                value={text}
                onChange={onChangeText}
                onKeyPress={onKeyPress}
            />
            <button onClick = {onClick}>확인</button>
        </div>
    );
};

export default HandlerArrow_fn;