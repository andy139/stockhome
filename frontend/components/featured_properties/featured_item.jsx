import React from 'react';
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import StarRatings from 'react-star-ratings';



class FeaturedItem extends React.Component {
    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
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
        const { rent, cap_rate, address, city, municipality,
            annualized_return, sqft, year_built, gross_yield,
            neighborhood_rating, list_price, total_return_5yrs,
            bedrooms, bathrooms, open_house, main_photo_url, photo_urls} = this.props.property

          
         
        return(


            <div className="featured-item-container">

               

                <div className="padding-fix-1"
                    style={{
                    backgroundImage : `url(${main_photo_url})`,
                    "width": "100%", "height": "60%", backgroundSize : "cover"}}
                
                    onClick={this.handleClick}
                > 
                    {/* <div className="background-child">${this.addCommas(list_price)}</div> */}
                    
                </div>
                
                <div>
                    {city}, {municipality}
                </div>

                <div>
                    {bedrooms} bd | {bathrooms} ba | {sqft} sqft
                </div>
                
                <div>
                      Current Rent  <span className="bold-fix-splash" >${this.addCommas(rent)}</span> | Cap Rate <span className="bold-fix-splash">{(Math.round(cap_rate*100)/100).toFixed(2)}%</span>
                </div>

                <div>
                    Total Return <span className="bold-fix-splash" >${this.addCommas(total_return_5yrs)}</span>/5-yr
                </div>
                <div>
                    Neighborhood Rating <StarRatings
                                rating={neighborhood_rating}
                                starDimension="15px"
                                starSpacing="1px"
                                starRatedColor="rgb(65, 105, 225)"
                            />
                </div>
              
    


            </div>

        )
    }
}

export default withRouter(FeaturedItem);
