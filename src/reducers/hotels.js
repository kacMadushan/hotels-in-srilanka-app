import hotels from '../data/hotels';

// Hotels Reducer

const hotelsDefaultState = hotels;

export default (state = hotelsDefaultState, action) => {
    switch (action.type) {
        case 'SUBMIT_FORM_VALUE':
            return [
                ...state,
                action.hotels
            ]
        default:
            return state
    }
};