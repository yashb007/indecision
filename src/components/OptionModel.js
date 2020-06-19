import React from 'react';
import Modal from 'react-modal';

const OptionModel = (props) => (
  <Modal
  isOpen = {!!props.selectedOption}
  onRequestClose={props.handleClearOption}
  contentLabel="Selected Option"
  closeTimeoutMS={200}
  className="model"
  >
      <h3 className="model__title">
      Selected Option 
      </h3>
      {props.selectedOption && <p className="model__body">{props.selectedOption}</p>}
      <button className="button" onClick={props.handleClearOption}> Okay  </button>
  </Modal>
)
export default OptionModel;