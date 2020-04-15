import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchSaves, createSave, deleteSave} from '../../actions/save_actions';

const mSTP = state => {

    return {
        saved: state.ui.saved,

    }



}


const mDTP = dispatch => {
    
    return {

        deleteSave: (propertyId) => dispatch(deleteSave(propertyId)),
        fetchSaves: () => dispatch(fetchSaves()),
        createSave: (propertyId) => dispatch(createSave(propertyId))


    }

}




function Submenu(props){



    let [toggleBold, setToggleBold] = useState(null)


    return(
        <div className="submenu-container">
            <div className="left-submenu">
                <Link to="/investment-property-marketplace" className="text-decoration hvr-underline-reveal">PROPERTIES</Link>   
                <Link to="/" className="text-decoration hvr-underline-reveal">RANCHES</Link>
            </div>

            <div className="right-submenu">
                <Link to="/saved-roofs" className="hvr-underline-reveal text-decoration"><i className="far fa-heart"></i> Saved</Link>
                <div  className="hvr-underline-reveal text-decoration"><i className="fas fa-shopping-cart"></i> Cart</div>

            </div>
        </div>

    )
}

export default connect(mSTP, mDTP)(Submenu);


