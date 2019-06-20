import React from 'react';
import { connect } from 'react-redux';
import { submitFormValue } from '../actions/hotels';
import HotelForm from './HotelForm';

const AddHotelPage = (props) => (
    <div className="container">
        <div className="row">
            <div className="col-sm-6">
                <HotelForm 
                    onFormSubmit={(hotels) => {
                        props.dispatch(submitFormValue(hotels));
                        props.history.push('/');
                    }}
                />
            </div>
        </div>
    </div>
);

export default connect()(AddHotelPage);