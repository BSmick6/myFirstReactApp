import React from 'react';
import Todo from './Todo.js'

function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo, i) => (
        <Todo xClick={() => props.todoXClick(i)} toggle={() => props.toggle(i)}
          task={todo.taskText} completed={todo.completed} />))}
    </ul>
  );
};

export default TodoList;
