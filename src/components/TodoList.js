import React from 'react';

const TodoList = ({ todo, delTodo, checkTodo }) => {
  return (
    <div>
      <h2>{todo.todo}</h2>
      <button onClick={() => delTodo(todo.id)}>delete</button>
      <input type='checkbox' onChange={() => checkTodo(todo.id)} />
    </div>
  );
};

export default TodoList;
