class MarkerManager {
  constructor(map, handleClick,bounds){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
    this.bounds = bounds;
  }

  updateMarkers(properties) {
    properties.forEach( property => {
        if (!this.markers[property.id]) {
            this.createMarkerFromProperty(property);
        }
    })
  }



  createMarkerFromProperty(property) {
 

    const position = new google.maps.LatLng(property.lat, property.lng);
    const pin = {
      url: "https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/iconfinder_map-marker_285659.png"
    }


    const marker = new google.maps.Marker({
      icon:pin,
      position,
      map: this.map,
      animation: google.maps.Animation.DROP,
      propertyId: property.id
    });

    this.bounds.extend(marker.position)
    
    marker.addListener('click', () => this.handleClick(property));
    this.markers[marker.propertyId] = marker;
    marker.setMap(this.map);

    

  }

}

export default MarkerManager;
