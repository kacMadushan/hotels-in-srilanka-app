import React, { Component } from 'react';

import ErrorMessage from './ErrorMessage';

class AddOption extends Component {
    constructor(props) {
        super(props);
        this.handleAddNewOption = this.handleAddNewOption.bind(this);
        this.state = { 
            errors: undefined
        }
    }


    handleAddNewOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const errors = this.props.handleAddNewOption(option);

        this.setState(() => ({ errors }));

        if(!errors) {
            e.target.elements.option.value = '';
        }
    };
    render() {
        return (
            <div>
                {this.state.errors && <ErrorMessage errorMsg={this.state.errors}/>}
                <form className="add-option" onSubmit={this.handleAddNewOption}>
                    <input className="add-option-input" type="text" name="option" placeholder="Option here"/>
                    <button className="border-button">Add Option</button>
                </form>
            </div>
        );
    };
};

export default AddOption;