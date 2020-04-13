# Immer 라이브러리 사용하기

> 기존 전개연산자로 불변성 유지하는 방법 [>>](./noneImmerCode.js)  
> immer 사용하는 방법 [>>](./immerCode.js)

immer 를 사용해 state 의 불변성을 수월히 유지할 수 있다.

```bash
yarn add immer
```

### immer 사용 예시 :

```javascript
import produce from "immer";
const nextState = produce(originalState, (draft) => {
  //                      첫 번째 : 수정하고 싶은 state
  //                      두 번째 : 어떻게 업데이트할지 정의하는 함수

  // 바꾸고 싶은 값 바꾸기
  draft.somewhere.deep.inside = 5;
  // 이렇게 바꿔주면 produce 함수가 불변성 유지를 대신 해준다.
});
```

<br/>

### 더 수월하게 사용하는법

아래 예시와 같이 produce 함수의 첫번째 매개변수가 함수형태이면 update 함수를 return 한다.

```javascript
const update = produce((draft) => {
  draft.value = 2;
});
// update 함수를 변수에 저장

const originalState = {
  value: 1,
  foo: "bar",
};
const nextState = update(originalState); // update 함수 사용 방법
console.log(nextState); // { value: 2, foo: 'bar' }
```

immer 의 위 특성과 useState 의 함수형 업데이트를 함께 사용하면 매우 효율적임  
**즉, useState 의 setter 함수의 매개변수에 produce() 로 return 한 update 함수를 넣어줌**

기본 방식의 Immer 사용한 App.js [ >>](./src/App.js)  
함수형 업데이트 방식의 Immer 사용한 App_immer2.js [ >>](./src/App_immer2.js)  
(두 코드 비교해보기 !!)
