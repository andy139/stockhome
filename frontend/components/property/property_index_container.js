import { connect } from 'react-redux';
import { asArray } from '../../reducers/selectors';
import { fetchProperties } from '../../actions/property_actions'
import PropertyIndex from './property_index'

const mSTP = state => ({
    properties: asArray(state.entities)

})

const mDTP = dispatch => {
    return {
      fetchProperties: () => dispatch(fetchProperties()),
    };
  };

export default connect(
    mSTP, mDTP
)(PropertyIndex)