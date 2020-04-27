import * as SaveAPIUtil from '../util/saved_api_util';

import {startLoadingProperties} from './property_actions';
import {openModal, closeModal} from './modal_actions';

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


export const fetchSaves = () => (dispatch, getState) => {
    dispatch(startLoadingProperties());
    SaveAPIUtil.fetchSaves()
        .then(properties => dispatch(receiveSaves(properties)))
};


export const createSave = (propertyId) => (dispatch, getState) => {

    if (Object.keys(getState().session).length  === 0) {
        dispatch(openModal("signupModal", null))
    } else {
        SaveAPIUtil.addSave(propertyId)
            .then(property => dispatch(addSave(property)))

    }

};


export const deleteSave = (propertyId) => (dispatch, getState) => (
    SaveAPIUtil.removeSave(propertyId)
        .then(propertyRecord => dispatch(removeSave(propertyRecord)))

);