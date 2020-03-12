import React from 'react';
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import StarRatings from 'react-star-ratings';
 
class PropertyItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.openHouse = this.openHouse.bind(this);
    }


    openHouse(){
        if (this.props.property.open_house) {
            return(
                <div className="property-icon"><FontAwesomeIcon icon={faHome}  className="property-icon"/> Open House</div>
            )
        } else {
            return(null);
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

    handleClick(){
        const propertyId = this.props.property.id;
        this.props.history.push(`/property/${propertyId}`)
    }
    

  
    render(){

      

        //destrcture
        const { rent, cap_rate, 
            annualized_return, sqft, year_built,
            neighborhood_rating, address, list_price,
            bedrooms, bathrooms, open_house, total_return_5yrs, main_photo_url, photo_urls} = this.props.property

          
         
        return(


            <div className="property-item-container">

               

            <div className="property-image"
                style={{
                backgroundImage : `url(${photo_urls[0]})`,
                 "width": "100%", "height": "50%", backgroundSize : `cover`}}
            
                onClick={this.handleClick}
            > 

                <div className="background-child">${this.addCommas(list_price)}</div>
                
            </div>
              
              
               
               <div className="property-item-miscs">
                    <div className="property-item-miscs-box">
                        <div>Current Rent</div>
                        <div>${this.addCommas(rent)}</div>
                    </div>
                    <div className="property-item-miscs-box">
                        <div>Cap Rate </div>
                        <div>{cap_rate}%</div>
                    </div>
                    <div className="property-item-miscs-box">
                        <div>Total Return </div>
                        <div> {this.addCommas(total_return_5yrs)} </div>
                    </div>
                    <div className="property-item-miscs-box">
                        <div>Neighborhood</div>
                        <div>

                            <StarRatings
                                rating={neighborhood_rating}
                                starDimension="20px"
                                starSpacing="1px"
                                starRatedColor="rgb(65, 105, 225)"
                            />
                        
                        
                        </div>
                    </div>
               </div>

               <div className="property-address">
                 <div className="property-address-box">{address}</div>  
                {this.openHouse()}
               </div>


            </div>

        )
    }
}

export default withRouter(PropertyItem);



