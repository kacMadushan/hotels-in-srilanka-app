import React from 'react';
import HotelContact from './HotelContact';

const HotelsList = ({ name, thumb, location, telephone, description }) => (
    <div className="col-sm-6">
        <div className="card mb-3 hotels-list">
            <div className="row no-gutters">
                <div className="col-md-4">
                    <img src={thumb} className="hotel-thumb" alt={name} />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="hotel-title">{name}</h5>
                        <p className="hotel-text">{description}</p>
                        <HotelContact location={location} telephone={telephone}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default HotelsList;