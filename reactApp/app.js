import React from 'react';
import ReactDOM from 'react-dom';

const dummyData = ["Come to San Fran", "Learn React", "Profit"];

class Todo extends React.Component {
  render() {
    return (
      <li><button>X</button>{this.props.task}</li>
    )
  }
}

class TodoList extends React.Component {
  render() {
    return (
      <ul>
        {dummyData.map((todo) => (<Todo task={todo} />))}
      </ul>
    )
  }
}

ReactDOM.render(<TodoList />, document.getElementById('root'));
