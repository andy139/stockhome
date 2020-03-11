import React from 'react';
import {Link} from 'react-router-dom';

function Submenu(){

    return(
        <div className="submenu-container">
            <div className="left-submenu">
                <Link to="/investment-property-marketplace" className="text-decoration hvr-underline-reveal">PROPERTIES</Link>   
                <Link to="/" className="text-decoration hvr-underline-reveal">RANCHES</Link>
            </div>

            <div className="right-submenu">
                <div className="hvr-underline-reveal text-decoration"><i className="far fa-heart"></i> Saved</div>
                <div  className="hvr-underline-reveal text-decoration"><i className="fas fa-shopping-cart"></i> Cart</div>

            </div>
        </div>

    )
}

export default Submenu;


