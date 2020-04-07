import React, { Component } from 'react';

import ScrollBox from './5.Ref_DOM/ScrollBox';
import InlineStyle from './2.JSX/InlineStyle';


class App_cl extends Component {
    render() {
        return (
            <div>
                <ScrollBox 
                    ref={(ref)=> {this.scrollBox=ref}}/>
                <button onClick={() => this.scrollBox.scrollToBottom()}>맨 밑으로</button>
                            {/*
                                 button 에서 ScrollBox 를 가리키기 위해서 ref 사용했음 
                                 ScrollBox 의 ref . ScrollBox 내의 method 로 event handler 지정 
                            */}
                <InlineStyle/>
            </div>
        );
    }
}

export default App_cl;