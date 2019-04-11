let count = 0;
const addOne = () => {
    count++;
    counterRender();
}

const minusOne = () => {
    count--;
    counterRender();
}

const reset = () => {
    count = 0;
    counterRender();
}

const counterRender = () => {
    const templateTwo = (
        <div>
            <h1>Count: {count}</h1>
            <button onClick={addOne}>+1</button>
            <button onClick={minusOne}>-1</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
    ReactDOM.render(templateTwo, appRoot);
}

const appRoot = document.getElementById('app');
counterRender();