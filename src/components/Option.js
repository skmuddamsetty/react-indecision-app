import React from 'react';
const Option = (props) => {
    return (
      <div>
        {props.option}
        <button className="button button--link" onClick={(e) => {
          props.handleDeleteOption(props.option);
        }}>Remove</button>
      </div>
    );
  }

export default Option;