import React from 'react';
import './Todos.css';

const TodoItem = ({
  todo,
  onToggle,
  onRemove,
  /* key _ key 는 prop 이 아님...*/
}) => {
  // console.log(todo);
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.done}
        onChange={() => onToggle(todo.id)}
        readOnly={true} // ???
      />
      <span style={{ textDecoration: todo.done ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>삭제</button>
    </div>
  );
};

const Todos = ({
  input, // 인풋에 입력되는 텍스트
  todos, // 할 일 목록에 들어 있는 객체
  onChangeInput,
  onInsert,
  onToggle,
  onRemove,
}) => {
  // console.log(onChangeInput);
  const onSubmit = (e) => {
    // 구현부가 2줄 이상일땐 따로 빼주기
    e.preventDefault(); // form submit 시 새로고침 막아줌
    onInsert(input); // input state 가 현재 입력된 값임
    onChangeInput(''); // input 초기화
  };
  return (
    <div className="todos_wrapper">
      <form onSubmit={onSubmit}>
        <input value={input} onChange={(e) => onChangeInput(e.target.value)} />
        <button type="submit">등록</button>
      </form>
      <div>
        {todos.map((todo) => {
          return (
            <TodoItem
              todo={todo}
              key={todo.id}
              onToggle={onToggle}
              onRemove={onRemove}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todos;
