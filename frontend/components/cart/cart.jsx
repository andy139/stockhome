import React from 'react';
import { useEffect, useState, useCallback, useRef } from 'react';
import {withRouter} from 'react-router-dom';
import { connect } from 'react-redux';
import { addProperty, deleteProperty, fetchCart } from '../../actions/cart_actions';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';


const asArray = (properties) => {
    return Object.keys(properties).map(key => properties[key])
}


const mSTP = state => {
    return {
        loading: state.ui.loading,
        cart: asArray(state.ui.cart),

    }

}


const mDTP = dispatch => {
    return {

        addItem: (propertyId, bid) => dispatch(addProperty(propertyId, null)),
        fetchCart: () => dispatch(fetchCart()),
        deleteItem: (propertyId) => dispatch(deleteProperty(propertyId)),



    }


}





const addCommas = (nStr) => {
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



function Cart(props) {


    const [header, setHeader] = useState("cart");

    const [cart, setCart] = useState(props.cart)


    const mounted = useRef();

    useEffect(() => {

        setCart(props.cart);

        if(!mounted.current){
            props.fetchCart();
            mounted.current = true;

        } else {
            setCart(props.cart);

        }


    }, [props.cart])


    const loadingScreen = (
        <div className="loading-screen-save">

            <img src="https://stockhome-app-seeds.s3-us-west-1.amazonaws.com/Pulse-0.7s-244px.gif"></img>

        </div>

    )


    const offers = (

        <div>

        </div>

    )


    const noInvestments = (
        <div className="no-investments">
            <div className="no-item">
                You do not have any investments yet
            </div>
            <div className="no-item" >
                <img src="http://localhost:3000/assets/noresults.svg" onClick={() => props.history.push("/investment-property-marketplace")}></img>
            </div>

            <div className="browse-button" onClick={() => props.history.push("/investment-property-marketplace")}> 
                Browse Properties
            </div>
         

        </div>

    )


    const allItems = (
        cart.map((property,i) => {

            return (
            
                <div className="cart-item" key={property.id}>
        
                    <div className="cart-pic">
                        <img className="cart-photo" src={property.main_photo_url} onClick={() => props.history.push(`/property/${property.id}`)}></img>
                        <span className="cart-address" onClick={() => props.history.push(`/property/${property.id}`)}>{property.address}</span>
                    </div>

                    <div className="item-price">
                        <span>${addCommas(property.list_price)}</span>
                        <span>Make an Offer</span>
                        <span className="trashcan" onClick={() => props.deleteItem(property.id)}><i class="fas fa-trash"></i></span>
                    </div>
                    

                </div>
            )

        })
    )

    const cartItems = (


        <div>
            <div className="cart-subheader">

                <span className="cart-titles">CART ({props.cart.length})</span>
                <span className="cart-titles">OFFERS</span>
            </div>
            <div className="cart-description">
                <div className="fontweight2">
                    <b>Get started by either clicking "Make an offer" on a single property, or if you want to acquire all the properties in your Cart, click "Checkout All Properties".</b>
                </div>

                <div>
                      Make the property yours today!!! Payment of the fee will secure your property and prevent others from buying it.  
                </div>


            </div>
            <div className="cart-items">
                { props.cart.length === 0 ? noInvestments : allItems}

            </div>

    


        </div>
      


    )


    return(

        <div className="full-cart-page">
            <div className="cart-header">
                <div className="header-saved">Cart ({props.cart.length})</div>
                <div>
                    <i class="fas fa-envelope"></i> &nbsp;Subscribed&nbsp;
                        <i className="fas fa-info-circle tooltip">
                        <span class="tooltiptext">
                            You are subscribed to Stockhome and will receive updates
                            through your email!
                        </span>
                    </i>
                </div>
            </div>

            {cartItems}
            {/* {props.loading.indexLoading ? loadingScreen : cartItems} */}

        </div>

       
    
    
 
      

    )




}





export default withRouter(connect(mSTP,mDTP)(Cart));















