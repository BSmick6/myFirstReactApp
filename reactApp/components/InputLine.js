import React from 'react';

class InputLine extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      typedText: ''
    }
  }

  handleTyping(event) {
    this.setState({ typedText: event.target.value });
  }

  handleSubmit() {
    this.props.submit(this.state.typedText);
    this.setState({ typedText: '' })
  }

  render() {
    return (
      <div>
        <input placeholder="Task..." onChange={(e) => this.handleTyping(e)} value={this.state.typedText} />
        <button onClick={() => this.handleSubmit()}>Add todo</button>
      </div>
    );
  }
};

export default InputLine;
