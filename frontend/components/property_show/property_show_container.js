import { connect } from 'react-redux';


import { fetchProperty } from '../../actions/property_actions';
import PropertyShow from './property_show.jsx';
import {selectProperty} from '../../reducers/selectors'
import { createSave, deleteSave, fetchSaves } from '../../actions/save_actions'
import { closeModal, openModal } from "../../actions/modal_actions";

const mSTP = (state, {match}) => {


    
    const propertyId = parseInt(match.params.propertyId);
    const property = selectProperty(state.entities, propertyId)


     
    return {
        propertyId,
        property,
        loading: state.ui.loading,

    };
}

const mDTP = dispatch => {
     
    return {
        fetchProperty: id => dispatch(fetchProperty(id)),
        closeModal: () => dispatch(closeModal()),
        openModal: (type, data) => dispatch(openModal(type, data)),
        deleteSave: (propertyId) => dispatch(deleteSave(propertyId)),
        fetchSaves: () => dispatch(fetchSaves()),
        createSave: (propertyId) => dispatch(createSave(propertyId))
    
    }

};


export default connect(
    mSTP,
    mDTP
)(PropertyShow);