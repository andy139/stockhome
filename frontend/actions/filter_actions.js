import { fetchProperties, receiveProperties, fetchSimilar } from './property_actions';
import { asArray } from '../reducers/selectors'
import {sort} from '../util/sort_util'

export const UPDATE_FILTER = 'UPDATE_FILTER';
export const SORT_FILTER = 'SORT_FILTER';


export const changeFilter = (filter, value) => ({

    type: UPDATE_FILTER,
    filter,
    value,

});


export const sortFilter = (filter, value) => ({
    type: SORT_FILTER,
    filter, 
    value,


})

//only change properties in curr state
export const updateSortFilter = (filter, value) => (dispatch, getState) => {

    dispatch(sortFilter(filter, value));


    let filters = getState().entities.filters;
    let properties = getState().entities.properties;


    // Only need to sort properties in store, no need to grab from backend
    let propertiesArr = Object.keys(properties).map(key => properties[key])
    let sortedProperties = sort(propertiesArr, filters.sort)
    dispatch(receiveProperties(sortedProperties))


}


// for ui screen
export const updateFilter = (filter, value) => (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    dispatch(fetchProperties(getState().entities.filters));

};


export const relatedFilter = (filter, value) => (dispatch, getState) => {
    dispatch(changeFilter(filter, value));
    dispatch(fetchSimilar(getState().entities.filters));

};