import React from 'react';

function Todo(props) {
  const t = props.task;
  return (
    <li onClick={() => props.toggle()}>
      <button onClick={() => props.xClick()}>X</button>
      {props.completed ? <strike>{t}</strike> : t}</li>
    );
};

export default Todo;
