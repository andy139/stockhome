import React from 'react';
import StarRatings from 'react-star-ratings';
import {connect} from 'react-redux';
import PropertyIndexItem from './property_related';


import { updateSortFilter, updateFilter, relatedFilter } from '../../actions/filter_actions';
import { asArray, asArraySimilar } from '../../reducers/selectors';



const mapStateToProps = state => ({
  properties: asArray(state.entities),
  filters: state.entities.filters,
  propertyAmount: state.entities.properties.amount_of_properties,
  similar: asArraySimilar(state.entities),


})


const mapDispatchToProps = dispatch => ({
  primaryFilter: (value) => dispatch(updateFilter("primary_filter", value)),
  updateFilter: (filter, value) => dispatch(updateFilter(filter, value)),
  updateSortFilter: (filter, value) => dispatch(updateSortFilter(filter, value)),
  relatedFilter: (filter, value) => dispatch(relatedFilter(filter, value)),


});


class Headers extends React.Component {
    render() {
      const selected = this.props.selectedPane;
      const headers = this.props.panes.map((pane, index) => {
        const title = pane.title;
        const klass = index === selected ? 'active' : '';
  
        return (
          <li 
            key={index}
            className={klass}
            onClick={() => this.props.onTabChosen(index)}>
            {title}{' '}
          </li>
        );
      });


      return (
        <ul className='tab-header'>
          {headers}
        </ul>
  
      );
   }
  }
  


class Tabs extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        selectedPane: 0
      };
      this.selectTab = this.selectTab.bind(this);
    }
  
    selectTab(num) {
      this.setState({selectedPane: num});
      
    }

    componentDidMount(){
      this.props.relatedFilter("locations", this.props.county)

    }


    ratings() {
      return (
        <div className="ratings-box">
          <div className="neighbor-rating">
            <img src="assets/icon-listing-details.svg"></img>
            <div>
                <div>
                  NEIGHBORHOOD
                </div>
                <div>
                  <StarRatings
                        rating={this.props.neighborhood_rating}
                        starDimension="20px"
                        starSpacing="1px"
                        starRatedColor="rgb(65, 105, 225)"
                    />
                </div>
            </div>
          </div>
          <div className="neighbor-rating">
            <img src="assets/icon-listing-details-schools.svg"></img>
            <div>
                <div>
                  AVERAGE SCHOOL
                </div>
                <div>
                  <StarRatings
                        rating={this.props.average_school_rating}
                        starDimension="20px"
                        starSpacing="1px"
                        starRatedColor="rgb(65, 105, 225)"
                    />
                </div>
            </div>
          </div>

        </div>
      )
    }
  
    render() {



   
   
      const pane = this.props.panes[this.state.selectedPane];


      const summary = (
        <div className = "map-box">
            {pane.content} {this.ratings()}
        </div>
      )

      const similar = (
        <div className="similar-box">
          {this.props.similar.map(property => {
            return <PropertyIndexItem key={property.id} property={property}></PropertyIndexItem>

          })}
        </div>

      )



      return (
        <div>
          <div className='tabs'>
            <Headers
              selectedPane={this.state.selectedPane}
              onTabChosen={this.selectTab}
              panes={this.props.panes}>
            </Headers>
            <div className='tab-content'>

                {pane.title === "Summary" ? summary : similar}

          
            </div>
          </div>
        </div>
      );
    }
  }
  


export default connect(mapStateToProps,mapDispatchToProps)(Tabs);