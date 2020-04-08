# 3. Component (props , state)

- React Snippet 사용
    > **rcc** (React component class): 클래스형 컴포넌트 생성 문구   
    > **rsc** (React stateless component) : 함수형 컴포넌트 생성 문구


# Props
 - Parent Component 가 Child Component 에게 전해주는 값을 저장하는 객체

 ## 1. props 객체 사용법
 #### - 함수형 Component
  - Component 함수의 **매개변수로 props** 를 넣어주고 받는다.
   1. props **객체의 변수**를 Component 함수의 **매개변수**로 입력 [>>](https://github.com/seong7/React_study/blob/master/src/3.Component/Props_fn.js#L5)
   2. props 객체의 **내부 property 들**을 **객체 형식의 매개변수**로 Component 함수에 입력 (비구조화 할당) [>>](https://github.com/seong7/React_study/blob/master/src/3.Component/Props_fn.js#L18)

  #### 2. Class 형 Component
  - Component 클래스의 인스턴스(객체)에 **자동으로 props 라는 property** 가 들어오므로 **this.props** 로 사용
   1. **내장된 객체** this.props 를 **비구조화 할당** 형식으로 **render() 함수 내에** 선언하여 사용 [>>](https://github.com/seong7/React_study/blob/master/src/3.Component/Props_cl.js#L15)
<br/><br/>

 ## 2. propTypes 및 defaultProps 사용법
   - **propTypes**   
     - **Child Component 에서** Parent 가 지정할 **prop 값의 type** 을 정해주는 방법 (**import** 로 불러와야 사용 가능)   
     - type 이 설정과 **다르면** **console 에 경고 출력** (값은 **render** 됨) 
   - **defaultProps**   
     - **Parent Component** 에 props 의 **해당 property** 가 **assign 되지 않은 경우**에 **default** 로 사용되는 **값** 설정

  #### 1. 함수형 Component [>>](./Props_fn.js)
   - Component 함수의 외부에서 **객체형 Property 선언 방식**으로 설정

  #### 2. 클래스 형 Component [>>](./Props_cl.js)
   - Component 함수의 외부에서 **객체형 Property 선언 방식**으로 설정

  #### 참고) propTypes 로 설정가능한 값들 종류
  - https://github.com/facebook/prop-types

        - func : 함수   
        - number, object, string, bool
        - symbol : ES6 의 Symbol
        - node : 렌더링할 수 있는 모든 것(숫자, 문자열, JSX코드, children  등)
        - instanceOf(클래스) : 특정 클래스의 instance
        - array
        - arrayOf(다른 PropType)   ex) arrayOf(PropTypes.number) 는 숫자로 이루어진 배열
        - oneOf(['dog', 'cat']) : 주어진 배열 요소 중 값 하나
        - oneOfType([React.PropTypes.string, PropTypes.number]) : 주어진 배열 안 type 중 하나
        - objectOf(React.PropTypes.number) : 객체의 모든 키 값이 인자로 주어진 PropType 인 객체
        - shape({ name: PropTypes.string, num: PropTypes.number }) : 주어진 스키마를 가진 객체
        - any : 아무 type


# State
## 1. 클래스 형 Comoponent 
 #### 1. State 선언
  - **선언 방법 1** : constructor method(생성자 함수) 사용
  - **선언 방법 2** : constructor method 사용 안해도 됨 [>>](https://github.com/seong7/React_study/blob/master/src/3.Component/State_cl.js#L3)

 #### 2. State 조회 (__render() 함수 내에서)
  - **this.state** 사용

 #### 3. State 의 값 조작 (__render() 함수 내에서)
  - **this.setState** 사용
    - this.setState 는 **비동기적으로 실행**되는 **함수**임   
      **: 매개변수**에따라 **조작의 정확성**이 **크게 영향**을 받음 **(꼭 숙지할 것 !) [>>](https://github.com/seong7/React_study/blob/master/src/3.Component/State_cl.js#L38)**

## 2. 함수 형 Comoponent 
  - State 객체는 원래 없지만,   
    **State 객체의 역할**을 하는 **{ useState } 를 import** 하여 사용 가능
  
  #### 1. useState 선언
  - **배열 형태**의 **비구조화 할당** 방식 사용 [>>](https://github.com/seong7/React_study/blob/master/src/3.Component/UseState_fn.js#L4)

  - **첫번째 변수 : state 의 property 명 (변수명은 임의)**   
  - **두번째 변수 : 해당 property 에 대한 setter 함수 (변수명은 set + state 변수명 으로 지음)**
  - **useState("")** 의 **매개변수**는 해당 **state property 의 초기 값** (**초기화** 해줌)

  #### 2. useState 의 setter 함수로 새로운 property 값 넣어줌 [>>](https://github.com/seong7/React_study/blob/master/src/3.Component/UseState_fn.js#L15)

  #### *** useState 로 다수의 property 가진 state 관리하는 법 [>>](./4.Event/HandlerForm_fn.js) 