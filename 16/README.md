# Redux Library 이해하기

**redux 는 React 에 종속된 라이브러리가 아니다.**  
react-redux, angular-redux, ember-redux, redux (vanilla용) 등의 라이브러리가 있다. (Vue 도 가능하지만, vuex 를 주로 사용)

<br/>

**Redux 의 장점**  
단순히 전역 state 관리만 한다면 15장의 Context API를 사용하는 것만으로도 충분하다.
그런데도 redux 를 쓰는 장점은 아래와 같다.

- **리덕스를 사용하면 상태를 더욱 체계적으로 관리할 수 있다.**  
  유지 보수성도 높여 주고 작업 효율도 극대화해 주기 때문에 프로젝트의 규모가 클 경우에는 리덕스를 사용하는 편이 좋다.
- **편리한 개발자 도구도 지원**하며, **미들웨어라는 기능을 제공**하여 *비동기 작업*을 훨씬 효율적으로 관리할 수 있게 해 준다.

<br/>

**_Redux 의 규칙_**

1. **단일 Store**  
   하나의 앱에 다수의 store 를 사용하는 것이 불가능한 건 아니지만, state 관리가 복잡해질 수 있어 비권장. (단, 특정 업데이트가 너무 빈번하거나 앱과 완전 분리된 영역일 경우 가능)

2. **State 는 읽기 전용**  
   redux 의 state 는 읽기 전용이다. 즉, react 와 마찬가지로 **불변성을 유지**해야한다. 이는 성능을 위해 얕은 비교(shallow equality) 로만 데이터 변경을 검사하므로 변화를 감지하지 못할 수 있기 때문이다.

3. **Reducer 는 순수한 함수여야 함**

   - 리듀서 함수의 파라미터 :  
     이전 state 와 action 객체

   - 파라미터 외의 값에는 의존하면 안 된다.

   - 이전 state 의 불변성을 유지해야한다.

   - 똑같은 파라미터로 호출된 리듀서 함수는 언제나 똑같은 결과 값을 반환해야 한다.
     > **예를 들어, reducer 함수 내에 랜덤 값, Date 함수사용, 네트워크 요청 등을 할 경우 다른 결과를 만들 수 있으므로 사용하면 안됨 !!**
     >
     > 이런 작업은 reducer 밖에서 처리  
     > _ action 생성 과정  
     > _ redux middleware (네트워크 요청, 비동기 작업은 보통 미들웨어로 관리)

 <br/>

## vanilla js 에서 redux 사용하기

**[예제 익히기 >>](./vanilla-redux)**

 <br/>

## 개념 정리

### Action

state 업데이트를 위해 필요한 정보를 담은 객체

```javascript
{
    type: "ADD_TODO",
  data: {
      id: 1,
      text: '리덕스 배우기'
  }
}
```

type 필드를 반드시 가져야 함 (type 이 action 의 이름이라고 볼 수 있다.)

### Action Creator (액션 생성 함수)

action 객체를 만들어주는 함수  
(매번 객체를 직접 작성하는 것 번거로울 수 있고, 정보를 놓칠 수도 있어서 함수 생성 방식 사용)

```javascript
function addTodo(data) {
  return {
    type: "ADD_TODO",
    data,
  };
}
// 또는
const addTodo = (data) => ({
  type: "ADD_TODO",
  data,
});
//   ({}) 방식으로 객체를 바로 return 해줬음
```

### Reducer

- state 의 변화를 일으키는 함수
- action 객체를 매개변수로 받아 state 변화에 이용한다.
- store 의 내장함수인 dispatch 에 의해 작동된다.

```javascript
const initialState = {
  counter: 1,
};
function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREMENT:
      return {
        counter: state.counter + 1,
      };
    default:
      return state;
  }
}
```

### Store (스토어)

- 한 개의 프로젝트는 단 하나의 스토어만 가질 수 있다.
- 스토어 안에는 현재 앱의 state 와 reducer 가 있으며, 몇가지 내장함수를 지니고 있다.
- 스토어의 내장함수
  - store.getState() : 현재 state 를 return 한다.
  - store.subscribe( callback 함수 ) : 해당 callback 함수를 구독하여 state 가 업데이트될 때마다 호출한다.
  - store.dispatch( action 객체 ) : 해당 action 객체를 매개변수로 넣어 reducer 함수를 실행한다.

### Dispatch (디스패치)

- Store 의 내장 함수 중 하나.
- Action 객체를 생성하고 Reducer 함수를 실행시켜 새로운 state 를 만든다.
- dispatch (action) 의 형태로 호출한다.

### Subscribe (구독)

- Store 의 내장 함수 중 하나.
- subscribe 함수 안에 함수를 파라미터로 넣어서 호출하면, 파라미터인 함수에 Action 이 dispatch 되어 state 가 업데이트될 때마다 호출된다.
- react-redux 라이브러리에서는 라이브러리가 subscribe 작업을 대신 해주므로 사용하지 않는다.

```javascript
const listener = () => {
  console.log("상태가 업데이트됨");
};
const unsubscribe = store.subscribe(listener);

unsubscribe(); // 추후 구독을 비활성화할 때 호출하는 함수
```
