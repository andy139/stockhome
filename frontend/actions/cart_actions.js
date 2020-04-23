import * as CartAPIUtil from '../util/cart_api_util';

import { startLoadingProperties } from './property_actions';
import { openModal, closeModal } from './modal_actions';


export const RECEIVE_CART = "RECEIVE_CART";
export const ADD_ITEM = "ADD_ITEM";
export const DELETE_ITEM = "DELETE_ITEM";
export const ADD_BID = "ADD_BID";

const receiveCart = properties => ({
    type: RECEIVE_CART,
    properties,

});


const addItem = (property) => ({
    type: ADD_ITEM,
    property,


})

const deleteItem = property => ({
    type: DELETE_ITEM,
    property,

})

const addBid = (bidData) => ({
    type: ADD_BID,
    bidData,
})


export const submitBid = (propertyId, bid) => (dispatch) => {
    
    CartAPIUtil.updateBid(propertyId, bid).then(bidData => dispatch(addBid(bidData)))


}

export const fetchCart = () => (dispatch, getState) => {
    dispatch(startLoadingProperties());
    CartAPIUtil.fetchCart()
        .then(properties => dispatch(receiveCart(properties)))


}


export const addProperty = (propertyId, bid) => (dispatch, getState) => {

    let loggedIn = Boolean(getState().session.id)
    if (!loggedIn) {
        dispatch(openModal("signupModal", null))
    } else {
        CartAPIUtil.addItem(propertyId, bid)
            .then(property => dispatch(addItem(property)))
    }



};


export const deleteProperty = (propertyId) => (dispatch, getState) => (
    CartAPIUtil.deleteItem(propertyId)
        .then(propertyRecord => dispatch(deleteItem(propertyRecord)))

)