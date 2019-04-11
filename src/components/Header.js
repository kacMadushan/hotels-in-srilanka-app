import React from 'react';

const Header = (props) => {
    const { title, subtitle } = props;
    return (
        <div className="header">
            <div className="container">
                <h1 className="app-title">{title}</h1>
                <p className="app-subtile">{subtitle}</p>
            </div>
        </div>
    );
};

export default Header;