import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = [
  { taskText: "Come to San Fran", completed: false },
  { taskText: "Learn React", completed: true },
  { taskText: "Profit", completed: false }
];

class InputLine extends React.Component {
  render() {
    return (
      <div>
        <input placeholder="Task..." />
        <button>Add todo</button>
      </div>
    )
  }
}

class Todo extends React.Component {
  render() {
    const t = this.props.task;
    return (
      <li>
        <button>X</button>
        {this.props.completed ? <strike>{t}</strike> : t}</li>
    )
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {dummyData.map((todo) => (<Todo task={todo.taskText} completed={todo.completed} />))}
      </ul>
    )
  }
}

class TodoApp extends React.Component {
  render() {
    return (
      <div>
        <InputLine />
        <TodoList />
      </div>
    )
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));
