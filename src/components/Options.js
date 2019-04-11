import React from 'react';

import Option from './Option';
import EmptyOption from './EmptyOption';

const Options = (props) => {
    const { options, removeOption, removeOptions } = props;

    const emptyOption = <EmptyOption />;
    const option = options.map((option, index) => (
        <Option 
            key={option} 
            optionText={option} 
            count={index + 1}
            removeOption={(e) => removeOption(option)}
        />
    ));

    return (
        <div className="options">
            <div className="option-header">
                <h3 className="option-header-title">Your Options</h3>
                <button onClick={removeOptions} className="border-button">Remove All</button>
            </div>
            {options.length === 0 ? emptyOption : option }
        </div>
    );
};

export default Options;