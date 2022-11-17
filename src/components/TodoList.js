import React from 'react';

const TodoList = ({
  todo,
  delTodo,
  checkTodo,
  editHandler,
  editTodoText,
  setEditTodoText,
  editedtodo,
  setEditedTodo,
}) => {
  return (
    <div>
      {editedtodo === todo.id ? (
        <div>
          <input
            type='text'
            onChange={(e) => setEditTodoText(e.target.value)}
            value={editTodoText}
          />
        </div>
      ) : (
        <h2>{todo.todo}</h2>
      )}

      {editedtodo === todo.id ? (
        <button onClick={() => editHandler(todo.id)}>Submit</button>
      ) : (
        <div>
          <input type='checkbox' onChange={() => checkTodo(todo.id)} />
          <button onClick={() => setEditedTodo(todo.id)}>Edit</button>
          <button onClick={() => delTodo(todo.id)}>delete</button>
        </div>
      )}
    </div>
  );
};

export default TodoList;
