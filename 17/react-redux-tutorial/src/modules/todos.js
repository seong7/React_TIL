// 1. action type 정의
const CHANGE_INPUT = 'todos/CHANGE_INPUT'; // 인풋 값 변경함
const INSERT = 'todos/INSERT'; // 새로운 todo 등록
const TOGGLE = 'todos/TOGGLE'; // todo 를 체크 /체크 해제 함
const REMOVE = 'todos/REMOVE'; // todo 를 제거함

// 2. action 생성 함수 정의
export const changeInput = (input) => {
  // console.log(input);
  return {
    type: CHANGE_INPUT,
    input,
  };
};
let id = 3; // insert 가 호출될 때마다 1씩 더해진다.
export const insert = (text) => {
  // console.log(text);
  return {
    type: INSERT,
    todo: {
      id: id++, // 기존의 id 값에 의존함
      text,
      done: false,
    },
  };
};
export const toggle = (id) => ({
  type: TOGGLE,
  id,
});
export const remove = (id) => {
  // console.log(id);
  return {
    type: REMOVE,
    id,
  };
};

// 3. state 초기화
const initialState = {
  input: '',
  todos: [
    {
      id: 1,
      text: '리덕스 기초 배우기',
      done: true,
    },
    {
      id: 2,
      text: '리액트와 리덕스 사용하기',
      done: false,
    },
  ],
};

// 4. reducer 정의
function todos(state = initialState, action) {
  // console.log(state);
  switch (action.type) {
    case CHANGE_INPUT:
      return {
        ...state,
        input: action.input,
      };
    case INSERT:
      return {
        ...state,
        todos: state.todos.concat(action.todo),
      };
    case TOGGLE:
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.id ? { ...todo, done: !todo.done } : todo,
        ),
      };
    case REMOVE:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.id),
      };
    default:
      return state;
  }
}
export default todos;
