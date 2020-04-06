import React, { Component } from 'react';

class HandlerArrow_cl extends Component {
    state = {
        text : "",
        username: ""
    }

    // Babel 의 transform-class-properties 문법 !
    // constructor 에서 binding 을 따로 해주지 않아도 됨

    // method 선언은 화살표 함수로
    handleChange = (e) => {
        this.setState({
            // text : e.target.value
            [e.target.name] : e.target.value // 중요한 부분    
                                            // [ ] 로 key 를 동적으로 부여함
                                            // input 이 두개 이상일 때는 name 속성으로 컨트롤
        });
    }
    handleClick = () => {
        // alert(this.state.text);
        alert(this.state.username + ': ' + this.state.text );
        this.setState({
            text: "",
            username: ""
        });
    }
    handleKeyPress = (e) => {
        console.log(e);
        if(e.key === "Enter") {
            this.handleClick();
        }
    }

    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    type="text"
                    name="username"
                    placeholder="user name"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <input
                    type="text"
                    name="text"
                    placeholder="try anything"
                    value={this.state.text}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                />
                <button onClick={this.handleClick}>text 확인 후 초기화</button>
            </div>
        );
    }
}

export default HandlerArrow_cl;