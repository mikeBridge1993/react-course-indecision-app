import React from 'react';
import ReactDOM from 'react-dom';

const Option = (props) => {
  return (
      <div className="option"><div className="option__full"><div className="lead option__text">{props.count + "."}&nbsp;{props.optionText}</div></div><button className="delete-button" onClick={(e) => {props.handleDeleteOption(props.optionText)}}><i className="fa fa-times fa delete-button--icon"></i></button></div>
      
  );
} 

export default Option;