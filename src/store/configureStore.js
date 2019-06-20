import { createStore, combineReducers } from 'redux';
import hotelsReducer from '../reducers/hotels';
import filtersReducer from '../reducers/filters';
import layoutsReducer from '../reducers/layouts';

export default () => {
    const store = createStore(
        combineReducers({
            hotels: hotelsReducer,
            filters: filtersReducer,
            layouts: layoutsReducer,
        }),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );
    return store;
}