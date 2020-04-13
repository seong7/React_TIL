# Component 성능 최적화

10장에서 만든 todo-app ([repo](https://github.com/seong7/react-todo-app)) 을 사용해 컴포넌트 성능 최적화 해보기

#### 많은 데이터 렌더링하기

2,500 개의 todo 데이터를 생성하였더니 lag 이 엄청 심해짐  
삭제, 생성, check 기능 모두 lag 심함

> **컴포넌트는 다음과 같은 상황에서 Re-render 된다.**
>
> 1. 자신이 전달받은 props가 변경될 때
>
> 2. 자신의 state가 바뀔 때
>
> 3. 부모 컴포넌트가 리렌더링될 때
>
> 4. forceUpdate 함수가 실행될 때

#### Chrome 개발자 도구를 통한 성능 모니터링

개발자도구 - Performance 에서 Rocord-Stop 버튼을 사용해 원하는 시점의 성능을 분석할 수 있다.

> **개발 서버를 통해 보이는 리액트 애플리케이션은 실제 프로덕션에서 구동될 때보다 처리 속도가 느리다.**
>
> 실제 프로덕션 모드에서는 에러 시스템 및 Timing이 비활성화되어 처리 속도가 훨씬 더 빠릅니다. 지금은 소규모 프로젝트이기 때문에 프로덕션 모드일 때와 개발 모드일 때의 차이가 그렇게 크지 않지만, 프로젝트의 규모가 커질수록 차이가 커집니다.
>
> **Production 모드에서 구현해보려면**  
> $ yarn build   
> $ yarn global add serve  
> \$ serve -s build

<br/>

## 성능최적화 [>>](./01.optimization)

### 1. React.memo

### 2. 함수가 재선언되는 현상 방지 (최적화 효과 높음)

> 성능 상으로는 두 가지 방법이 비슷함

#### 방법1 : useState 의 setter 함수에 '함수형 매개변수' 사용

#### 방법2 : useReducer 사용

<br/>

## 불변성 (Immutability) 의 중요성

불변성이 지켜지지 않으면 객체 내부의 값이 바뀌어도 감지하지 못한다.  
즉, React.memo 에서 **비교-최적화가 불가능해짐**

> 불변성 유지 방법 **[>>](./02.immutability/immutability.js)**

**Spread operater (전개 연산자 (...) )**  
전개 연산자 사용시 얕은 복사 (shallow copy) 가 이뤄짐,  
즉, 내부의 값이 모두 복사되는 것이 아니라, 가장 바깥쪽의 값만 복사된다.

> 배열 내 객체 / 객체 내 객체의 불변성 유지 방법 **[>>](./02.immutability/ShallowCopy.js)**

<br/>

## react-virtualized 를 사용한 Rendering 최적화 [>>](03.react-virtualized)

컴포넌트들의 크기만 화면상에 유지시키고 스크롤이 되었을 때만 rendering 하게끔 제어할 수 있는 React 라이브러리
