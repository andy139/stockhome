import React from 'react';
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import StarRatings from 'react-star-ratings';
import {connect} from 'react-redux';





 
class PropertyItem extends React.Component {
    constructor(props) {

        
        super(props);

        // let saved = this.props.saved;
        // let propertyId = this.props.property.id;
        // let isFavorited = Object.keys(saved).includes(propertyId);


    


        this.state = {
            isFavorited: this.props.isFavorited,
        }
        this.handleClick = this.handleClick.bind(this);
        this.openHouse = this.openHouse.bind(this);
        this.handleSave = this.handleSave.bind(this);
    }


    openHouse(){
        if (this.props.property.cash_only) {
            return(
              <div className="exclusive">
                Cash Only
              </div>
            )
        } else {
            return(
           
              <div className="property-icon"><FontAwesomeIcon icon={faHome} className="property-icon" /> Open House</div>
            )
        }

    }

    addCommas(nStr){
        nStr += '';
        var x = nStr.split('.');
        var x1 = x[0];
        var x2 = x.length > 1 ? '.' + x[1] : '';
        var rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
         x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
       }

    handleClick(event){
        event.stopPropagation();
        const propertyId = this.props.property.id;
        this.props.history.push(`/property/${propertyId}`)
    }


    handleSave(event){
        event.stopPropagation();
        let propertyId = this.props.property.id;
        if (this.props.isFavorited){
            this.props.deleteSave(propertyId)
        } else {
            this.props.addSave(propertyId)
        }

    }



  
    render(){

  
      

        //destrcture
        const { rent, cap_rate, city, municipality, zipcode,
            annualized_return, sqft, year_built,
            neighborhood_rating, address, list_price,
            bedrooms, bathrooms, open_house, total_return_5yrs, main_photo_url, photo_urls} = this.props.property

        
          
         
        return (
          <div className="property-item-container">
            <div
              className="property-image"
              style={{
                backgroundImage: `url(${main_photo_url})`,
                width: "100%",
                height: "50%",
                "border-radius": "4.5px",
                cursor: "pointer",
                backgroundSize: `cover`,
              }}
              onClick={this.handleClick}
            >
              <div className="item-save-heart">
                <span
                  className="fa-stack"
                  id="padding-save"
                  onClick={this.handleSave}
                >
                  {this.props.isFavorited ? (
                    <i className="fas fa-heart fa-stack-1x" id="blue-heart"></i>
                  ) : (
                    <i
                      className="fas fa-heart fa-stack-1x"
                      id="opacity-heart"
                    ></i>
                  )}
                  <i className="far fa-heart fa-stack-1x"></i>
                </span>
              </div>

              <div className="background-child">
                <div>${this.addCommas(list_price)}</div>
                <div className="bg-address">
                  {" "}
                  {bedrooms}bedrooms, {bathrooms}ba | {sqft}sqft | Built in{" "}
                  {year_built}
                </div>
              </div>
            </div>

            <div className="property-item-miscs">
              <div className="property-item-miscs-box item-1">
                <div>Current Rent</div>
                <div className="second-property-box">
                  {" "}
                  ${this.addCommas(rent)}
                </div>
              </div>

              <div className="property-item-miscs-box item-2">
                <div>Cap Rate </div>
                <div className="second-property-box">
                  {cap_rate.toFixed(2)}%
                </div>
              </div>
              <div className="property-item-miscs-box item-3">
                <div>Total Return </div>
                <div className="second-property-box">
                  {" "}
                  {this.addCommas(total_return_5yrs)}/5yr{" "}
                </div>
              </div>
              <div className="property-item-miscs-box item-4">
                <div id="neighborfix">Neighborhood</div>

                <div id="neighborfix">
                  <StarRatings
                    rating={neighborhood_rating}
                    starDimension="20px"
                    starSpacing="1px"
                    starRatedColor="rgb(65, 105, 225)"
                  />
                </div>
              </div>
            </div>

            {this.props.property.open_house ? (
              <div className="property-address">
                <div className="property-address-box">
                  <div className="second-property-box-3">{address} </div>
                  <div className="second-property-box-3">
                    {municipality}, Sweden {zipcode}
                  </div>
                </div>

                <div className="property-address-box">{this.openHouse()}</div>
              </div>
            ) : (
              <div className="property-address">
                <div className="property-address-box-100">
                  <div className="second-property-box-3">{address} </div>
                  <div className="second-property-box-3">
                    {municipality}, Sweden {zipcode}
                  </div>
                </div>
              </div>
            )}
          </div>
        );
    }
}

export default withRouter(PropertyItem);



