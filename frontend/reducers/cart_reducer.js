import { RECEIVE_CART, ADD_ITEM, DELETE_ITEM } from '../actions/cart_actions';
import { RECEIVE_CLEAR } from '../actions/session_actions';
import {
    RECEIVE_CURRENT_USER,
    LOGOUT_CURRENT_USER


} from '../actions/session_actions';

const cartReducer = (state = {}, action) => {

    Object.freeze(state)
    let newState = Object.assign({}, state)


     
    switch (action.type) {
        
        case RECEIVE_CART:
            return action.properties
        case ADD_ITEM:
            return Object.assign({}, state, action.property)
        case DELETE_ITEM:
            delete newState[action.property.property_id];
            return newState
        case RECEIVE_CLEAR:
            return {};
        default:
            return state
    }


}


export default cartReducer;