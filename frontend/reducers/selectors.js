export const asArray = ({ properties }) => {



  let propertyArr =  Object.keys(properties).map(key => 
      properties[key])

  return propertyArr.filter(property => property.id )
  };


export const asArraySimilar = ({ similar }) => {



  let propertyArr = Object.keys(similar).map(key =>
    similar[key])

  return propertyArr.filter(property => property.id)
}; 
  

export const selectProperty = ( propertyState, propertyId) => {
     
    return propertyState.properties[propertyId]
}; 