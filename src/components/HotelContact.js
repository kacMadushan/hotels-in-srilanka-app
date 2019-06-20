import React from 'react';

const HotelContact = ({ location, telephone }) => (
    <ul className="list-inline contact-info">
        <li className="list-inline-item">
            <p className="hotel-location"><i className="fa fa-thumb-tack" aria-hidden="true"></i> {location}</p>
        </li>
        <li className="list-inline-item">
            <p className="hotel-telephone"><i className="fa fa-phone" aria-hidden="true"></i> {telephone}</p>
        </li>
    </ul>
);

export default HotelContact;