export const asArray = ({ properties }) => (
    Object.keys(properties).map(key => properties[key])
  );
  

export const selectProperty = ( propertyState, propertyId) => {
     
    return propertyState.properties[propertyId]
}; 