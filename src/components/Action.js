import React from 'react';

const Action = (props) => {
    const { hasOptions, handlePickOptions } = props;
    return (
        <div className="action">
            <button 
                disabled={!hasOptions} 
                className="big-button"
                onClick={handlePickOptions}
            >
                What should I do?
            </button>
        </div>
    );
};

export default Action;