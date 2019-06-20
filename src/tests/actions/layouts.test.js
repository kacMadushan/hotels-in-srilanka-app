import { changeHotelsLayoutList, changeHotelsLayoutGrid } from '../../actions/layouts';

test('Should generate set change layout with list item ', () => {
    const actions = changeHotelsLayoutList();
    expect(actions).toEqual({
        type: 'CHANGE_HOTELS_LAYOUT_LIST'
    });
});

test('Should generate set change layout with gird item', () => {
    const actions = changeHotelsLayoutGrid();
    expect(actions).toEqual({
        type: 'CHANGE_HOTELS_LYAOUT_GRID'
    });
});