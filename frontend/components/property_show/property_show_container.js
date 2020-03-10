import { connect } from 'react-redux';


import { fetchProperty } from '../../actions/property_actions';
import PropertyShow from './property_show.jsx';
import {selectProperty} from '../../reducers/selectors'

const mSTP = (state, {match}) => {


    
    const propertyId = parseInt(match.params.propertyId);
    const property = selectProperty(state.entities, propertyId)


     
    return {
        propertyId,
        property

    };
}

const mDTP = dispatch => {
     
    return {
    fetchProperty: id => dispatch(fetchProperty(id))
    }

};


export default connect(
    mSTP,
    mDTP
)(PropertyShow);