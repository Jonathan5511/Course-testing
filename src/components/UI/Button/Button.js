import React from 'react';

import './Button.css';

const Button = props => {

  const empty = props.onEmpty;

  return (
    <button type={props.type} className={`button ${!empty ? 'invalid':''}`} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
