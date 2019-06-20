// Layouts Reducer

const layoutsDefaultState = {
    view: true
}

export default (state = layoutsDefaultState, action) => {
    switch (action.type) {
        case 'CHANGE_HOTELS_LAYOUT_LIST':
            return {
                view: true
            }
        case 'CHANGE_HOTELS_LYAOUT_GRID':
            return {
                view: false
            }
        default:
            return state
    }
};