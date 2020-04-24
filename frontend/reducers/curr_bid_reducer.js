import {ADD_BID } from '../actions/cart_actions';


const bidReducer = (state = {}, action) => {

    Object.freeze(state)
    let newState = Object.assign({}, state)

    switch (action.type) {


        case ADD_BID:
            return Object.assign({}, state, action.bidData)
        default:
            return state
    }


}


export default bidReducer;