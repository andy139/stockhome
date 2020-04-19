import React from 'react';
import { connect } from 'react-redux';

import { updateSortFilter, updateFilter } from '../../actions/filter_actions';
import { asArray } from '../../reducers/selectors';

const mapStateToProps = state => ({
    properties: asArray(state.entities),
    filters: state.entities.filters,
    propertyAmount: state.entities.properties.amount_of_properties


})


const mapDispatchToProps = dispatch => ({
    primaryFilter: (value) => dispatch(updateFilter("primary_filter", value)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
    updateSortFilter: (filter, value) => dispatch(updateSortFilter(filter, value)),


});




const allCounties = [
    "Stockholm",
    "Danderyd",
    "Lidingö",
    "Sundbyberg",
    "Solna",

]


class SearchFooter extends React.Component {
    

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(location){
        this.props.updateFilter("locations",location) ;

    }

    render(){


        return(
        
            <div className="show-footer-1-full-length">
                <div className="footer-1">

               
                    <div className="stockhome-markets">Stockhome Markets</div>
                    <div className="lineheight">

                        {allCounties.map((county, i) => {
                            if (i === allCounties.length - 1) return <span className="footer-click" onClick={()=>{this.handleClick(county)}}>{county}&nbsp;</span>

                            return <span className="footer-click" onClick={() => { this.handleClick(county) }}>{county} |&nbsp;</span>
                        })}
            
                     </div>
            

                </div>

            </div>
        
        
        
        )
    }


}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchFooter);