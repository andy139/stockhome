import * as APIUtil from '../util/property_api_util'

export const RECEIVE_PROPERTIES = 'RECEIVE_PROPERTIES';
export const RECEIVE_PROPERTY = 'RECEIVE_PROPERTY';
export const START_LOADING_PROPERTIES = 'START_LOADING_PROPERTIES';
export const START_LOADING_PROPERTY = 'START_LOADING_PROPERTY';


export const startLoadingProperties = () => ({
    type: START_LOADING_PROPERTIES,



})

export const startLoadingProperty = () => ({
    type: START_LOADING_PROPERTY,

})


export const receiveProperties = properties => ({
    type: RECEIVE_PROPERTIES,
    properties

});


export const receiveProperty = (property) => ({
    type: RECEIVE_PROPERTY,
    property

})


export const fetchProperty = id => dispatch => {

    dispatch(startLoadingProperty())
    
    return APIUtil.fetchProperty(id).then(property =>(
        dispatch(receiveProperty(property))
    ))


}

export const fetchProperties = (filters) => dispatch => {

    dispatch(startLoadingProperties())


    return APIUtil.fetchProperties(filters).then(properties =>{

       dispatch(receiveProperties(properties))
        
    })

}