import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import AppRouter from './routers/AppRouter';
import './styles/styles.scss';

const store = configureStore();

const appRoot = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(appRoot, document.getElementById('app'));