import React from 'react';
import Bid from  './bid'



class ShowMisc extends React.Component {
    constructor(props){
        super(props)

    }


    addDecimals(num) {
        return (Math.round(num*100)/100).toFixed(2)
    
    };
    
    
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
    };
    
    render(){
        
        const { rent, cap_rate, municipility, city, gross_yield, appreciation, cash_flow,
            annualized_return, sqft, year_built, zipcode,
            neighborhood_rating, address, list_price,
            bedrooms, bathrooms, open_house, total_return_5yrs, main_photo_url, photo_urls} = this.props.props
        
        
        return(

            <div className="show-misc-container">
    
                <div className="cart-saved-ontop">
                    
                    <div className="flexbox-7">
                        <div className="indicator"> <i className="fas fa-circle color-green"></i> For Sale</div>
                        <div>Share <i className="fas fa-share"></i></div>
                        <div>Add To Cart <i className="fas fa-shopping-cart"></i></div>
                        <div>Save <i className="far fa-heart"></i></div>
                    </div>
    
                <Bid price = {this.props.props.list_price}/>
                
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
        )    


    }
   


    
            

}

export default ShowMisc;