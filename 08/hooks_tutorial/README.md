# hook - tutorial

- **Hooks** : 함수형 Component 에서 사용하는 각종 method 모음
- **React 매뉴얼**에서는 **새로 작성하는 컴포넌트**의 경우 **함수형** 컴포넌트와 **Hooks** 사용을 **권장**함
  - 개발할 때는 **함수형 컴포넌트의 사용을 첫 번째 옵션**으로 두고, 꼭 **필요한 상황**에서만 **클래스형** 컴포넌트를 구현하는 것이 좋다.

## Hook 의 종류

### 1. useState

### 2. useEffect [[Info.js >>](./src/2.useEffect/Info.js)]

- component **rendering 시**에 **특정 작업**을 수행하도록 지정할 수 있는 Hook
- Class 형 component 의 **comopnentDidMount** 와 **componentDidUpdate** 를 합친 형태라고 볼 수 있음
- **실행 조건** : useEffect() 의 **두번째 매개변수 배열**의 원소들의 **이전 값과 현재 값**을 **비교**함
- **return 된 Clean Up 함수** : **Unmount 되기 전** , **Update 직전**에 실행 됨

> \*\* **빈 배열**이 두번째 매개변수일 때 **  
> : **최초\*\* render 때만 useEffect 의 첫번째 매개변수 callback Fn 실행됨

### 3. useReducer

기본 : [[Counter.js >>](./src/3.useReducer/Counter.js)]  
 조금 더 난이도 있는 것 : [[InputReducer.js >>](./src/3.useReducer/InputReducer.js)]  
 매개변수 3개 사용 : [[todo-app \_ App_useReducer.js >>](https://github.com/seong7/react-todo-app/blob/master/src/App_useReducer.js#L38)]

- **state** 를 더 **동적으로** 다룰 수 있게 해주는 Hook
- **Redux** 와 관련 있음 (17장에서 배움)
  > 차이점 : Redux - **type 필수** / useReducer - **type 필드 없어도 됨 (type 자유로움)**
- **현재 상태** 와 **액션**(action \_\_업데이트를 위해 필요한 정보를 담은 객체) 값을 전달받아 **새로운 state 를 반환**하는 함수임
- **리듀서 함수**에서 새로운 state를 만들 때는 **반드시 불변성을 지켜야함**

### 4. useMemo [[AverageMemo.js >>](./src/4.useMemo/AverageMemo.js)]

- 함수형 컴포넌트 내부 **연산을 최적화**할 수 있게 해주는 Hook
- useMemo(callback fn, array dependency) : 배열의 요소 중 하나라도 값이 바뀌면 callback fn 이 실행된다.

### 5. useCallback [[AverageCallback.js >>](./src/5.useCallback/AverageCallback.js)]

- useMemo 와 비슷한 함수 ( 렌더링 성능 최적화에 사용됨 )
- Event Handler 함수를 필요할 때만 생성할 수 있게 해준다.

> 숫자, 문자열, 객체처럼 일반 값 재사용 : **useMemo** 사용  
> 함수 재사용 : **useCallBack** 사용

        // useCallback 예시 :

        useCallback(() => {
            console.log("hello world!");
        }, []);

        // useMemo 예시 : return 값을 가진 function 재사용

        useMemo(() => {
            const fn = () {
                console.log("hello world!");
            };
            return fn;
        }, []);

### 6. useRef [[AverageRef.js >>](./src/6.useRef/AverageRef.js)]

- 함수형 컴포넌트에도 ref 를 사용할 수 있게 해주는 Hook
- 함수형 컴포넌트에서 useRef 로 **로컬변수** 사용하기 (렌더링과 상관없이 바뀔 수 있는 값)

  // class 형 컴포넌트 예시 (useRef 필요 없음) :

          import React, { Component } from 'react';

          class MyComponent extends Component {
              id = 1                         // 로컬 변수
              setId = (n) => {
                  this.id = n;
              }
              printId = () => {
                  console.log(this.id);
              }
              render() {
                  return (
                  <div>
                      MyComponent
                  </div>
                  );
              }
          }
          export default MyComponent;


            // 함수형 컴포넌트 예시 (useRef 사용) :

            import React, { useRef } from 'react';

            const RefSample = () => {
                const id = useRef(1);   // ref 사용해 로컬변수 선언
                const setId = (n) => {
                    id.current = n;
                }
                const printId = () => {
                    console.log(id.current);
                }
                return (
                    <div>
                        refsample
                    </div>
                );
            };

            export default RefSample;

### 7. useContext [[15 장 README 가장 아랫부분 보기 >>](https://github.com/seong7/React_study/tree/master/15/context-tutorial)]

전역 state 관리 기능인 Context API 를 사용하는 방법 중 하나로, 복잡한 Render Props 패턴을 사용하지 않고 간편히 Context 를 사용할 수 있게 해준다.

### 8. 커스텀 Hooks 만들기

- **여러 컴포넌트**에서 **비슷한 기능을 공유**할 경우, 이를 **나만의 Hook**으로 작성하여 **로직을 재사용**할 수 있습니다.

  > Customized Hook 생성 코드 [>>](./7.useCostom/Info.js)  
  > Hoook 사용 코드 [>>](./7.useCostom/useInputs.js)

- 다른 개발자들의 **custom Hook** 사용하기
  - https://nikgraf.github.io/react-hooks/
  - https://github.com/rehooks/awesome-react-hooks
