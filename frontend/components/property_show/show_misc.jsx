import React from 'react';
import Bid from  './bid'
import HouseCalculator from './house_calculator'
import {connect} from 'react-redux';
import { createSave, deleteSave, fetchSaves } from '../../actions/save_actions'
import  {fetchCart, addProperty, deleteProperty,submitBid } from '../../actions/cart_actions';
import {withRouter} from 'react-router-dom';
const saveArray = (properties) => {
    return Object.keys(properties).map(key => properties[key])
}

const mSTP = state => {

    debugger

    return {

        cart: state.ui.cart,

        saved: state.ui.saved,
        isLoggedIn: Object.keys(state.session).length !== 0,

    }



}


const mDTP = dispatch => {

    return {

        closeModal: () => dispatch(closeModal()),
        openModal: (type, data) => dispatch(openModal(type, data)),
        deleteSave: (propertyId) => dispatch(deleteSave(propertyId)),
        fetchSaves: () => dispatch(fetchSaves()),
        createSave: (propertyId) => dispatch(createSave(propertyId)),
        addItem: (propertyId, bid) => dispatch(addProperty(propertyId,bid)),
        deleteItem: (propertyId, bid) => dispatch(deleteProperty(propertyId)),
        addBid: (propertyId, bid) => dispatch(addBid(propertyId,bid)),


    }

}



