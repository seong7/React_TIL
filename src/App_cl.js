import React, { Component } from 'react';

import ScrollBox from './5.Ref_DOM/ScrollBox';
import InlineStyle from './2.JSX/InlineStyle';
import LifeCycleSample from './7.LifeCycle/LifeCycleSample';
import ErrorBoundary from "./7.LifeCycle/ErrorBoundary";

// LifeCycleSample 의 button 의 event Handler
function getRandomColor () {

    return "#" + Math.floor(Math.random() * 16777215).toString(16);
                                // 16진수의 가장 큰자리 ffffff 를 10진수로 표현하면 16777215
}

class App_cl extends Component {
    state = {
        color: "#000000"
    }

    handleClick = () => {
        this.setState({
            color : getRandomColor()
        }, console.log("변경된 색 :",this.state));
        
    }

    render() {
        return (
            <div>
                {/* <ScrollBox 
                    ref={(ref)=> {this.scrollBox=ref}}/>
                <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
                            
                                 button 에서 ScrollBox 를 가리키기 위해서 ref 사용했음 
                                 ScrollBox 의 ref . ScrollBox 내의 method 로 event handler 지정 
                            
                <InlineStyle/> */}
                <button onClick={this.handleClick}>색 변경</button>
                <ErrorBoundary>
                    <LifeCycleSample color={this.state.color}/>
                </ErrorBoundary>
            </div>
        );
    }
}

export default App_cl;