import React from 'react';
import {useState, useEffect, useCallback} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchSaves, createSave, deleteSave} from '../../actions/save_actions';
import { withRouter } from 'react-router-dom';

import { closeModal, openModal } from "../../actions/modal_actions";


const saveArray = (properties) => {
    return Object.keys(properties).map(key => properties[key])
}

const mSTP = state => {

    debugger

    return {
       
        saved: saveArray(state.ui.saved),
        isLoggedIn: Object.keys(state.session).length !== 0,

    }



}


const mDTP = dispatch => {
    
    return {

        closeModal: () => dispatch(closeModal()),
        openModal: (type, data) => dispatch(openModal(type, data)),
        deleteSave: (propertyId) => dispatch(deleteSave(propertyId)),
        fetchSaves: () => dispatch(fetchSaves()),
        createSave: (propertyId) => dispatch(createSave(propertyId))


    }

}




function Submenu(props){



    let [toggleBold, setToggleBold] = useState(null)


    const handleClick = useCallback (
        (isLoggedIn) => {

          
            isLoggedIn ? props.history.push("/saved-roofs") : props.openModal("signupModal", null)
           
        },
        [],
 
    )

    const handleCartClick = useCallback(
      (isLoggedIn) => {


        isLoggedIn ? props.history.push("/cart") : props.openModal("signupModal", null)

      },
      [],

    )

     


    return (
      <div className="submenu-full-length">
        <div className="submenu-container">
          <div className="left-submenu">
            <Link
              to="/investment-property-marketplace"
              className="text-decoration hvr-underline-reveal"
            >
              PROPERTIES
            </Link>
            {/* <Link to="/" className="text-decoration hvr-underline-reveal">RANCHES</Link> */}
          </div>

          <div className="right-submenu">
            {props.location.pathname === "/saved-roofs" ? (
              <div
                onClick={() => handleClick(props.isLoggedIn)}
                className="hvr-underline-reveal text-decoration-bolded saves-bolded"
              >
                <i className="far fa-heart"></i> &nbsp;{" "}
                {props.saved.length > 0 ? props.saved.length : null}
              </div>
            ) : (
              <div
                onClick={() => handleClick(props.isLoggedIn)}
                className="hvr-underline-reveal text-decoration saves-click"
              >
                <i className="far fa-heart"></i> &nbsp;{" "}
                {props.saved.length > 0 ? props.saved.length : null}
              </div>
            )}


            {props.location.pathname === "/cart" ? (
              <div
                onClick={() => handleCartClick(props.isLoggedIn)}
                className="hvr-underline-reveal text-decoration-bolded cart-bolded"
              >
                <i className="fas fa-shopping-cart"></i> &nbsp;{" "}
                {props.saved.length > 0 ? props.saved.length : null}
              </div>
            ) : (
                <div
                  onClick={() => handleCartClick(props.isLoggedIn)}
                  className="hvr-underline-reveal text-decoration saves-click"
                >
                  <i className="fas fa-shopping-cart"></i> &nbsp;{" "}
                  {props.saved.length > 0 ? props.saved.length : null}
                </div>
              )}





          </div>
        </div>
      </div>
    );
}

export default withRouter(connect(mSTP, mDTP)(Submenu));


