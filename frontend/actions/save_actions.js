import * as SaveAPIUtil from '../util/saved_api_util';


export const RECEIVE_SAVES = "RECEIVE_SAVES";
export const ADD_SAVE = "ADD_SAVE";
export const REMOVE_SAVE = "REMOVE_SAVE";


const receiveSaves = properties => ({
    type: RECEIVE_SAVES,
    properties

});


const addSave = (property) => ({
    type: ADD_SAVE,
    property

});

const removeSave = (property) => ({
    type: REMOVE_SAVE,
    property


});


export const fetchSaves = () => dispatch => (
    SaveAPIUtil.fetchSaves()
        .then(properties => dispatch(receiveSaves(properties)))
);


export const createSave = (propertyId) => dispatch => (
    SaveAPIUtil.addSave(propertyId)
        .then(property => dispatch(addSave(property)))

);


export const deleteSave = (propertyId) => dispatch => (
    SaveAPIUtil.removeSave(propertyId)
        .then(property => dispatch(removeSave(property)))

);