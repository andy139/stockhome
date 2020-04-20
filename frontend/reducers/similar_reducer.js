import {

    SIMILAR_PROPERTIES,

} from '../actions/property_actions';



const similarReducer = (state = {}, action) => {
    Object.freeze(state);



    switch (action.type) {

        case SIMILAR_PROPERTIES:
            return action.properties
        default:
            return state;
    }



}


export default similarReducer;