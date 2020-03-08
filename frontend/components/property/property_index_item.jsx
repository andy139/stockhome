import React from 'react';
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

class PropertyItem extends React.Component {
    constructor(props) {
        super(props);

    }

  
    render(){

        

        //destrcture
        const { rent, cap_rate, 
            annualized_return, sqft, year_built,
            neighborhood_rating, address,
            bedrooms, bathrooms, open_house} = this.props.property


         
        return(


            <div className="property-item-container">
               <img src="https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=http%3A%2F%2Fm.sothebysrealty.com%2F1103i215%2F4158nwcpe2kq4mjg5s93fzay94i215&option=N&w=1024&permitphotoenlargement=false&fallbackimageurl=https%3A%2F%2Fstatic-sothebys-production-3.gtsstatic.net%2Fresources%2F_responsive%2Fimages%2Fcommon%2Fnophoto%2Fdefault.jpg" alt=""/>
               
               <div className="property-item-miscs">
                    <div className="property-item-miscs-box"></div>
                    <div className="property-item-miscs-box"></div>
                    <div className="property-item-miscs-box"></div>
                    <div className="property-item-miscs-box"></div>
               </div>

               <div className="property-address">
                 <div>{address}</div>  <div><FontAwesomeIcon icon={faHome}  className="property-icon"/> Open House</div>
               </div>


            </div>

        )
    }
}

export default withRouter(PropertyItem);



