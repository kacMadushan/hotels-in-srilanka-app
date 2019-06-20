import React from 'react';
import HotelContact from './HotelContact';

const HotelsGrid = ({ name, thumb, location, telephone, description }) => (
    <div className="col-sm-3">
        <div className="card hotels-grid">
            <img src={thumb} className="hotel-thumb" alt={name} />
            <div className="card-body">
                <h5 className="hotel-title">{name}</h5>
                <p className="hotel-text">{description}</p>
                <HotelContact location={location} telephone={telephone}/>
            </div>
        </div>
    </div>
);

export default HotelsGrid;