class ShowMisc extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            currSliderBid: this.props.props.list_price,
            currDownPayment: 100,
            totalReturn: this.props.props.total_return_5yrs,
        }

        this.handleChange = this.handleChange.bind(this)

        this.handleDownPayment = this.handleDownPayment.bind(this)
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event, isFavorited){

        event.stopPropagation();
        let propertyId = this.props.property.id;
        if (isFavorited) {
            this.props.deleteSave(propertyId)
        } else {
            this.props.addSave(propertyId)
        }
    }
    
    handleChange(event) {
        this.setState({currSliderBid: event.target.value});
    }

    handleDownPayment(event) {
        this.setState({currDownPayment: event.target.value});
        debugger
        let newReturn = this.props.props.total_return_5yrs * (event.target.value / 100)
        this.setState({ totalReturn: newReturn.toFixed(0) });
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

    componentDidMount(){

        this.setState({totalReturn: this.props.props.total_return_5yrs})
    }
    
    render(){
        
        const { rent, cap_rate, municipility, city, gross_yield, appreciation, cash_flow, id,
            annualized_return, sqft, year_built, zipcode, offered,
            neighborhood_rating, address, list_price,
            bedrooms, bathrooms, open_house, total_return_5yrs, main_photo_url, photo_urls} = this.props.props
        
   
     
        let isFavorited = Object.keys(this.props.saved).map(Number).includes(id);
        let isCart = Object.keys(this.props.cart).map(Number).includes(id);


        
        return (
          <div className="show-misc-container">
            <div className="cart-saved-ontop">
              <div className="flexbox-7">
                <div className="indicator">
                  {" "}
                  <i className="fas fa-circle color-green"></i> For Sale
                </div>

                <div className="showmisc-right">
                  {offered ? (
                    <div
                      className="bolded3"
                      onClick={() => {
                        this.props.history.push("/cart");
                      }}
                    >
                      {" "}
                      Pending Offer <i class="fab fa-buffer"></i>
                    </div>
                  ) : isCart ? (
                    <div
                      className="bolded3"
                      onClick={() => {
                        this.props.history.push("/cart");
                      }}
                    >
                      In Cart <i className="fas fa-shopping-cart"></i>
                    </div>
                  ) : (
                    <div
                      className=""
                      onClick={() => {
                        this.props.addItem(id);
                      }}
                    >
                      Add To Cart <i className="fas fa-shopping-cart cart3"></i>
                    </div>
                  )}

                  {isFavorited ? (
                    <div
                      className="saves-bolded-2"
                      onClick={() => {
                        let propertyId = id;
                        if (isFavorited) {
                          this.props.deleteSave(propertyId);
                        } else {
                          this.props.addSave(propertyId);
                        }
                      }}
                    >
                      Saved <i className="fas fa-heart"></i>
                    </div>
                  ) : (
                    <div
                      className=""
                      onClick={() => {
                        this.props.createSave(id);
                      }}
                    >
                      Save <i class="far fa-heart"></i>
                    </div>
                  )}
                </div>
              </div>

              <Bid
                price={list_price}
                id={id}
                currSliderBid={this.state.currSliderBid}
              />
            </div>

            <div className="calculator-container">
              <div className="slider-container">
                <div>
                  <div className="purchase-box-1">
                    <div className="flex-between-2">
                      <div>
                        Purchase Price &nbsp;
                        <i className="fas fa-info-circle tooltip">
                          <span class="tooltiptext">
                            Adjust the proposed purchase price to see impact on
                            the financial metrics.
                          </span>
                        </i>
                      </div>
                      <span>${this.addCommas(this.state.currSliderBid)}</span>
                    </div>
                    <div className="flex-right"></div>
                  </div>
                  <div className="slidecontainer">
                    <input
                      id="myRange"
                      class="slider"
                      type="range"
                      min={list_price / 2}
                      max={list_price + list_price / 3}
                      value={this.state.currSliderBid}
                      onChange={this.handleChange}
                      step={5}
                    />
                  </div>
                </div>
                <div>
                  <div className="purchase-box-1">
                    <div className="flex-between-2">
                      <div>
                        Down Payment &nbsp;
                        <i className="fas fa-info-circle tooltip">
                          <span class="tooltiptext">
                            The down payment is the cash portion of the property
                            price at the time of purchase when using leverage,
                            or full purchase price when buy all cash. This
                            amount is used to calculate your initial investment,
                            and projected returns.
                          </span>
                        </i>
                      </div>
                      <div>{this.state.currDownPayment}%</div>
                    </div>
                  </div>

                  <div className="slidecontainer">
                    <input
                      id="myRange"
                      class="slider"
                      type="range"
                      min="20"
                      max="100"
                      value={this.state.currDownPayment}
                      onChange={this.handleDownPayment}
                      step={5}
                    />
                  </div>
                </div>
              </div>

              <div className="house-financials-container">
                <div>
                  <div>
                    Total Return &nbsp;
                    <i className="fas fa-info-circle tooltip">
                      <span class="tooltiptext">
                        Total Return is your cash profit calculated as the sum
                        of your estimated (i) annual net operating cash flows
                        over 5 years, plus (ii) property net sale proceeds minus
                        your initial investment and outstanding loan balance.
                      </span>
                    </i>
                  </div>

                  <div>${this.addCommas(this.state.totalReturn)}</div>
                </div>
                <div>
                  <div>
                    Annualized Return &nbsp;
                    <i className="fas fa-info-circle tooltip">
                      <span class="tooltiptext">
                        Annualized Return, also known as Internal Rate of
                        Return, is a measure of annualized net return on an
                        equity investment. It equals the discount rate at which
                        the sum of the present value of all cash flows is zero.
                        Calculation is based on actual and budgeted values.
                      </span>
                    </i>
                  </div>

                  <div>{this.addDecimals(annualized_return)}%</div>
                </div>
                <div>
                  <div>
                    Cap Rate &nbsp;
                    <i className="fas fa-info-circle tooltip">
                      <span class="tooltiptext">
                        Cap rate is the percentage return calculated by dividing
                        net operating income in Year 1 by the property purchase
                        price. Your net operating cash flow excludes your loan
                        costs.
                      </span>
                    </i>
                  </div>

                  <div>{this.addDecimals(cap_rate)}%</div>
                </div>
                <div>
                  <div>
                    Gross Yield &nbsp;
                    <i className="fas fa-info-circle tooltip">
                      <span class="tooltiptext">
                        Gross yield is the annual income generated by an asset
                        before any expenses, divided by its purchase price.
                        Monthly rent x 12 months, divided by purchase price.
                      </span>
                    </i>
                  </div>

                  <div>{this.addDecimals(gross_yield)}%</div>
                </div>
                <div>
                  <div>
                    Cash Flow &nbsp;
                    <i className="fas fa-info-circle tooltip">
                      <span class="tooltiptext">
                        First year net cash flow is the estimated dollar amount
                        received after payment for property taxes, property
                        management, reserves for R&M, capital expenditures, and
                        loan payments. Assuming 5% vacancy and loan payments
                        based on the lending assumptions selected.
                      </span>
                    </i>
                  </div>

                  <div>${this.addCommas(cash_flow * 1000)}</div>
                </div>
                <div>
                  <div>
                    Appreciation &nbsp;
                    <i className="fas fa-info-circle tooltip">
                      <span class="tooltiptext">
                        The home price appreciation forecast is using either one
                        of the metrics below to estimate estimate property value
                        for the first 5 years, then drops to 3% for the
                        remainder of the holding period.
                      </span>
                    </i>
                  </div>

                  <div>{this.addDecimals(appreciation)}%</div>
                </div>
              </div>
            </div>
          </div>
        );    


    }
   


    
            

}

export default withRouter(connect(mSTP,mDTP)(ShowMisc));