import React from 'react';

const Option = (props) => {
    const { optionText, count, removeOption } = props;

    return (
        <div className="option">
            <p className="option-text">{count}.{optionText}</p>
            <button onClick={removeOption} className="default-button">Remove</button>
        </div>
    );
};

export default Option;