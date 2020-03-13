import React from 'react';
import MarkerManager from "../../util/marker_manager"
import {withRouter} from "react-router-dom";

class SearchMap extends React.Component {
    
  
    constructor(props){
        super(props);
    }

    handleMarkerClick(properties) {
        this.props.history.push(`/property/${property.id}`)
    }


    componentDidMount() {

        

        const mapOptions = {
            center: {
                lat: 59.3293,
                lng: 18.0686, //Stockholm Coordinates
            },
            zoom: 13,
        }



        this.map = new google.maps.Map(this.mapNode, mapOptions)
        this.MarkerManager = new MarkerManager(this.map);

        const marker = new google.maps.Marker({
            position: {lat: 59.3293, lng: 18.0686},
            map: this.map,
        });

        // this.markerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
        // this.markerManager.updateMarkers(this.props.properties);
        
        // debugger 



    }


    

    render() {
        return (
        
          <div id="search-map-container" ref={ map => this.mapNode = map }> // this ref gives us access to the map dom node
           
          </div>
        )
      }

}


export default withRouter(SearchMap);