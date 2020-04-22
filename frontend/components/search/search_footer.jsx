import React from 'react';
import { connect } from 'react-redux';
import  { withRouter } from "react-router";
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
    "Solna", // up to here
    "Botkyrka",
    "Ekerö",
    "Haninge",
    "Huddinge",
    "Järfälla",
    "Nacka",
    "Norrtälje",
    "Nykvarn",
    "Nynäshamn",
    "Salem",
    "Sigtuna",
    "Sollentuna",
    "Södertälje",
    "Tyresö",
    "Täby",
    "Upplands-Bro",
    "Upplands",
    "Väsby",
    "Vallentuna",
    "Vaxholm",
    "Värmdö",
    "Österåker",

]


class SearchFooter extends React.Component {
    

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(location){
        if (this.props.location !== "/investment-property-marketplace"){
            this.props.history.push("/investment-property-marketplace");
            this.props.updateFilter("locations", location);
        }
        this.props.updateFilter("locations",location) ;

    }

    render(){


        return(
        
            <div className="show-footer-1-full-length">
                <div className="footer-1">

               
                    <div className="stockhome-markets">Stockhome Markets</div>
                    <div className="lineheight">

                        {allCounties.map((county, i) => {

                            if (i < 5){
                                if (i === allCounties.length - 1) return <span className="footer-click" onClick={() => { this.handleClick(county) }}>{county}&nbsp;</span>

                                return <span><span className="footer-click-bolded" onClick={() => { this.handleClick(county) }}>{county} </span> <span>|&nbsp;</span></span>


                            } else {
                                
                                return <span>
                                    <span className="footer-click-unbolded tooltiptop">{county} 
                                        <span className="tooltiptexttop">Unavailable</span>&nbsp;
                                    </span>
                                    { allCounties.length -1 !== i ? 
                                    <span>|&nbsp;</span> : null}
                                
                                </span>
                            
                            }

                        })}
            
                     </div>
            

                </div>

            </div>
        
        
        
        )
    }


}

export default withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(SearchFooter));