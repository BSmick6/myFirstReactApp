import React from 'react';

function InputLine(props) {
  return (
    <div>
      <input placeholder="Task..." />
      <button onClick={() => props.submit("Test Task")}>Add todo</button>
    </div>
  );
};

export default InputLine;
