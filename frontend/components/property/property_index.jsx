import React from 'react';
import PropertyIndexItem from './property_index_item';
import PropertyIndexItem2 from './property_index_item_v2';
import {Link} from 'react-router-dom';
import Footer from '../footer/footer';
import Submenu from '../submenu/submenu';
import SearchFooter from '../search/search_footer';
import SearchMap from '../search/search_map'
import Search from '../search/search_container';
import SearchPage from '../search/search_page';

//https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/Pulse-1s-177px.gif

//https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/Pulse-1s-407px.gif

class PropertyIndex extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gridSelection: false,

            


        }

        this.switch = this.switch.bind(this);

    }


    componentDidMount() {
        this.props.fetchSaves();
        this.props.fetchProperties();
    }

    switch(type){

        if (type === "default") {
             this.setState({ gridSelection: false });
        } else {
             this.setState({ gridSelection: true });
        }
       
    }



    render(){

        
    const itemHeader = (
      <div className="title-item">
        <div className="saved-pic-header">
          <label>&nbsp;</label>
          <label></label>
          <label>&nbsp;</label>
        </div>

        <div className="save-address">
          <div>Address</div>
        </div>

        <div className="save-space">
          <div>Price</div>
        </div>

        <div className="save-space-2">
          <div>Current</div>
          <div>Rent</div>
        </div>

        <div className="save-space-2">
          <div>Gross</div>
          <div>Yield</div>
        </div>

        <div className="save-space-2">
          <div>Cap</div>
          <div>Rate</div>
        </div>

        <div className="save-space-2">
          <div>5Y Total</div>
          <div>Return</div>
        </div>

        <div className="save-space-2">
          <div>Annualized</div>

          <div>Return</div>
        </div>

        <div className="save-space-2">
          <div>Year</div>
          <div>Built</div>
        </div>

        <div className="save-space-2">Status</div>

        <div className="save-space-2">&nbsp;</div>
      </div>
    );


        let {indexLoading} = this.props.loading


        const loadingScreen = (
            <div className="loading-screen">

                <img src="https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/Spinner-1s-200px+(4).gif"></img>

            </div>

        )


        if (!this.props.properties) return null;

        const defProperties = (
          
          
          
          this.props.properties.map( (property, i) => {


            let isFavorited = Object.keys(this.props.saved).map(Number).includes(property.id)
            
            return <PropertyIndexItem key={property.id} property={property} isFavorited={isFavorited} addSave={this.props.addSave} deleteSave={this.props.deleteSave}/>
        })

        )


        const gridProperties = ( 
        
        
        <div>

            { this.props.propertyAmount > 0 ? itemHeader : null}
            {
                    this.props.properties.map((property, i) => {
                    let isFavorited = Object.keys(this.props.saved)
                        .map(Number)
                        .includes(property.id);

                    return (
                        <PropertyIndexItem2
                        i={i}
                        key={property.id}
                        property={property}
  
                        isFavorited={isFavorited}
                        addSave={this.props.addSave}
                        deleteSave={this.props.deleteSave}
                        />
                    );
                    })
            }



        </div>
        
        
        )
        
        
        
      
            const retry = (
            
              <div className="display-retry">
                <div>
                  No results found - Please update your filter and try again!
                </div>
                &nbsp;
                <div className="retry-photo">
                  <img src="assets/noresults.svg"></img>
                </div>



              </div>
            )

        return (
          <div className="property-marketplace-container">
       
            <div className="search-container">
              <Search
                switch={this.switch}
                gridSelection={this.state.gridSelection}
              />
            </div>

            <div>&nbsp;</div>
            <div className="property-index-container">
              {this.state.gridSelection
                ? indexLoading
                  ? loadingScreen
                  : gridProperties
                : indexLoading
                ? loadingScreen
                : defProperties}
              {this.props.propertyAmount === 0 ? retry : null}
            </div>

          
          </div>
        );
    }

}



export default PropertyIndex;