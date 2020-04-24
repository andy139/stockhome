import React from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from "react-router";
import FeaturedIndexContainer from "../featured_properties/featured_index_container"
import featured_index_container from '../featured_properties/featured_index_container';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Footer from '../footer/footer';


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

                            <Link to="/investment-property-marketplace" className="view-properties-btn"> VIEW PROPERTIES</Link>
                        

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
                    <Link to="/investment-property-marketplace" className="view-properties-btn-feature">VIEW ALL PROPERTIES</Link>
                </div>

                <div className="why-rentals-container">

                    <div className="why-rentals-sub-container ">
                        <div className="sfr-text">
                            Why invest in a property in Stockholm?
                            <div className="sfr-text-2">
                            It's in Sweden, and it's awesome looking houses!
                            </div>
                        </div>

                    


                        <div className="flex-box-3">
                            <div>
                                <img src="assets/three-trillion.png" className="lazy-img" ></img>
                                <div className="flex-box-3-text">
                                    That's alot of money 
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src="assets/16M.png" className="lazy-img"></img>
                                    <img src="assets/house_icon.png" className="lazy-img"></img>
                                </div>
                                
                                <div className="flex-box-3-text"> 
                                    That's alot of houses 
                                </div>
                            </div>
                            <div>
                                <div>
                                    <img src="assets/thirteen-M.png" className="lazy-img"></img>
                                    <img src="assets/house_icon.png" className="lazy-img"></img>
                                    <img src="assets/Arrow_green.png" className="lazy-img"></img>
                                </div>
                                <div className="flex-box-3-text">
                                    Alot of increase!
                                </div>
                            </div>
                        </div>

      
                               
                
                       

                 
                    </div>
            
                </div>
              
                    <Footer />
            
                

                    

            </div>





        );
        
        
    }


}

export default withRouter(Splashpage);