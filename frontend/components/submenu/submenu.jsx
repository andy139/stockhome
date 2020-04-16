import React from 'react';
import {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {fetchSaves, createSave, deleteSave} from '../../actions/save_actions';
import { withRouter } from 'react-router-dom';


const saveArray = (properties) => {
    return Object.keys(properties).map(key => properties[key])
}

const mSTP = state => {

    return {
        saved: saveArray(state.ui.saved),

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

    debugger


    return(
        <div className="submenu-container">
            <div className="left-submenu">
                <Link to="/investment-property-marketplace" className="text-decoration hvr-underline-reveal">PROPERTIES</Link>   
                <Link to="/" className="text-decoration hvr-underline-reveal">RANCHES</Link>
            </div>

            <div className="right-submenu">

                {props.location.pathname === "/saved-roofs" ? 
                
                    <Link to="/saved-roofs" className="saves-bolded">
                        <i className="far fa-heart"></i> &nbsp; {props.saved.length > 0 ? props.saved.length : null}
                    </Link> : 
                    
                    <Link to="/saved-roofs" className="hvr-underline-reveal text-decoration">
                        <i className="far fa-heart"></i> &nbsp; {props.saved.length > 0 ? props.saved.length : null}
                    </Link>
                    
                    
                    }
    
                <div  className="hvr-underline-reveal text-decoration"><i className="fas fa-shopping-cart"></i> </div>

            </div>
        </div>

    )
}

export default withRouter(connect(mSTP, mDTP)(Submenu));


