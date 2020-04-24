import React from 'react';
import {connect} from 'react-redux';
import MarkerManager from "../../util/marker_manager"
import {withRouter, Link} from "react-router-dom";
import PropertyIndexItem from "../property/property_index_item"
import $ from 'jquery';
import { asArray } from '../../reducers/selectors';


const mSTP = (state) => {
    return {
  
        filters: state.entities.filters,
        properties: asArray(state.entities),
    }

}

const mDTP = (dispatch) => {
    return {


    }

}

class SearchMap extends React.Component {
    
  
    constructor(props){
        super(props);

        this.bounds = new google.maps.LatLngBounds();
        this.renderMap = this.renderMap.bind(this);
        this.handleMarkerClick = this.handleMarkerClick.bind(this);
    }

    handleMarkerClick(property) {
         
        this.props.history.push(`/property/${property.id}`)
    }


    componentDidMount() {

        this.renderMap()



    }

    componentDidUpdate(prevProps) {
         
        // this.MarkerManager.updateMarkers(this.props.properties);
        if (prevProps.filters !== this.props.filters) {
             
            this.renderMap();
        }
    }


    renderMap() {

        let infowindow = new google.maps.InfoWindow();
        let bounds = new google.maps.LatLngBounds();


        const mapOptions = {
            center: {
                lat: 59.3293,
                lng: 18.0686, //Stockholm Coordinates
            },
            zoom: 13.2,
        }


        let locations = this.props.properties


        this.map = new google.maps.Map(this.mapNode, mapOptions)
        // this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this), this.bounds);
        // this.MarkerManager.updateMarkers(this.props.properties);
     
        
        if(locations.length > 0){
            let i = 0;
            for (i = 0; i < locations.length; i++) {

                let property = locations[i];
                let marker = new google.maps.Marker({
                    position: new google.maps.LatLng(locations[i].lat, locations[i].lng),
                    map: this.map,
                    // animation: google.maps.Animation.DROP,
                    mapTypeId: google.maps.MapTypeId.TERRAIN,
                    // icon: "https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/placeholder.png"
                });

                //extend the bounds to include each marker's position
                bounds.extend(marker.position);
                marker.addListener('click', () => this.handleMarkerClick(property))

                // google.maps.event.addListener(marker, 'click', (function (marker, i) {
                //     return function () {
                //          
                //         this.props.history.push(`/property/${property.id}`)
                //         // infowindow.setContent(`${content}`);
                //         // infowindow.open(this.map, marker);
                //     }
                // })(marker, i));


            }


            this.map.fitBounds(bounds);


        }
       

        


    }

   
    

    render() {
         
        return (
  
                <div id="search-map-container" ref={map => this.mapNode = map}> // this ref gives us access to the map dom node

                </div>

    
       

           
        )
      }

}


export default connect(mSTP, mDTP)(withRouter(SearchMap));