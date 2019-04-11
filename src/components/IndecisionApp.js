import React, { Component } from 'react';

import Header from './Header';
import Action from './Action';
import Options from './Options';
import AddOption from './AddOption';
import OptionModal from './OptionModal';

class IndecisionApp extends Component {
    constructor(props) {
        super(props);
        this.handlePickOptions = this.handlePickOptions.bind(this);
        this.handleRemoveOptions = this.handleRemoveOptions.bind(this);
        this.handleRemoveOption = this.handleRemoveOption.bind(this);
        this.handleAddNewOption = this.handleAddNewOption.bind(this);
        this.handleClearSelectedOption = this.handleClearSelectedOption.bind(this);

        this.state = { 
            options: [],
            selectedOption: undefined
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options) {
                this.setState(() => ({ options }));
            }
        } catch(e) {

        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    handlePickOptions() {
        const randomOption = Math.floor(Math.random() * this.state.options.length);
        const options = this.state.options[randomOption];

        this.setState(() => ({
            selectedOption: options
        }));
    };

    handleRemoveOptions() {
        this.setState({ options: [] });
    };

    handleRemoveOption(toRemoveOption) {
        const options = this.state.options.filter(option => {
            return option !== toRemoveOption;
        });

        this.setState({ options });
    };

    handleAddNewOption(option) {
        if(!option) {
            return 'Enter valid value to add item'
        } else if(this.state.options.indexOf(option) > -1) {
            return 'This option already exists'
        }

        this.setState((prevState) => ({
            options: prevState.options.concat(option)
        }));
    };

    handleClearSelectedOption() {
        this.setState(() => ({ selectedOption: undefined }));
    }

    render() {
        const title = 'Indecision App';
        const subtitle= 'Put your life in the hands of a computer';
        return (
            <div>
                <Header 
                    title={title} 
                    subtitle={subtitle} 
                />
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length}
                        handlePickOptions={this.handlePickOptions}
                    />
                    <Options 
                        options={this.state.options}
                        removeOption={this.handleRemoveOption}
                        removeOptions={this.handleRemoveOptions} 
                    />
                    <AddOption 
                        handleAddNewOption={this.handleAddNewOption}
                    />
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption} 
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    };
};

export default IndecisionApp;