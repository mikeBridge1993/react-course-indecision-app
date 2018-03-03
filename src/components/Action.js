import React from 'react';
import ReactDOM from 'react-dom';

const Action = (props) => {
  return (
      <div>
          <button onClick={props.handlePick} disabled={!props.hasOptions} className="big-button">What should I do?</button>
      </div>
  );
}

export default Action;