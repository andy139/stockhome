import React from 'react';


function ShowMisc() {

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

}

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