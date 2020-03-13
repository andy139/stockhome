import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';


class Bid extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            bid :'',
        }

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


    render() {
         

        return(
            <div className="price-show-container">    
                    <div className="big-open-price">
                        <div>
                            Open House Price 
                        </div>
                        <br/>
                        <div>
                            {this.addCommas(this.props.price)}
                        </div>
                
                    </div>
                    <div className="bid-button-container">
                        <div className="input-container-bid">
                            <FontAwesomeIcon icon={faDollarSign}  className="signup-icons"/>
                            
                            <input type="text"
                                value={this.state.bid}
                                placeholder = {this.props.currSliderBid}
                                onChange={this.update('bid')}
                                className="signup-input-bid"
                            />
                        </div>
                        <br/>
                        <div> 
                            <input className="login-submit" type="submit" value="Review Bid" />  

                        </div>

                    </div>
            </div>
        )

    }


}


export default Bid;


