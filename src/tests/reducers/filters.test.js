import filtersReducer from '../../reducers/filters';

test('Should setup default filters values', () => {
    const state = filtersReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text: '',
        location: ''
    });
});

test('Should set text filter', () => {
    const text = 'This is text filter';
    const action = {
        type: 'SET_TEXT_FILTER',
        text
    };
    const state = filtersReducer(undefined, action);
    expect(state.text).toBe(text);
});

test('Should set location filter', () => {
    const location = 'colombo';
    const action = {
        type: 'SET_LOCATION_FILTER',
        location
    };
    const state = filtersReducer(undefined, action);
    expect(state.location).toBe(location);
});