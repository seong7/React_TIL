/*****************/
/* 배열 안에 객체 */
const todos = [
  { id: 1, checked: true },
  { id: 2, checked: true },
];
const nextTodos = [...todos]; // 배열은 새로 만들어지지만
//                               안의 요소인 객체는 그대로 전달됨

nextTodos[0].checked = false;
console.log(todos[0] === nextTodos[0]);
// 아직까지는 똑같은 객체를 가리키고 있기 때문에 true

nextTodos[0] = {
  ...nextTodos[0],
  checked: false,
};
console.log(todos[0] === nextTodos[0]);
// 새로운 객체를 할당해 주었기에 false

/*****************/
/* 객체 안에 객체 */
const nextComplexObject = {
  ...complexObject, // 요소들 복사
  objectInside: {
    ...complexObject.objectInside, // 내부 객체의 요소들 복사
    enabled: false,
  },
};
console.log(complexObject === nextComplexObject); // false
console.log(complexObject.objectInside === nextComplexObject.objectInside); // false

// 이런 식으로 만약 객체의 구조가 복잡해지면, 불변성 유지가 어려워짐
// => immer 라이브러리 사용해 해결 가능
