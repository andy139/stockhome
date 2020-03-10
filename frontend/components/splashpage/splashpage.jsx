import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import FeaturedIndexContainer from "../featured_properties/featured_index_container"
import featured_index_container from '../featured_properties/featured_index_container';

class Splashpage extends React.Component {
    constructor(props){
        super(props)
    
    }




    render(){


        return(
            <div className="splashpage-container">

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
                    <div className="why-invest-words">
                        Why invest through Stockhome?

                    </div>

                    <div id="flex-box-gurantees">
                        <div>
                            <img src="assets/2billion.png" className="img-splash-sizing"></img>
                            <div className="message-holder">
                                <div className="message title-fix">COMPLETED TRANSACTIONS</div>
                                <div className="message">More than $2 billion in completed SFR transactions in less than four years</div>
                                <div className="message"> <a href="#"> Learn More </a></div>
                            </div>
                        </div>
                        
                        <div>
                            <img src="assets/gurantee.png" className="img-splash-sizing"></img>
                            
                            <div className="message-holder">
                                <div className="message title-fix">STOCKHOME GUARANTEE</div>
                                <div className="message">Unique 30-day money-back guarantee + guaranteed rent on vacant properties</div>
                                <div className="message"> <a href="#"> Learn More </a></div>
                            </div>

                        </div>

                        <div>
                            <img src="assets/techadvc.png" className="img-splash-sizing"></img>
                            <div className="message-holder">
                                <div className="message title-fix">TECHNOLOGY ADVANTAGE</div>
                                <p className="message">Make investment decisions using insights, proprietary data and technology</p>
                                <div className="message"> <a href="#"> Learn More </a></div>
                            </div>
                          
                        </div>
                        
                    </div>

            
                </div>

                <div className="featured-properties-container">
                    <div className="featured-properties-text">Featured Properties</div>
                    <FeaturedIndexContainer/>
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