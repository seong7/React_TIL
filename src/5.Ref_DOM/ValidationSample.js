import React, { Component } from 'react';
import './sample.css';

class ValidationSample extends Component {
    state = {
        password : "",
        clicked : false,
        validated: false
    }
    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }
    handleButtonClick = () => {
        this.setState({
            clicked : true,
            validated : this.state.password === "0000"
        })

        this.input.focus();     // ref 로 요소 가리키고 focus 줌
    }
    render() {
        return (
            <div>
                <input          
                    ref={(ref)=>this.input = ref}   // ref 값 부여
                    type="password"
                    value={this.state.password}
                    onChange = {this.handleChange}
                    className = {
                        // 가능한 이유 : state가 바뀔 때 해당 요소의 render 가 새로 일어남
                        this.state.clicked 
                        ? (this.state.validated 
                            ? "success"
                            : "failure")
                        : "" 
                    }
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        );
    }
}

export default ValidationSample;