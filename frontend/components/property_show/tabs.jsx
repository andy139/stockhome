import React from 'react';
import StarRatings from 'react-star-ratings';


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



      return (
        <div>
          <div className='tabs'>
            <Headers
              selectedPane={this.state.selectedPane}
              onTabChosen={this.selectTab}
              panes={this.props.panes}>
            </Headers>
            <div className='tab-content'>

                <div className= "map-box">
                    {pane.content} {this.ratings()}
                </div>
          
            </div>
          </div>
        </div>
      );
    }
  }
  


export default Tabs;