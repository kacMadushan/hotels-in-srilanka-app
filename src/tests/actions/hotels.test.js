import { submitFormValue, updateHotelsValue } from '../../actions/hotels';

test('Should setup add new hotel action object with provided value', () => {
    const hotelData = {
        name: 'hotel name',
        thumb: 'hotel image',
        telephone: 'hotel telephone',
        location: 'hote location',
        description: 'description',
    };
    const action = submitFormValue(hotelData);
    expect(action).toEqual({
        type: 'SUBMIT_FORM_VALUE',
        hotels: {
            ...hotelData,
            id: expect.any(String)
        }
    })
});

test('Should setup add expense action object with default values', () => {
    const action = submitFormValue();
    expect(action).toEqual({
        type: 'SUBMIT_FORM_VALUE',
        hotels: {
            id: expect.any(String),
            name: '',
            thumb: '',
            telephone: '',
            location: '',
            description: '',
        }
    });
});

// update hotels form date
// test('Should setup update hotels action object', () => {
//     const action = updateHotelsValue('123abc', { name: 'New hotel name'});
//     expect(action).toEqual({
//         type: 'UPDATE_HOTELS_VALUE',
//         id: '123abc',
//         updates: {
//             name: 'New hotel name'
//         }
//     });
// });