import { fetchProperties } from './property_actions';
export const UPDATE_FILTER = 'UPDATE_FILTER';

export const changeFilter = (filter, value) => ({

    type: UPDATE_FILTER,
    filter,
    value,

});


// for ui screen
export const updateFilter = (filter, value) => (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    dispatch(fetchBenches(getState().entities.filters));

};