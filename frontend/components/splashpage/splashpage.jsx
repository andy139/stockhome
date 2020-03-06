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
                    <img src="https://www.10wallpaper.com/wallpaper/1366x768/1212/Stockholm_Sweden_landscape_photography_HD_wallpapers_1366x768.jpg" className="background-image"/>

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