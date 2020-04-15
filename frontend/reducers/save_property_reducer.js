import { RECEIVE_SAVES, ADD_SAVE, REMOVE_SAVE} from '../actions/save_actions';


const savedReducer = (state = {}, action) => {

    Object.freeze(state)
    let newState = Object.assign({}, state)


    
    switch (action.type) {
        case RECEIVE_SAVES:
            return action.properties
        case ADD_SAVE:
            return Object.assign({},state, action.property)
        case REMOVE_SAVE:
            delete newState[action.property.property_id];
            return newState
        default:
            return state
    }


}


export default savedReducer;