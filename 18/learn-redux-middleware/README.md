# Redux Middleware

Redux Middleware 는 Action 을 dispatch 했을 때 Reducer 에서 이를 처리하기에 앞서 사전에 지정된 작업들을 실행한다. Middleware 는 Action 과 Reducer 사이의 중간자라고 볼 수 있다.

![middleware](./ref/middleware.JPG)

**Middleware 가 할 수 있는 작업 예시**

- 전달받은 action 을 console 에 기록
- 전달받은 action 정보를 기반으로 action 을 아예 취소 또는 다른 종류의 action 을 추가로 dispatch
- 특정 조건에 따라 action 무시하거나 정보를 가로채서 변경한 뒤 reducer 에게 전달하는 것도 가능

> 비동기 작업을 관리하는데 매우 유용하다.

## Middleware 이해하기

#### 직접 loggerMiddleware 라는 Middleware 만들기

action 이 dispatch 될 때마다 아래 값들을 출력하는 미들웨어를 만든다.

- 이전 state
- action 정보
- 새로워진 state

미들웨어인 logger 생성 : [[ src/lib/loggerMiddleware.js >> ](./src/lib/loggerMiddleware.js)]  
store 에 logger 부착 : [[ src/index.js >> ](./src/index.js)]  
**=> 이제 logger 는 reducer 의 실행전에 호출된다.**

<br/>

#### react-logger 라이브러리 (완성된 middleware) 사용하기

```
$ yarn add react-logger
```

store 에 logger 부착하면 끝 ! [[src/index.js >> ](./src/index.js)]  
**=> 간단히 사용가능 ( 미들웨어는 이렇게 완성된 것을 사용하는 경우가 많다.)**

## redux-thunk

**비동기 작업을 처리할 때 가장 많이 사용하는 미들웨어 라이브러리**  
객체가 아닌 함수 형태의 액션을 디스패치해 reducer 실행 전 작업을 시킬 수 있다.

> 리덕스의 창시자인 댄 아브라모프(Dan Abramov)가 만들었으며, 리덕스 공식 매뉴얼에서도 이 미들웨어를 사용하여 비동기 작업을 다루는 예시를 보여 줌.

**Thunk 란?**

특정 작업을 나중에 할 수 있도록 미루기 위해 함수 형태로 감싼 것을 의미함

#### redux-thunk 적용해보기

**1. 라이브러리 설치 후 store 에 적용하기 [[src/index.js >>](./src/index.js)]**

```
$ yarn add redux-thunk
```

**2. redux Module 생성 (Thunk 함수 정의)**  
**[[modules/counter_thunk.js >>](./src/modules/counter_thunk.js)]**

- 기존 Action 생성 함수 외에 Thunk 함수를 만든다. (코드 주석의 2번 참조)
- Thunk 함수는 reducer 실행 전에 작업할 기능을 담고 있는 또 다른 함수를 return 한다.

**3. Container 생성**  
 **[[containers/CounterContainer_thunk.js >>](./src/containers/CounterContainer_thunk.js)]**

일반 redux 의 Container 와 다른 점 :  
 Action 생성 함수가 아니라 **Thunk 생성 함수를 mapDispatchToProps() 에 사용**한다.

**4. Component 생성 (일반 redux 와 동일)**
**[[components/Counter.js >>](./src/components/Counter.js)]**

Presentational-Component 는 정말 일반 redux 와 동일하게 작성한다.  
 물론, Containers 에서 넘겨준 **Thunk 생성 함수를 Props 로 받는다.**

**===>**  
**중요한 점은 redux-thunk 미들웨어 코드가 적용된 곳은 오직 src/index.js 의 store 생성 부분 뿐이라는 점**  
**<===**

<br/>

## redux-saga

**redux-thunk 다음으로 가장 많이 사용되는 비동기 작업 관련 미들웨어 라이브러리**  
특정 액션이 디스패치되었을 때 정해진 로직에 따라 다른 액션을 디스패치시키는 규칙을 작성하여 비동기 작업을 처리할 수 있게 해 준다.
