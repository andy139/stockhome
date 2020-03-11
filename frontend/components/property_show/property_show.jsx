import React from 'react';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import { faKey } from '@fortawesome/free-solid-svg-icons';
import Carousel from '../carousel/carousel';
import Submenu from '../submenu/submenu'

class PropertyShow extends React.Component {

    constructor(props){
        super(props)

        this.state = {
            bid :'',
        }

    }

    componentDidMount(){
         
        this.props.fetchProperty(this.props.propertyId)

    }


    update(field) {
        return e => this.setState({
          [field]: e.currentTarget.value
        });

        
    }

    addDecimals (num) {
        return (Math.round(num*100)/100).toFixed(2)

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


    render(){
         
        if (!this.props.property) return null;

        const { rent, cap_rate, municipility, city, gross_yield, appreciation, cash_flow,
            annualized_return, sqft, year_built, zipcode,
            neighborhood_rating, address, list_price,
            bedrooms, bathrooms, open_house, total_return_5yrs, main_photo_url, photo_urls} = this.props.property

        const price = this.addCommas(list_price)

        const allImages = photo_urls.map( url => {
            

            return  (
                    <img src={url} className="show-image-url" />
                )
        })

         

        return(
                <div>
                    <div className ="submenu-full-length">
                   
                        <div className="border-bottom"><Submenu></Submenu></div>
                    </div>
                    <div className="showpage-container">
                    
                        <div className="main-show-container">
                            <div className="carousel-container">
                                <div className = "carousel-words-space">
                                <div id="subbox-ontop-of-carousel">
                                        <div className="topbox">{address}</div>
                                    
                                        <div className="topbox">{city}, {municipility} {zipcode} </div>
                                </div> 
                                <div>
                                        <div>
                                            <div>
                                            Stockhome
                                            </div>
                                            <div>
                                            <FontAwesomeIcon icon={faKey} className="key-resizing"/> Exclusive
                                            </div>
                                        </div>
                                </div>
                                
                                </div>

                                <Carousel className="carousel" bedrooms = {bedrooms} bathrooms ={bathrooms} 
                                sqft ={this.addCommas(sqft)} year_built={year_built}>
                                        
                                        {allImages}

                                </Carousel>
                            </div>
        
                            <div className="show-misc-container">

                                <div className="cart-saved-ontop">
                                    
                                    <div className="flexbox-7">
                                        <div className="indicator"> <i className="fas fa-circle color-green"></i> For Sale</div>
                                        <div>Share <i className="fas fa-share"></i></div>
                                        <div>Add To Cart <i className="fas fa-shopping-cart"></i></div>
                                        <div>Save <i className="far fa-heart"></i></div>
                                    </div>

                                    <div className="price-show-container">    
                                            <div className="big-open-price">
                                                <div>
                                                    Open House Price 
                                                </div>
                                                <br/>
                                                <div>
                                                    {price}
                                                </div>
                                        
                                            </div>
                                            <div className="bid-button-container">
                                                <div className="input-container">
                                                    <FontAwesomeIcon icon={faDollarSign}  className="signup-icons"/>
                                                    
                                                    <input type="text"
                                                        value={this.state.bid}
                                                        placeholder = {price}
                                                        onChange={this.update('bid')}
                                                        className="signup-input"
                                                    />
                                                </div>
                                                <br/>
                                                <div> 
                                                    <input className="login-submit" type="submit" value="Review Bid" />  

                                                </div>

                                            </div>
                                    </div>
                                
                                </div>

                                <div className="calculator-container">

                                    <div className="slider-container">
                                        <div>
                                            Purchase Price
                                        </div>
                                        <div>
                                            Down Payment
                                        </div>
                                    </div>

                                    <div className="house-financials-container">
                                        <div>
                                            <div>Total Return</div> <div>${this.addCommas(total_return_5yrs)}</div>
                                            
                                        </div>

                                        <div>
        
                                            <div>Annualized Return</div> <div>{this.addDecimals(annualized_return)}%</div>
                                            
                                                                      </div>
                                        <div> 
                                            <div>Cap Rate</div> <div>{this.addDecimals(cap_rate)}%</div>
                                              
                                        </div>

                                        <div>
                                            <div>Gross Yield</div> <div>{this.addDecimals(gross_yield)}%</div>
                                        </div>
                                        <div>
                                            <div>Cap Rate</div> <div>{this.addDecimals(cap_rate)}%</div>
                                        </div>
                                        <div>
                                            <div>Appreciation</div> <div>{this.addDecimals(appreciation)}%</div>
                                            
                                        </div>
            
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="second-show-container">

                        </div>

                    
                    </div>
                </div>
         
        )

    }


}

export default PropertyShow;