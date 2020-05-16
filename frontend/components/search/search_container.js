import {connect} from 'react-redux';

import {updateSortFilter, updateFilter} from '../../actions/filter_actions';
import {asArray} from '../../reducers/selectors';

import Search from './search';


const mapStateToProps = state => {
 
    let propertyAmount = state.entities.properties.amount_of_properties;
    // if (state.entities.properties.amount_of_properties !== 0 || !state.entities.properties.amount_of_properties) {
    //     let propArr;
    //     Object.keys(state.entities.properties).length !== 0 ? propArr = state.entities.properties : propArr = []; 

    //     debugger
    //     propertyAmount = propArr.filter(property => Number.isInteger(property))[0]
        
    // }   



    
    return {
    
    properties: asArray(state.entities),
    filters: state.entities.filters,
    propertyAmount: propertyAmount,
    loading: state.ui.loading,


}}


const mapDispatchToProps = dispatch => ({
    primaryFilter: (value) => dispatch(updateFilter("primary_filter",value)),
    updateFilter: (filter,value) => dispatch(updateFilter(filter, value)),
    updateSortFilter: (filter,value) => dispatch(updateSortFilter(filter, value)),


});



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);