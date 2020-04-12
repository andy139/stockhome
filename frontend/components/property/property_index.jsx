import React from 'react';
import PropertyIndexItem from './property_index_item';
import {Link} from 'react-router-dom';
import Footer from '../footer/footer';
import Submenu from '../submenu/submenu';
import SearchFooter from '../search/search_footer';
import SearchMap from '../search/search_map';
import Search from '../search/search';
class PropertyIndex extends React.Component {
    constructor(props) {
        super(props);

    }


    componentDidMount() {
         
        this.props.fetchProperties();
    }

    render(){


        if (!this.props.properties) return null;

        const properties = this.props.properties.map( property => (
            <PropertyIndexItem key={property.id} property={property}/>
        ))

        return(
            <div className="property-marketplace-container">
                <div className ="submenu-full-length">
                   
                    <Submenu></Submenu>
                    
                </div>
                <div className="search-container">
                    <Search/>
                </div>

                <div className="searchmap-container">
                   <SearchMap properties={this.props.properties}/>
                </div>
               

                <div className= "property-index-container">
                    
                    {properties}

    
                </div>

              
              
                <SearchFooter/>
                <Footer/>

            </div>
        )
    }

}



export default PropertyIndex;