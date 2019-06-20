import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <div className="container">
        <h3>404 Page NotFound</h3>
        <Link to="/">Go Home</Link>
    </div>
);

export default NotFound;