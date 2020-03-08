export const asArray = ({ properties }) => (
    Object.keys(properties).map(key => properties[key])
  );
  