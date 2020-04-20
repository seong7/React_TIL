const loggerMiddleware = (store) => (next) => (action) => {
  console.group(action && action.type); // action type 으로 log 를 그룹화
  console.log("이전 상태", store.getState());
  console.log("액션", action);
  next(action); // 다음 미들웨어 혹은 reducer 에게 action 전달
  console.log("다음 상태", store.getState()); // 업데이트된 상태
  console.groupEnd(); // 그룹 끝

  // middleware 의 기본 구조
};
// 위는 아래와 같이 작성 가능
/*
const loggerMiddleware = function loggerMiddleware(store) {
    return function (next) {
        return function (action) {
            // middleware 의 기본 구조
        }
    }
}

// 즉, middleware 는 function 을 반환하는 function 을 반환하는 함수이다.
*/

/* 
    next : 함수 형태
    store.dispatch 와 비슷한 역할함
    차이점 : 
           - next(action) 을 호출하면 그 다음 처리해줄 미들웨어에게 action 을 넘겨줌
            만약 미들웨어가 더 이상 없으면 reducer 에게 action 을 넘겨준다.
           
           - store.dispatch(action) 을 호출하면 첫 번째 미들웨어부터 다시 처리한다.
             즉, 미들웨어에서 next 를 사용하지 않으면 reducer 에게 action 이 전달되지 않는다. 

*/

export default loggerMiddleware;
