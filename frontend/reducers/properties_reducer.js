import {

    RECEIVE_PROPERTIES,
    RECEIVE_PROPERTY,

} from '../actions/property_actions';



const propertiesReducer = (state = {}, action) => {
    Object.freeze(state);


     
    switch (action.type) {
        
        case RECEIVE_PROPERTIES:
            return action.properties
        case RECEIVE_PROPERTY:
            const newProperty = action.property;
            return Object.assign({}, state, newProperty)
        default:
            return state;
    }



}


export default propertiesReducer;