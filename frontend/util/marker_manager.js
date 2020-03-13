class MarkerManager {
  constructor(map, handleClick){
    this.map = map;
    this.handleClick = handleClick;
    this.markers = {};
  }

  updateMarkers(properties){

    console.log("time to update");

      const propertiesObj = {};

      properties.forEach(property => propertiesObj[property.id] = property);

      properties
        .filter(property => !this.markers[property.id])
        .forEach(newProperty => this.createMarkerFromProperty(newProperty, this.handleClick))

      Object.keys(this.markers)
        .filter(propertyId => !propertyObj[propertyId])
        .forEach((propertyId) => this.removeMarker(this.markers[propertyId]))
    
  }


  createMarkerFromProperty(property) {
    const position = new google.maps.LatLng(property.lat, property.lng);
    const pin = {
      url: "https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/cserkesz_ikon.png"
    }
    const marker = new google.maps.Marker({
      position,
      map: this.map,
      propertyId: property.id
    });

    marker.addListener('click', () => this.handleClick(property));
    this.markers[marker.propertyId] = marker;
  }

}

export default MarkerManager;
