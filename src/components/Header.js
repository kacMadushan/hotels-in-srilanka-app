import React from 'react';
//import Navbar from './Navbar';

const Header = (props) => {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 offset-sm-3">
                        <div className="show-case">
                            <h1 className="app-title">Hotels In Sri lanka</h1>
                            <h3 className="app-subtitle">Pay When You Stay. Best Price Guarantee.</h3>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;