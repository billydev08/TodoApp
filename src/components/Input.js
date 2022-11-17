import React, { useState } from 'react';

import './Input.css';
import TodoList from './TodoList';

const Input = () => {
  const [todosList, setTodosList] = useState([]);
  const [todo, setTodo] = useState('');
  const [editedtodo, setEditedTodo] = useState(null);
  const [editTodoText, setEditTodoText] = useState('');

  ////////--------------- SUBMIT HANDLER ---------------////////////

  const submitHandler = (e) => {
    e.preventDefault();

    const createdNewTodo = {
      id: Math.random(),
      todo,
      done: false,
    };

    setTodosList([...todosList].concat(createdNewTodo));

    setTodo('');
  };

  ////////--------------- DELETE HANDLER ---------------////////////

  const deleleHandler = (id) => {
    const deleteTodo = [...todosList].filter((todo) => todo.id !== id);

    setTodosList(deleteTodo);
  };

  ////////--------------- DONE CHECK HANDLER ---------------////////////

  const checkHandler = (id) => {
    const checkedTodo = [...todosList].map((todo) => {
      if (todo.id === id) {
        todo.done = !todo.done;
        if (todo.done === true) {
          console.log('working');
        } else {
          console.log('wrong');
        }
      }
      return todo;
    });

    setTodosList(checkedTodo);
  };

  ////////--------------- EDIT TODO HANDLER ---------------////////////

  const editHandler = (id) => {
    const updatedEditedTodo = [...todosList].map((todo) => {
      if (todo.id === id) {
        todo.todo = editTodoText;
      }
      return todo;
    });

    setEditedTodo(null);
    setEditTodoText('');
    setTodosList(updatedEditedTodo);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
        />
        <button>Add Todo</button>
      </form>

      {todosList.map((todo) => (
        <TodoList
          key={todo.id}
          todo={todo}
          delTodo={deleleHandler}
          checkTodo={checkHandler}
          editHandler={editHandler}
          editTodoText={editTodoText}
          setEditTodoText={setEditTodoText}
          editedtodo={editedtodo}
          setEditedTodo={setEditedTodo}
        />
      ))}
    </div>
  );
};

export default Input;
