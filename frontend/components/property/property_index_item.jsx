import React from 'react';
import {withRouter} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

class PropertyItem extends React.Component {
    constructor(props) {
        super(props);

        this.openHouse = this.openHouse.bind(this);
    }


    openHouse(){
        if (this.props.property.open_house) {
            return(
                <div className="property-icon"><FontAwesomeIcon icon={faHome}  className="property-icon"/> Open House</div>
            )
        } else {
            return(null);
        }

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
    

  
    render(){

        

        //destrcture
        const { rent, cap_rate, 
            annualized_return, sqft, year_built,
            neighborhood_rating, address, list_price,
            bedrooms, bathrooms, open_house, total_return_5yrs} = this.props.property

          
         
        return(


            <div className="property-item-container">

               

            <div className="property-image"
                style={{
                "background-image" : "url(https://img.gtsstatic.net/reno/imagereader.aspx?imageurl=http%3A%2F%2Fm.sothebysrealty.com%2F1103i215%2Fkevphfby46ghmmt8gf54ez6ms1i215&option=N&w=1024&permitphotoenlargement=false&fallbackimageurl=https%3A%2F%2Fstatic-sothebys-production-0.gtsstatic.net%2Fresources%2F_responsive%2Fimages%2Fcommon%2Fnophoto%2Fdefault.jpg)"
                , "width": "100%", "height": "50%", "background-size" : "cover"}}
            > 

                <div className="background-child">${this.addCommas(list_price)}</div>
                
            </div>
              
              
               
               <div className="property-item-miscs">
                    <div className="property-item-miscs-box">
                        <div>Current Rent</div>
                        <div>${this.addCommas(rent)}</div>
                    </div>
                    <div className="property-item-miscs-box">
                        <div>Cap Rate </div>
                        <div>{cap_rate}%</div>
                    </div>
                    <div className="property-item-miscs-box">
                        <div>Total Return </div>
                        <div> {total_return_5yrs} </div>
                    </div>
                    <div className="property-item-miscs-box">
                        <div>Neighborhood</div>
                        <div>{neighborhood_rating} stars</div>
                    </div>
               </div>

               <div className="property-address">
                 <div className="property-address-box">{address}</div>  
                {this.openHouse()}
               </div>


            </div>

        )
    }
}

export default withRouter(PropertyItem);



