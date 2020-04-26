import React from 'react';
import {useState, useEffect, useCallback,useRef} from 'react';
import { useHistory } from "react-router-dom";
import {connect} from 'react-redux';
import { withRouter, browserHistory} from 'react-router';
import {selectProperty} from '../../reducers/selectors';
import { Link } from "react-router-dom";
import { addProperty, submitBid, fetchCart, fetchBid} from '../../actions/cart_actions'
import { fetchProperty} from '../../actions/property_actions';
import { createHashHistory } from 'history'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faLock, faEnvelope} from "@fortawesome/free-solid-svg-icons";

import { faUser } from "@fortawesome/free-solid-svg-icons";

const mSTP = (state, { match}) => {

    const propertyId = parseInt(match.params.propertyId);
    const property = selectProperty(state.entities, propertyId)


    return {
        bidProperty: property,
        propertyId: propertyId,
        bids: state.ui.bids
        
    }


}

const mDTP = (dispatch) => {

    return {
        bid: (id, bid, offered) => dispatch(submitBid(id, bid, offered)),
        fetchProperty: (id) => dispatch(fetchProperty(id)),
        fetchCart: () => dispatch(fetchCart()),
        fetchBid: (propertyId) => dispatch(fetchBid(propertyId)),


    }

}

function addCommas(nStr) {
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

function addCommasReg(nStr){
  debugger
  return parseInt(nStr.replace(/,/g, '')).toLocaleString();

}



function MakeOffer(props) {

      const [phase, setPhase] = useState(0);
      const [bid, setBid] = useState(0)



      const mounted = useRef();

     useEffect(() => {
  

       if (!mounted.current) {
         props.fetchProperty(props.propertyId);
         props.fetchCart();
         props.fetchBid(props.propertyId);
         mounted.current = true;
       } else {
            let currBid = props.bids[props.propertyId].bid;
            setBid(addCommas(currBid));
       }
     }, [props.bids]);



    function isNum(input = ''){

      // check if theres letters



      if (input.match(".*[a-zA-Z]+.*")) {
        return false;
      }


      let num = parseFloat(input.replace(/,/g, ''));

      if (isNaN(num)) {
        return false;
      } else {
        return true;
      }
    }





     function update(bid) {

       if (isNum(bid)) {
         if (bid === "") {
           setBid("")

         } else {
           const formatNumber = parseInt(bid.replace(/,/g, '')).toLocaleString();
           if (parseFloat(formatNumber.replace(/,/g, '')) < 1757000233233) setBid(formatNumber)

         }

       } 



     }





  
    

    if (!props.bid) return null;
    if (!props.bidProperty) return null;

    let currBid = props.bids[props.propertyId].bid;

    const { rent, cap_rate, municipality, city, gross_yield, appreciation, cash_flow,
        annualized_return, sqft, year_built, zipcode, lat, lng,
        neighborhood_rating, address, list_price, average_school_rating,
        bedrooms, bathrooms, open_house, total_return_5yrs, main_photo_url, photo_urls,id } = props.bidProperty

   
    const buyNavbar = (
      <div className="buy-navbar">
        <div className="navbar-logo .u-text-align-center--palm-wide">
          <Link to="/" className="nav-main-link">
            <img src="/assets/logo.png" className="logo-img" />
            <p className="logo-text">stockhome</p>
          </Link>
        </div>

        <div className="listing-price-offer">
          <div className="address-bid">
            <img className="saved-photo" src={main_photo_url}></img>
            &nbsp; {address}
          </div>

          <div className="address-bid">
            List Price &nbsp;
            <span className="border-rightb font-bigger">
              ${addCommas(list_price)}
            </span>{" "}
            Your Offer Price &nbsp;{" "}
            <span className="font-bigger">${addCommas(currBid)}</span>
          </div>
        </div>

        <div
          className="close-checkout"
          onClick={() => props.history.push("/cart")}
        >
          Close Checkout <i class="fas fa-times"></i>
        </div>
      </div>
    );


    let phaseArr = [
      <i class="fas fa-circle"></i>,
      <i class="fas fa-check"></i>,
      <i className="fas fa-circle clear2"></i>

    ];

    const timeLineBar = (
      <div className="progress-container">
        <div className="first-progress">
          {0 < phase ? phaseArr[1] : phaseArr[0]}

          {phase === 0 ? (
            <span className="progress-text">Overview</span>
          ) : (
            <span className="progress-text-unbolded">Overview</span>
          )}
        </div>

        <div className="progress-bar">
          <div
            className="filler"
            style={{ width: `${phase >= 1 ? 100 : 0}%` }}
          ></div>
        </div>

        <div className="first-progress">
          {1 < phase ? phaseArr[1] : phase === 0 ? phaseArr[2] : phaseArr[0]}
          {phase === 1 ? (
            <span className="progress-text">Investment Details</span>
          ) : (
            <span className="progress-text-unbolded">Investment Details</span>
          )}
        </div>

        <div className="progress-bar">
          <div
            className="filler"
            style={{ width: `${phase === 2 ? 100 : 0}%` }}
          ></div>
        </div>
        <div className="first-progress">
          {phase === 0 ? phaseArr[2] : phase === 1 ? phaseArr[2] : phaseArr[0]}

          {phase === 2 ? (
            <span className="progress-text">Marketplace Fee</span>
          ) : (
            <span className="progress-text-unbolded">Marketplace Fee</span>
          )}
        </div>
      </div>
    );
    

    const overView = (
      <div className="prog-overview">
        <div className="number-prog">1</div>
        <div className="prog-header">Overview</div>

        <div className="prog-container">
          <div className="bolded-price">
            {" "}
            List Price: {addCommas(list_price)}
          </div>
          <img className="bid-photo" src={main_photo_url}></img>
          <div>Offer Price</div>

          <div className="bid-input">
            <div className="input-container-bid">
              <FontAwesomeIcon
                icon={faDollarSign}
                className="signup-icons-bid"
              />

              <input
                type="text"
                value={addCommas(bid)}
                placeholder={bid}
                onChange={(e) => update(e.target.value)}
                className="signup-input-bid"
              />
            </div>
          </div>
        </div>
        <div
          className="next-progress"
          onClick={() => {
            debugger
            let formatNumber = parseInt((bid.replace(/,/g, '')).toLocaleString());
            props.bid(id, formatNumber)
            if (phase < 2) setPhase(phase + 1);
          }}
        >
          Continue
        </div>
      </div>
    ); 

    const investmentInfo = (
      <div className="prog-overview2">
        <div className="number-prog">2</div>
        <div className="prog-header">Investment Details</div>

        <div className="prog-container2">
          <div className="background-img-bid">
            {" "}
            <img className="bid-photo2" src={main_photo_url}></img>
          </div>
     
          <div className="bolded-price">{address}</div>
          <br />
          <div>
            <ol>
              <li>1. Listing price of property is {addCommas(list_price)}.</li>
              <br />
              <li>2. Your offer is {addCommas(bid)}.</li>
              <br />
              <li>
                3. Questions about the property? Feel free to contact me through{" "}
                <a href="www.linkedin.com/andy139" target="blank">
                  LinkedIn
                </a>.
              </li>
            </ol>
          </div>
        </div>

        <div className="buttonsbid">
          <div
            className="next-progress"
            onClick={() => {
              if (phase > 0) setPhase(phase - 1);
            }}
          >
            Back
          </div>
          <div
            className="next-progress"
            onClick={() => {
              if (phase < 2) setPhase(phase + 1);
            }}
          >
            Next
          </div>
        </div>
      </div>
    )


    const marketPlaceFee = (
      <div className="prog-overview2">
        <div className="number-prog">3</div>
        <div className="prog-header">Marketplace Fee</div>

        <div className="prog-container2">
          <div className="feeamount">
            <div>Marketplace Fee Amount</div>
            <div className="dollar-amounts">$1</div>
          </div>
          <div>
            <div className="bid-last-container">
              <div>This ones on us. Enjoy your property.</div>
              <br/>
              <div>Press next to confirm your offer!</div>
     
            </div>
            
          </div>
        </div>

        <div className="buttonsbid">
          <div
            className="next-progress"
            onClick={() => {
              if (phase > 0) setPhase(phase - 1);
            }}
          >
            Back
          </div>

          <Link  className="next-progress no-underline" to={{pathname: '/cart', state: {prevPath: props.location.pathname}}} >

            Next
          </Link>
        </div>
      </div>
    );

    let slides = [overView, investmentInfo, marketPlaceFee];



    return (
      <div className="buy-container">
        {buyNavbar}
        {timeLineBar}

        <div className="overview-container">
          {slides[phase]}

        </div>

      </div>
    );





}

export default withRouter(connect(mSTP,mDTP)(MakeOffer));