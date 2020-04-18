const loggerMiddleware = (store) => (next) => (action) => {
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


// 즉, middleware 는 함수를 반환하는 함수를 반환하는 함수이다.
*/

export default loggerMiddleware;
