// Filters Rducers

const filtersDefaultState = {
    text: '',
    location: ''
}

export default (state = filtersDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER':
            return {
                ...state,
                text: action.text
            }
        case 'SET_LOCATION_FILTER':
            return {
                ...state,
                location: action.location
            }          
        default:
            return state
    }
};