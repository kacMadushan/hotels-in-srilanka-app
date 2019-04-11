import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content : {
      top                   : '30%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      textAlign             : 'center',    
      transform             : 'translate(-50%, -50%)'
    }
  };

const OptionModal = (props) => {
    const { selectedOption, handleClearSelectedOption } = props;
    return (
        <Modal 
            isOpen={!!selectedOption}
            contentLabel="Selected Option"
            onRequestClose={handleClearSelectedOption}
            closeTimeoutMS={200}
            style={customStyles}
        >
            <div>
                <h3 className="selected-option-header">Selected Option</h3>
                {selectedOption && <p className="selected-option-text">{selectedOption}</p>}
                <button onClick={handleClearSelectedOption} className="border-button">Okay</button>
            </div>
        </Modal>
    );
};

export default OptionModal;