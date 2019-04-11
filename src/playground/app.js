class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            options: props.options
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options) {
                this.setState(() => ({ options }));
            }
        } catch (e) {
            // Do nothing at all
        }
        
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        };
    };

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        const options = this.state.options.filter((option) => {
            return optionToRemove !== option
        });
        this.setState(() => ({ options }))
    }

    handlePick() {
        const randomOption = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomOption];
        alert(option);
    }

    handleAddOption(option) {
        if(!option) {
            return 'Enter valid value to add item';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }

        this.setState((prevState) => ({ options: prevState.options.concat(option) }));
    }


    render() {
        const subtitle = 'Put your life in the hands of a computer';
        return (
            <div>
                <Header 
                    subtitle={subtitle}
                />
                <Action 
                    hasOptions={this.state.options.length > 0}
                    handlePick={this.handlePick} 
                />
                <Options 
                    options={this.state.options}
                    handleDeleteOptions={this.handleDeleteOptions} 
                    handleDeleteOption={this.handleDeleteOption}
                />
                <AddOption 
                    handleAddOption={this.handleAddOption} 
                />
            </div>
        );
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    const { title, subtitle } = props;
    return (
        <div>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    );
};

Header.defaultProps = {
    title: 'Indecision'
}

const Action = (props) => {
    return (
        <div>
            <button
                onClick={props.handlePick}
                disabled={!props.hasOptions}
            >
                What should I do?
            </button>
        </div>
    );
};

const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((option, index) => (
                    <Option 
                        key={option} 
                        optionText={option} 
                        delete={() => props.handleDeleteOption(option)}
                    />
                ))
            }
        </div>
    );
};

const Option = (props) => {
    return (
        <div>
            <button onClick={props.delete}>Remove</button>
            <p>{props.optionText}</p>
        </div>
    );
};


class AddOption extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        };
    }
    handleAddOption(e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);

        this.setState(() => ({ error }));

        if(!error) {
            e.target.elements.option.value = '';
        }
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOption}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        );
    }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));