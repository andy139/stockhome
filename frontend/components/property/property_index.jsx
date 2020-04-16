import React from 'react';
import PropertyIndexItem from './property_index_item';
import {Link} from 'react-router-dom';
import Footer from '../footer/footer';
import Submenu from '../submenu/submenu';
import SearchFooter from '../search/search_footer';
import SearchMap from '../search/search_map';
import Search from '../search/search_container';

//https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/Pulse-1s-177px.gif

//https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/Pulse-1s-407px.gif

class PropertyIndex extends React.Component {
    constructor(props) {
        super(props);

    }


    componentDidMount() {
        this.props.fetchSaves();
        this.props.fetchProperties();
    }



    render(){


        let {indexLoading} = this.props.loading
 

        const loadingScreen = (
            <div className="loading-screen">

                <img src="https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/Spinner-1s-200px+(4).gif"></img>

            </div>

        )


        if (!this.props.properties) return null;

        const properties = this.props.properties.map( property => {


            let isFavorited = Object.keys(this.props.saved).map(Number).includes(property.id)
            
            return <PropertyIndexItem key={property.id} property={property} isFavorited={isFavorited} addSave={this.props.addSave} deleteSave={this.props.deleteSave}/>
        })

        return(
            <div className="property-marketplace-container">
                <div className ="submenu-full-length">
                   
                    <Submenu></Submenu>
                    
                </div>
                <div className="search-container">
                    <Search/>
                </div>


                
               

                <div className= "property-index-container">

                
                    {indexLoading ? loadingScreen : properties}

                </div>

              
              
                <SearchFooter/>
                <Footer/>

            </div>
        )
    }

}



export default PropertyIndex;