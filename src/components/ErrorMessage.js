import React from 'react';

const ErrorMessage = (props) => {
    const { errorMsg } = props;
    return <p className="error-msg">{errorMsg}</p>;
};

export default ErrorMessage;