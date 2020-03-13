import React from 'react';
import Bid from  './bid'
import HouseCalculator from './house_calculator'


class ShowMisc extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currSliderBid: this.props.props.list_price,
            currDownPayment: 100,
        }

        this.handleChange = this.handleChange.bind(this)

        this.handleDownPayment = this.handleDownPayment.bind(this)
    }
    
    handleChange(event) {
        this.setState({currSliderBid: event.target.value});
    }

    handleDownPayment(event) {
        this.setState({currDownPayment: event.target.value});
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
    
                    <Bid price = {list_price} currSliderBid={this.state.currSliderBid}/>
                
                </div>

                <div className="calculator-container">
                
                    <div className="slider-container">
                        <div>
                            <div className="purchase-box-1">
                                <div>Purchase Price <i className="fas fa-info-circle"></i></div>
                                <div className="flex-right">${this.addCommas(this.state.currSliderBid)}</div>
                            </div>
                            `<div className="slidecontainer">
                                <input 
                                    id="myRange" 
                                    class="slider"
                                    type="range" 
                                    min={list_price / 2} max={list_price + (list_price / 3)} 
                                    value={this.state.currSliderBid} 
                                    onChange={this.handleChange}
                                    step={5}/>
                            </div>    
                        </div>
                        <div>
                            <div className="purchase-box-1">
                                <div>Down Payment <i className="fas fa-info-circle"></i> {this.state.currDownPayment}%</div>
        
                            </div>

                            <div className="slidecontainer">
                                <input 
                                    id="myRange" 
                                    class="slider"
                                    type="range" 
                                    min="0" max= "100" 
                                    value={this.state.currDownPayment} 
                                    onChange={this.handleDownPayment}
                                    step={5}/>
                            </div>    
                        </div>
                    </div>

                    <div className="house-financials-container">
                        <div>
                            <div>Total Return <i className="fas fa-info-circle"></i></div> <div>${this.addCommas(total_return_5yrs)}</div>
                        </div>
                        <div>
                            <div>Annualized Return <i className="fas fa-info-circle"></i></div> <div>{this.addDecimals(annualized_return)}%</div> 
                        </div>
                        <div> 
                            <div>Cap Rate <i className="fas fa-info-circle"></i></div> <div>{this.addDecimals(cap_rate)}%</div>
                        </div>
                        <div>
                            <div>Gross Yield <i className="fas fa-info-circle"></i></div> <div>{this.addDecimals(gross_yield)}%</div>
                        </div>
                        <div>
                            <div>Cap Rate <i className="fas fa-info-circle"></i></div> <div>{this.addDecimals(cap_rate)}%</div>
                        </div>
                        <div>
                            <div>Appreciation <i className="fas fa-info-circle"></i></div> <div>{this.addDecimals(appreciation)}%</div>
                        </div>
                    </div>
                </div>
    
              
            </div>
        )    


    }
   


    
            

}

export default ShowMisc;