import React from 'react'
import MarkerManager from '../../util/marker_manager'

  

class ShowMap extends React.Component {

    constructor(props){
      super(props);

    }

    componentDidMount() {
      
      const mapOptions = {
          center: { lat: this.props.lat, lng: this.props.lng }, // this is SF
          zoom: 13,
        };
    
        // this.MarkerManager = new MarkerManager(this.map);

        this.map = new google.maps.Map(this.mapNode, mapOptions);
        

        const marker = new google.maps.Marker({
          position: {lat: this.props.lat, lng: this.props.lng},
          map: this.map,


        });
      


    }

        

      
    
      render() {
        return (
        
          <div id="map-container" ref={ map => this.mapNode = map }> // this ref gives us access to the map dom node
           
          </div>
        )
      }
    


}
  

export default ShowMap;