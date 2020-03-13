import React from 'react';
import MarkerManager from "../../util/marker_manager"
import {withRouter} from "react-router-dom";

class SearchMap extends React.Component {
    
  
    constructor(props){
        super(props);
    }

    handleMarkerClick(property) {
        debugger
        this.props.history.push(`/property/${property.id}`)
    }


    componentDidMount() {

        this.renderMap()



    }

    componentDidUpdate(prevProps) {
         
        this.MarkerManager.updateMarkers(this.props.properties);
        if (prevProps.properties !== this.props.properties) {
            this.renderMap();
        }
    }


    renderMap() {

        const mapOptions = {
            center: {
                lat: 59.3293,
                lng: 18.0686, //Stockholm Coordinates
            },
            zoom: 13,
        }



        this.map = new google.maps.Map(this.mapNode, mapOptions)
        

        const marker = new google.maps.Marker({
            position: {lat: 59.3293, lng: 18.0686},
            map: this.map,
        });

        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
        this.MarkerManager.updateMarkers(this.props.properties);


    }

   
    

    render() {
         
        return (
        
          <div id="search-map-container" ref={ map => this.mapNode = map }> // this ref gives us access to the map dom node
           
          </div>
        )
      }

}


export default withRouter(SearchMap);