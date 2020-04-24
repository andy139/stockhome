import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
import {connect} from 'react-redux';
import { addProperty, submitBid } from '../../actions/cart_actions';
import { openModal} from '../../actions/modal_actions'
import {withRouter} from 'react-router-dom';

const mDTP = (dispatch) => {

    return{
        bid: (id, bid) => dispatch(submitBid(id, bid)),

        openModal: (type,data) => dispatch(openModal(type,data))
    }


}

const mSTP = (state) => {
    return {
        cart: state.ui.cart,
        isLoggedIn: Object.keys(state.session).length !== 0,
    }


}


class Bid extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            bid :'',
        }


        this.update = this.update.bind(this);
   

    }

    componentDidUpdate(prevProps){
         
        if (this.props.currSliderBid !== prevProps.currSliderBid){
             
            this.setState({bid: this.props.currSliderBid})
        }

    }
    componentDidMount(){
        this.setState({bid: this.props.currSliderBid})
    }


    
    update(field) {

         

        this.setState({bid: field})

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
                            ${this.addCommas(this.props.price)}
                        </div>
                
                    </div>
                    <div className="bid-button-container">
                        <div className="input-container-bid">
                            <FontAwesomeIcon icon={faDollarSign}  className="signup-icons-bid"/>
                            
                            <input type="text"
                                value={this.state.bid}
                                placeholder = {this.props.currSliderBid}
                                onChange={ e => this.update(e.target.value)}
                                className="signup-input-bid"
                            />
                        </div>
                        <br/>
                        <div> 
                            <div className="bid-submit" onClick={() => {
                                this.props.isLoggedIn ?
                                this.props
                                  .bid(this.props.id, this.state.bid)
                                  .then(() =>
                                    this.props.history.push(
                                      `/make-offer/${this.props.id}`
                                    )
                                  ) : this.props.openModal("signupModal", null);
                             
                            
                                }}>
                                Review Bid
                            </div>  

                        </div>

                    </div>
            </div>
        )

    }


}


export default withRouter(connect(mSTP,mDTP)(Bid));


