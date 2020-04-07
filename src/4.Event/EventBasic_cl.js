import React, { Component } from 'react';

class EventBasic_cl extends Component {
    // state 초기화
    state = {
        text : ""
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
                    value = {this.state.text}
                    onChange={
                        (e)=>{
                            // console.log(e.target.value);
                            this.setState({text : e.target.value}, ()=>{
                                console.log(this.state.text);
                            });
                        }
                    }
                />
                <button onClick={
                    ()=>{
                        alert(this.state.text);
                        // state.text 다시 초기화
                        this.setState({
                            text : ""
                        }/*,()=>{
                            //두번째 매개변수 : state 변경 후 실행되는 callback fn
                            document.querySelector(".input1").value=this.state.text;
                        }*/) 
                        
                    }
                }>text 확인 후 초기화</button>
            </div>
        );
    }
}

export default EventBasic_cl;