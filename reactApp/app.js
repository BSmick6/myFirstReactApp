import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = [
  { taskText: "Come to San Fran", completed: false },
  { taskText: "Learn React", completed: true },
  { taskText: "Profit", completed: false }
];

function InputLine(props) {
  return (
    <div>
      <input placeholder="Task..." />
      <button>Add todo</button>
    </div>
  );
};

function Todo(props) {
  const t = props.task;
  return (
    <li>
      <button>X</button>
      {props.completed ? <strike>{t}</strike> : t}</li>
    );
};

function TodoList(props) {
  return (
    <ul>
      {props.todos.map((todo) => (<Todo task={todo.taskText} completed={todo.completed} />))}
    </ul>
  );
};

class TodoApp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
  }

  componentDidMount() {
    this.setState({
      todos: dummyData
    })
  }

  render() {
    return (
      <div>
        <InputLine />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));
