import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const OptionModal = (props) => {
  return (
    <Modal
        isOpen={!!props.selectedOption}
        onRequestClose={props.handleClearsModal}
        contentLabel="Selected Option"
        className="react-modal"
    >
      <h3 className="react-modal__title">Selected Option</h3>
      {props.selectedOption && <p className="react-modal__body">{props.selectedOption}</p>}
      <button className="button" onClick={props.handleClearsModal}>Okay</button>
    </Modal>

  );
};

export default OptionModal;