import React, { Component } from 'react';

class HandlerBinding_cl extends Component {
    state = {
        text : ""
    }
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
        /*      중요 !!!
            함수가 호출될 때 this는 호출부에 따라 결정되므로, 
            클래스의 임의 메서드가 특정 HTML 요소의 이벤트로 등록되는 과정에서
            메서드와 this의 관계가 끊어져 버린다. 
            이 때문에 임의 메서드가 이벤트로 등록되어도 
            this를 컴포넌트 자신으로 제대로 가리키기 위해서는 
            메서드를 this와 바인딩(binding)하는 작업이 필요하다. 
            
            만약 바인딩하지 않으면 this가 undefined를 가리키게 된다. 
         */
    }

    handleChange(e){
        this.setState({
            text: e.target.value
        });
    }
    handleClick() {
        alert(this.state.text);
        this.setState({
            text: ""
        }/*, document.querySelector(".input1").value = this.state.text*/);
    }


    render() {
        return (
            <div>
                <h1>이벤트 연습</h1>
                <input
                    className="input1"
                    type="text"
                    name="message"
                    placeholder="try anything"
                    value={this.state.text}
                    onChange={this.handleChange}
                />
                {/* onChange 없이 value 만 주면 readOnly 가 됨*/}
                
                <button onClick={this.handleClick}>text 확인 후 초기화</button>
            </div>
        );
    }
}

export default HandlerBinding_cl;