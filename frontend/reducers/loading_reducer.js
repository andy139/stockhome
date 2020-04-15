import {
    START_LOADING_PROPERTIES,
    START_LOADING_PROPERTY,
    RECEIVE_PROPERTIES,
    RECEIVE_PROPERTY,

} from '../actions/property_actions'

import {
    RECEIVE_SAVES,
} from '../actions/save_actions'



const initialState = {
    indexLoading: false,
    detailLoading: false,
    loginLoading: false,
}


const loadingReducer = (state = initialState, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_PROPERTIES:
            return Object.assign({}, state, { indexLoading: false });
        case RECEIVE_PROPERTY:
            return Object.assign({}, state, { detailLoading: false });
        case RECEIVE_SAVES:
            return Object.assign({}, state, { indexLoading: false });
            
        case START_LOADING_PROPERTIES:
            return Object.assign({}, state, { indexLoading: true });
            
        case START_LOADING_PROPERTY:
            return Object.assign({}, state, { detailLoading: true });

        
        default:
            return state;
    }

}

export default loadingReducer;