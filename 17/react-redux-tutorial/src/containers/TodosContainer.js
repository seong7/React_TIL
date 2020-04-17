import React from 'react';
import Todos from '../components/Todos';
// Action Creator
import { changeInput, insert, toggle, remove } from '../modules/todos';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  //   console.log(state);
  return {
    input: state.todos.input,
    todos: state.todos.todos,
  };
};

const mapDispatchToProps = {
  changeInput,
  insert,
  toggle,
  remove,
};
// const mapDispatchToProps = (dispatch) => ({
//   changeInput: (input) => {
//     dispatch(chageInput(input));
//   },
//   insert: (text) => {
//     dispatch(insert(text));
//   },
//   toggle: () => {
//     dispatch(toggle());
//   },
//   remove: () => {
//     dispatch(remove());
//   },
// });

const TodosContainer = ({
  input,
  todos,
  changeInput,
  insert,
  toggle,
  remove,
}) => {
  //   console.log(todos);
  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={changeInput}
      onInsert={insert}
      onToggle={toggle}
      onRemove={remove}
    />
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);
