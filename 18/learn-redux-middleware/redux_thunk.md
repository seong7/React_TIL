## redux-thunk

**비동기 작업을 처리할 때 가장 많이 사용하는 미들웨어 라이브러리**  
객체가 아닌 함수 형태의 액션을 디스패치해 reducer 실행 전 작업을 시킬 수 있다.

> 리덕스의 창시자인 댄 아브라모프(Dan Abramov)가 만들었으며, 리덕스 공식 매뉴얼에서도 이 미들웨어를 사용하여 비동기 작업을 다루는 예시를 보여 줌.

**Thunk 란?**

특정 작업을 나중에 할 수 있도록 미루기 위해 함수 형태로 감싼 것을 의미함

### 적용해보기 (기초)

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

### 비동기 작업 처리 (심화)

연습용 가짜 API 사용 JSONPlaceholder(https://jsonplaceholder.typicode.com)

```
# 포스트 읽기(:id는 1~100 사이 숫자)
GET https://jsonplaceholder.typicode.com/posts/:id

# 모든 사용자 정보 불러오기
GET https://jsonplaceholder.typicode.com/users
```

**1. axios 설치**

```bash
$ yarn add axios
```

**2. API 함수화 [[src/lib/api.js >>](./src/lib/api.js)]**  
 API 를 따로따로 함수화 해서 export 하면 가독성, 유지 보수에 좋다.

**3. Reducer 생성 [[src/modules/api_sample.js](./src/modules/api_sample.js)]**

1. Action type 선언
2. Action 생성 함수 정의
3. Thunk 함수 정의
   - api 요청의 시작, 성공, 실패에 각각 다른 action 을 dispatch 하도록 짠다.
4. state 초기화
5. reducer 정의

**4. Presentational-Component 생성 [[src/components/Api_Sample.js](./src/components/Api_Sample.js)]**

**5. Container-Component 생성 [[src/containers/Api_Sample_Container.js](./src/containers/Api_Sample_Container.js)]**

<br/>

### 비동기 작업 처리 \_ Refactoring

위의 비동기 처리 코드를 refactoring 해보기

아래 요소들을 해결해보기 (작업이 귀찮고 코드가 길어지는 원인들임)  
반복되는 로직을 따로 분리하여 코드의 양 줄이기

- API 요청 때마다 thunk 함수를 작성하는 것
- loading 상태를 reducer 에서 관리하는 작업  
  (둘 다 [src/modules/api_sample.js](./src/modules/api_sample.js) 에서 이뤄지는 작업임)
