# Redux Middleware

Redux Middleware 는 Action 을 dispatch 했을 때 Reducer 에서 이를 처리하기에 앞서 사전에 지정된 작업들을 실행한다. Middleware 는 Action 과 Reducer 사이의 중간자라고 볼 수 있다.

![middleware](./ref/middleware.JPG)

**Middleware 가 할 수 있는 작업 예시**

- 전달받은 action 을 console 에 기록
- 전달받은 action 정보를 기반으로 action 을 아예 취소 도는 다른 종류의 action 을 추가로 dispatch

## Middleware 직접 만들어보기

action 이 dispatch 될 때마다 action 의 정보와 dispatch 되기 전후의 state 를 console에 보여주는 Logging Middle ware 를 만든다.

[[src/lib/loggerMiddleware.js >> ](./src/lib/loggerMiddleware.js)]
