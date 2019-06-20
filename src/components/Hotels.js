import React from 'react';
import { connect } from 'react-redux';
import selectHotels from '../selectors/hotels';
import HotelsList from './HotelsList';
import HotelsGrid from './HotelsGrid';

const Hotels = (props) => {
    let hotelsView = null;
    const changeLyaout = props.layouts.view;
    const hotelsList = props.hotels.map((hotel) => <HotelsList key={hotel.id} {...hotel} />);
    const hotelsGrid = props.hotels.map((hotel) => <HotelsGrid key={hotel.id} {...hotel} />);

    if(changeLyaout) {
        hotelsView = hotelsList
    } else {
        hotelsView = hotelsGrid
    }

    return (
        <div className="row">
            {hotelsView}
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        hotels: selectHotels(state.hotels, state.filters),
        layouts: state.layouts
    }
}

export default connect(mapStateToProps)(Hotels);