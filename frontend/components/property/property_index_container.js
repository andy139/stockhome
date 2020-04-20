import { connect } from 'react-redux';
import { asArray } from '../../reducers/selectors';
import { fetchProperties } from '../../actions/property_actions'
import { createSave, deleteSave, fetchSaves } from '../../actions/save_actions'
import { closeModal, openModal } from "../../actions/modal_actions";
import PropertyIndex from './property_index'

const saveArray = (properties) => {
  return Object.keys(properties).map(key => properties[key])
}

const mSTP = state => ({
    properties: asArray(state.entities),
    loading: state.ui.loading,
    // saved: saveArray(state.ui.saved),
    saved: state.ui.saved,
    propertyAmount: state.entities.properties.amount_of_properties

})

const mDTP = dispatch => {
    return {
      fetchProperties: () => dispatch(fetchProperties()),
      fetchSaves: () => dispatch(fetchSaves()),
      addSave: (id) => dispatch(createSave(id)),
      deleteSave: (id) => dispatch(deleteSave(id)),
    };
  };

export default connect(
    mSTP, mDTP
)(PropertyIndex)