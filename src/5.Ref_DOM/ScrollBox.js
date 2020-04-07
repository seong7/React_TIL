import React, { Component } from 'react';


class ScrollBox extends Component {

    // 부모 컴포넌트에서 호출할 event handler 생성
    //   scroll Box 의 값들이 자식 컴포넌트에 있으므로 자식 컴포넌트에 생성함
    scrollToBottom = () => {
        const { scrollHeight, clientHeight } = this.box;
        /*  비구조화 할당을 사용함 (아래와 동일)
            const scrollHeight = this.box.scrollHeight;
            const clientHeight = this.box.clientHeight;
         */

         this.box.scrollTop = scrollHeight - clientHeight;
    }

    render() {
        const style = {
            border: '1px solid black',
            height: "300px",
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        }
        
        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white, black)'
        }
        return (
            <div
              style={style}
              ref={(ref) => {this.box = ref}}>    {/* ref 부여 */}
              <div style={innerStyle}/>
            </div>
        );
    } 
};

export default ScrollBox;