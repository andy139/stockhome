import {connect} from 'react-redux';

import {updateSortFilter, updateFilter} from '../../actions/filter_actions';
import {asArray} from '../../reducers/selectors';

import Search from './search';


const mapStateToProps = state => ({
    properties: asArray(state.entities),
    filters: state.entities.filters,

})


const mapDispatchToProps = dispatch => ({
    primaryFilter: (value) => dispatch(updateFilter("primary_filter",value)),
    updateFilter: (filter,value) => dispatch(updateFilter(filter, value)),
    updateSortFilter: (filter,value) => dispatch(updateSortFilter(filter, value)),


});



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);