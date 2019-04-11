console.log('app was running ok..');

const app = {
    title: 'Indecision App',
    subtitle: 'This is app subtitle',
    options: []
}

const checkOption = (option) => {
    if(option == ''){
        alert('Enter valid option');
    }
}

const addOption = (e) => {
    e.preventDefault();
    const option = e.target.elements.option.value;

    checkOption(option);

    if(option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        addNewOption();
    }
};

const removeAll = () => {
    app.options = [];
    addNewOption();
}

const onMakeDecision = () => {
    const randomNumber = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNumber];
    alert(option);
}

const addNewOption = () => {
    const template = (
        <div>
            <h1>This is react app</h1>
            {(app.subtitle && <p>{app.subtitle}</p>)}
            <p>{app.options.length > 0 ? 'Here you options' : 'No options'}</p>
            <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
            <button onClick={removeAll}>Remove All</button>
            <ol>
                {app.options.map((option, index) =>  <li key={index}>{option}</li>)}
            </ol>
            <form onSubmit={addOption}>
                <input type="text" name="option" />
                <button>Add Option</button>
            </form>
        </div>
    );
    ReactDOM.render(template, appRoot);
}

const appRoot = document.getElementById('app');
addNewOption();
