import React from 'react';

function Todo(props) {
  const t = props.task;
  return (
    <li>
      <button>X</button>
      {props.completed ? <strike>{t}</strike> : t}</li>
    );
};

export default Todo;
