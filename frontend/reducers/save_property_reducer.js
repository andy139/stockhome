import { RECEIVE_SAVES, ADD_SAVE, REMOVE_SAVE} from '../actions/save_actions';


const savedReducer = (state = {}, action) => {

    Object.freeze(state)
    let newState = Object.assign({}, state)

    switch (action.type) {
        case RECEIVE_SAVES:
            return action.properties
        case ADD_SAVE:
            return newState[action.property.id] = action.property
        case REMOVE_SAVE:
            newState[action.property.id].delete = true
            return newState
        default:
            return state
    }


}


export default savedReducer;