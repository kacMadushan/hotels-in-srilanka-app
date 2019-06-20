import uuid from 'uuid';

// SUBMIT_FORM_VALUE
export const submitFormValue = (
    { 
        name = '', 
        thumb = '', 
        telephone = '', 
        location = '', 
        description = ''
    } = {}
    ) => ({
    type: 'SUBMIT_FORM_VALUE',
    hotels: {
        id: uuid(),
        name,
        thumb,
        telephone,
        location,
        description
    }
});

// UPDATE_HOTELS_VALUE
export const updateHotelsValue = (id, update) => ({
    type: 'UPDATE_HOTELS_VALUE',
    id,
    update
});