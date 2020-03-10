import { connect } from 'react-redux';
import { asArray } from '../../reducers/selectors';
import { fetchProperties } from '../../actions/property_actions'
import FeaturedIndex from './featured_index';

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
)(FeaturedIndex);