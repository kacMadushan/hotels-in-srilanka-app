import { setTextFilter, setLocactionFilter } from '../../actions/filters';

test('Should generate set hotel name filter object with text value', () => {
    const text = 'Hotels'
    const actions = setTextFilter(text);
    expect(actions).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    });
});

test('Should generate set hotel location filter object with text value', () => {
    const location = 'colombo'
    const actions = setLocactionFilter(location);
    expect(actions).toEqual({
        type: 'SET_LOCATION_FILTER',
        location
    });
});