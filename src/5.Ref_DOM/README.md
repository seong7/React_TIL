# 5.DOM ref (reference) (class 컴포넌트에만 해당됨)
-  먼저 **ref를 사용하지 않고**도 원하는 기능을 구현할 수 있는지 **반드시 고려**한 후에 활용

- React 에서는 HTML 요소의 id 값 보다는 **ref** 라는 속성을 흔히 사용함
  - **id** 는 **전역적**으로 작동하므로 반복해서 생성되는 컴포넌트의 경우 **고유 값**을 부여하기 위해 **주의**가 필요함 (**꼭 id 를 사용해야할 경우 반드시 주의해서 사용할 것**)

  - 하지만, **ref 는 해당 컴포넌트 내부에서만** 작동하기 때문에 **편하게 naming** 가능

  ## 1. DOM 요소에 ref 사용

  ### ref 를 사용하는 경우 ?
   **: DOM 을 꼭 직접적으로 건드려야 할 때 ! 즉, state 만으로는 해결 못하는 기능을 구현할 경우 !**
  -  특정 input에 포커스 주기
  - 스크롤 박스 조작하기
  - Canvas 요소에 그림 그리기 등

  ### 1. callback fn 이용한 사용법
   - 가장 기본적인 사용법

            prop 에 ref 값을 넣어서 component 호출

            <input ref={(ref) => {this.input=ref}} />
                                // 앞으로 this.input 은 해당 DOM 가리킴
                                // this.input 대신 아무 이름 주어도 가능함 (this.anyName)

  ### 2. createRef 를 통한 사용법
   - React 내장 함수 createRef 사용
   - React v 16.3 이상부터 사용 가능

            import React, { Component } from 'react';
            
            class RefSample extends Component {
                 input = React.createRef();         // 1. 멤버변수에 우선 담아줌
 
                handleFocus = () => {
                    this.input.current.focus();     // 3. 호출할 때는 this.input.current 를 사용
                }

                render() {
                    return (
                    <div>
                        <input ref={this.input} />  // 2. ref 를 달 요소에 props로 넣어줌
                    </div>
                    );
                }
            }
                
            export default RefSample;

<br/>

  ## 2. Component 에 ref 사용
  - 주로 컴포넌트 **내부에 있는 DOM**을 컴포넌트 **외부에서 사용할 때** 사용   
  - DOM에 ref를 다는 방법과 **똑같다.**

        <MyComponent
            ref={(ref) => {this.newRef=ref}}
        />

        : newRef.handleClick / newRef.input 등의 방법으로
          newRef 컴포넌트의 내부 멤버변수에 접근 가능해진다.

  - **예제**
    - **부모 컴포넌트**의 **버튼 이벤트**로 **자식 컴포넌트**의 **scrollBox 제어**하기
        - **[ScrollBox.js](./ScrollBox.js)** 에 **컴포넌트 생성** 
            - **ref callback** 달아주기
            - 부모 컴포넌트의 **버튼**에서 호출할 **event handler** 생성 
        - **[App_cl.js](../App_cl.js)** 에서 **ScrollBox 호출**
            - button 에서 ScrollBox 에 **접근**하기 위해 ScrollBox 에 ref callback 달아주기