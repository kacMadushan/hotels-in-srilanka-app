import React from 'react';

class HotelForm extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            imageUrl: '',
            hotelName: '',
            location: '',
            telephone: '',
            description: '',
            error: ''
        }
    };

    onImageUrlChange = (e) => {
        const imageUrl = e.target.value;
        this.setState(() => ({ imageUrl }));
    };

    onHotelNameChange = (e) => {
        const hotelName = e.target.value;
        this.setState(() => ({ hotelName }));
    };

    onLocationChange = (e) => {
        const location = e.target.value;
        this.setState(() => ({ location }));
    };

    onTelephoneChange = (e) => {
        const telephone = e.target.value;
        this.setState(() => ({ telephone }));
    };

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({ description }));
    };

    onFormSubmit = (e) => {
        e.preventDefault();
        if(!this.state.hotelName || !this.state.description || !this.state.location) {
            this.setState(() => ({ error: 'Please provide Hotel Name, Description and Location.'}))
        } else {
            this.setState(() => ({ error: ''}));
            this.props.onFormSubmit({
                thumb: this.state.imageUrl,
                name: this.state.hotelName,
                location: this.state.location,
                telephone: this.state.telephone,
                description: this.state.description
            })
        }
    };

    render() {
        const { 
            imageUrl, 
            hotelName, 
            location, 
            telephone, 
            description,
            error
        } = this.state;

        const {
            onImageUrlChange,
            onHotelNameChange,
            onLocationChange,
            onTelephoneChange,
            onDescriptionChange,
            onFormSubmit
        } = this;

        return (
            <div>
                <h2>Add New Hotel</h2>
                {error && <p>{error}</p>}
                <form className="add-form" onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label>Image URl</label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={imageUrl}
                            onChange={onImageUrlChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Hotel Name</label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={hotelName}
                            onChange={onHotelNameChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Location</label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={location}
                            onChange={onLocationChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Telephone</label>
                        <input 
                            type="text" 
                            className="form-control"
                            value={telephone}
                            onChange={onTelephoneChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Description</label>
                        <textarea 
                            className="form-control"
                            value={description}
                            onChange={onDescriptionChange}
                        >

                        </textarea>
                    </div>
                    <button className="btn-submit">Add Hotel</button>
                </form>
            </div>
        );
    }
}

export default HotelForm;