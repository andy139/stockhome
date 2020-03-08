import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";


class Splashpage extends React.Component {
    constructor(props){
        super(props)
    
    }




    render(){


        return(
            <div>

                <div className="background-container">
        
                    
                    <div className="background-image hero">
                        
                        <div className="background-text clipped hero-2">
                            
                            <div className="header-1">Build wealth through real estate</div>
                            <br/>
                            <div className="header-2">Stockhome makes investing in properties and ranches radically simple.</div>

                            <div className="view-properties-btn">VIEW PROPERTIES</div>

                        </div>

                        

            

                    </div>
                </div>
               




                <div className="why-invest-container">


                </div>

                <div className="featured-properties-container">

                </div>

                <div className="why-rentals-container">


                </div>

                <div className="my-information-container">


                </div>

            </div>





        );
        
        
    }


}

export default withRouter(Splashpage);