import React from 'react';
import Todo from './Todo.js'

function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo) => (<Todo task={todo.taskText} completed={todo.completed} />))}
    </ul>
  );
};

export default TodoList;
