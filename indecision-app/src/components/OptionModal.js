import React from 'react';
import Modal from 'react-modal';

const OptionModal = (props) => (
    <Modal
        isOpen={!!props.selectedOption}
        contentLabel="Selected Option"
        onRequestClose={props.handleCloseModal}
        closeTimeoutMS={200}
        className="modal"
    >
        <h3 className="modal__title">Selected Option</h3>
        {props.selectedOption && <p className="modal__body">{props.selectedOption}</p>}
         <button class="button" onClick={props.handleCloseModal}>Lets Do It!</button>
    </Modal>
)

export default OptionModal;

// Create a new event handler in IndecisionApp that clears the selectedOption state
// Pass that into OptionModal
// Call it on button click