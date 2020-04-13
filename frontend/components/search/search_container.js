import {connect} from 'react-redux';

import {updateFilter} from '../../actions/filter_actions';
import {asArray} from '../../reducers/selectors';

import Search from './search';


const mapStateToProps = state => ({
    properties: asArray(state.entities),

})


const mapDispatchToProps = dispatch => ({
    updateFilter: (value) => dispatch(updateFilter("primary_filter",value))

});



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);